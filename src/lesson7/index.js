//proxy and Reflect

console.log(
    `
    Proxy用于修改某些操作的默认行为,等同于语言层面做出修改,所以属于一种"元编程", 既对编程语言进行编程.
    `
);

var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}`);
        return Reflect.get(...arguments);
    },
    set: function(target, key, value, recevier) {
        console.log(`setting ${key}`);
        return Reflect.set(...arguments);
    }
});

obj.name = "harry";
obj.name;

obj.count = 1;
++obj.count;

console.log(`
    proxy 的用法
    var proxy = new Proxy(target, handler);
    
    target参数表示所要拦截的目标对象, handler参数也是一个对象, 用来定制拦截行为
`);

var proxy = new Proxy({}, {
    get: function(target, key, recevier){
        return 35;
    }
});

proxy.time;
proxy.name;
console.log(proxy.title);

console.log(`
    如果 handler 是一个空对象, 没有任何拦截效果, 访问handler就等同于访问target
`);

var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = "test";
console.log(target.a);

console.log(`
    可以将Proxy对象, 设置到object.proxy属性, 从而可以在object对象上调用
`);

var object = {proxy: new Proxy(target, handler)};

console.log(`
    proxy对象也可以作为其他对象的原型对象
`);

var obj = Object.create(proxy);

console.log(`
    同一个拦截器,可以设置多个拦截操作
`);

var handler = {
    get: function (target, key, receiver) {
        if(key === 'prototype') return Object.prototype;
        return `Hello, ${key}`;
    },
    apply: function(target, context, args){
        return args[0];
    },
    construct: function (target, args) {
        return args[1];
    }
};

var fproxy = new Proxy(function(x,y){ return x+y;}, handler);


console.log(fproxy(1,2));
console.log(new fproxy(1, new Number(2)));
console.log(fproxy.foo);
console.log(fproxy.prototype);

console.log(`
proxy实例方法
    get方法用于拦截某个属性的读取操作。上文已经有一个例子，下面是另一个拦截读取操作的例子
`);

var person = {
    name: "张三"
};

var proxy = new Proxy(person, {
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});

proxy.name // "张三"
//proxy.age // 抛出一个错误

let proto = new Proxy({}, {
    get(target, propertyKey, receiver) {
        console.log('GET '+propertyKey);
        return target[propertyKey];
    }
});

var obj = Object.create(proto);
obj.xxx // "GET xxx"

function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };

    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1]); // c

var pipe = (function () {
    var pipe;
    return function (value) {
        pipe = [];
        return new Proxy({}, {
            get: function (pipeObject, fnName) {
                if (fnName == "get") {
                    return pipe.reduce(function (val, fn) {
                        return fn(val);
                    }, value);
                }
                pipe.push(window[fnName]);
                return pipeObject;
            }
        });
    }
}());

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split('').reverse().join('') | 0;

//pipe(3).double.pow.reverseInt.get
// 63; it can not work on babel; chrome is good

// const dom = new Proxy({}, {
//     get(target, property) {
//         return function(attrs = {}, ...children) {
//             const el = document.createElement(property);
//             for (let prop of Object.keys(attrs)) {
//                 el.setAttribute(prop, attrs[prop]);
//             }
//             for (let child of children) {
//                 if (typeof child === 'string') {
//                     child = document.createTextNode(child);
//                 }
//                 el.appendChild(child);
//             }
//             return el;
//         }
//     }
// });
//
// const el = dom.div({},
//     'Hello, my name is ',
//     dom.a({href: '//example.com'}, 'Mark'),
//     '. I like:',
//     dom.ul({},
//         dom.li({}, 'The web'),
//         dom.li({}, 'Food'),
//         dom.li({}, '…actually that\'s it')
//     )
// );
//
// document.body.appendChild(el);

// So far it is not work on babel, but chrome is good


console.log(`
    set 方法用来拦截某个属性的赋值操作
`);
//
// let validator = {
//     set: function(obj, prop, value) {
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('The age is not an integer');
//             }
//             if (value > 200) {
//                 throw new RangeError('The age seems invalid');
//             }
//         }
//
//         // 对于age以外的属性，直接保存
//         obj[prop] = value;
//     }
// };
//
// var person = new Proxy({}, validator);
//
// person.age = 100;
//
// person.age // 100
// person.age = 'young' // 报错
// person.age = 300 // 报错

// babel 对 Proxy 的支持的不是很好


var handler = {
    get (target, key) {
        invariant(key, 'get');
        return target[key];
    },
    set (target, key, value) {
        invariant(key, 'set');
        return true;
    }
}
function invariant (key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}
var target = {};
var proxy = new Proxy(target, handler);
//proxy._prop
// Error: Invalid attempt to get private "_prop" property
//proxy._prop = 'c'
// Error: Invalid attempt to set private "_prop" property

//http://stackoverflow.com/questions/35025204/javascript-proxy-support-in-babel
//proxy support depend on browser

console.log(`
    apply方法拦截函数的调用, call 和 apply 操作
`);

// var target = function () { return 'I am the target'; };
// var handler = {
//     apply: function () {
//         return 'I am the proxy';
//     }
// };
//
// var p = new Proxy(target, handler);
//
// p();

var twice = {
    apply (target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
    }
};
function sum (left, right) {
    return left + right;
};
var proxy = new Proxy(sum, twice);
proxy(1, 2) // 6
proxy.call(null, 5, 6) // 22
proxy.apply(null, [7, 8]) // 30

console.log(`
    has方法可以隐藏某些属性, 不被in操作符发现.
`);

var handler = {
    has (target, key) {
        if (key[0] === '_') {
            return false;
        }
        return key in target;
    }
};
var target = { _prop: 'foo', prop: 'foo' };
var proxy = new Proxy(target, handler);
'_prop' in proxy // false

console.log(`
    如果原对象不可配置或者禁止扩展，这时has拦截会报错。
`);
//
// var obj = { a: 10 };
// Object.preventExtensions(obj);
// var p = new Proxy(obj, {
//     has: function(target, prop) {
//         return false;
//     }
// });
//
// "a" in p; // TypeError is thrown

console.log(
    `
    construct 用于拦截new命令
    `
);

var p = new Proxy(function() {}, {
    construct: function(target, args) {
        console.log('called: ' + args.join(', '));
        return { value: args[0] * 10 };
    }
});

new p(1).value
// "called: 1"
// 10

//如果 construct 返回的不是对象, 将会报错
var p = new Proxy(function() {}, {
    construct: function(target, argumentsList) {
        return 1;
    }
});

//new p() // 报错

console.log(`
    Proxy.revocable方法返回一个可取消的Proxy实例。
`);

var target = {};
var handler = {};

var {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
//proxy.foo // TypeError: Revoked

console.log(
    `
    Reflect
    `
);


// Reflect对象的方法清单如下，共14个。
//
// Reflect.apply(target,thisArg,args)
// Reflect.construct(target,args)
// Reflect.get(target,name,receiver)
// Reflect.set(target,name,value,receiver)
// Reflect.defineProperty(target,name,desc)
// Reflect.deleteProperty(target,name)
// Reflect.has(target,name)
// Reflect.ownKeys(target)
// Reflect.enumerate(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)

