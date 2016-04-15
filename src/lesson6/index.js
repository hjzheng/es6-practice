//对象的扩展
console.log(`
属性的简洁表示法
`);

var foo = 'bar';
var baz = {foo};
baz // {foo: "bar"}

// 等同于
var baz = {foo: foo};


function f(x, y) {
    return {x, y};
}

// 等同于

function f(x, y) {
    return {x: x, y: y};
}

f(1, 2) // Object {x: 1, y: 2}

var o = {
    method() {
        return "Hello!";
    }
};

// 等同于

var o = {
    method: function() {
        return "Hello!";
    }
};

function getPoint() {
    var x = 1;
    var y = 10;
    return {x, y};
}

getPoint()
// {x:1, y:10}

console.log(`
属性名的表达式
`);

let propKey = 'foo';

let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};

var lastWord = 'last word';

var a = {
    'first word': 'hello',
    [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"

console.log(`
    方法的name属性
`);

var person = {
    sayName() {
        console.log(this.name);
    },
    get firstName() {
        return "Nicholas"
    }
}

person.sayName.name   // "sayName"
person.firstName.name // "get firstName"

console.log(`
    Object.is()
    Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
    不同之处只有两个：一是+0不等于-0，二是NaN等于自身
`);

+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

console.log(`
    Object.assign()
    Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
`);

var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

console.log(`
    Object.assign方法的用途
    1.为对象添加属性
    2.为对象添加方法
    3.克隆对象
    4.合并对象
    5.为属性指定默认值
`);

class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}

class SomeClass {

}

Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2) {
    //···
    },
    anotherMethod() {
    //···
    }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
    //···
};
SomeClass.prototype.anotherMethod = function () {
    //···
};

function clone(origin) {
    return Object.assign({}, origin);
}

// 不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。
function clone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}

const merge =
    (target, ...sources) => Object.assign(target, ...sources);

const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};

function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
}