(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _lesson = require("./lesson1");

var _lesson2 = require("./lesson2");

var _lesson3 = require("./lesson3");

var _lesson4 = require("./lesson4");

var _lesson5 = require("./lesson5");

var _lesson6 = require("./lesson6");

},{"./lesson1":2,"./lesson2":3,"./lesson3":4,"./lesson4":5,"./lesson5":6,"./lesson6":7}],2:[function(require,module,exports){
'use strict';
//let和const命令

console.log('阮一峰 ECMAScript6 入门 学习 \n     这里只列出项目中用的规则和知识点, 更多内容, 自己看书');

console.log('Lesson 1 Let和const命令\n\nLet\n基本用法\n     ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效');

{
    var _a = 10;
    var b = 1;
}

//为了保证代码正常运行, 加入try catch 但是依然将错误打印出来
try {
    a; // ReferenceError: a is not defined.
    b; // 1
} catch (error) {
    console.log(error);
}

console.log('\n不存在变量提升\n    let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。\n    \n    注意: 有待验证, 目前在我的环境下, 没有报错, 只是返回undefined, 与babel转成ES5有关, \n    \n    实际在 chrome 下运行, 结果是我们期望的. \n    \n    所以在实际测试中, 请用浏览器,直接运行, 但是这是准则也是在以后写ES6所应该注意的\n    ');

try {
    console.log(foo); // 输出undefined
    console.log(bar); // 报错ReferenceError 有待验证, 目前在我的环境下, 没有报错, 只是返回undefined

    var foo = 2;
    var bar = 2;
} catch (error) {
    console.log(error); //应该输出 ReferenceError
}

console.log('\n暂时性死区(TDZ)\n    只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。');

try {
    var tmp = 123;

    if (true) {
        _tmp = 'abc'; // ReferenceError
        var _tmp = void 0;
    }
} catch (error) {
    console.log(error); //应该输出 ReferenceError
}

console.log('\n不允许重复声明\n    let不允许在相同作用域内，重复声明同一个变量');

function Foo() {
    var a = 10;
    //var a = 1; //为了防止报 重复声明的错误 所以注释掉
}

function Bar() {
    var a = 10;
    //let a = 1;  //为了防止报 重复声明的错误 所以注释掉
}

console.log('\nconst\n    const也用来声明变量，其他特性和let一样, 但是声明的是常量。一旦声明，常量的值就不能改变。');

var PI = 3.1415;
PI; // 3.1415

//PI = 3;   // TypeError: "PI" is read-only, 为了防止报错, 所以注释

console.log('\n    const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。');

},{}],3:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//变量的解构赋值
console.log("Lesson 2 变量的解析赋值\n\n数组的结构赋值\n基本用法\n    ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构");

var foo = 1;
var bar = 2;
var baz = 3;


console.log("\n     " + foo + " // 1\n     " + bar + " // 2\n     " + baz + " // 3");

var _ref = ["foo", "bar", "baz"];
var third = _ref[2];


console.log("\n    " + third + " //baz\n    ");

var _ref2 = [1, 2, 3];
var x = _ref2[0];
var y = _ref2[2];


console.log("\n    " + x + " // 1\n    " + y + " // 3\n    ");

var head = 1;
var tail = [2, 3, 4];


console.log("\n    " + head + " // 1\n    " + tail + " // [2, 3, 4]\n    ");

var _ref3 = ['a'];
var a = _ref3[0];
var b = _ref3[1];

var c = _ref3.slice(2);

console.log("\n    " + a + " // \"a\"\n    " + b + " // undefined\n    " + c + " // []\n    ");

console.log("\n默认值\n    解构赋值允许指定默认值\n    ");

var _ref4 = [];
var _ref4$ = _ref4[0];
var bool = _ref4$ === undefined ? true : _ref4$;

console.log("\n    " + bool + " // true\n    ");

var _ref5 = ['a'];
var d = _ref5[0];
var _ref5$ = _ref5[1];
var e = _ref5$ === undefined ? 'b' : _ref5$; // d='a', e='b'

var f = 'a';
var _undefined = undefined;
var g = _undefined === undefined ? 'b' : _undefined; // f='a', g='b'

console.log("\n    " + d + " \n    " + e + "\n    " + f + "\n    " + g + "\n    ");

console.log("\n    注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。\n    ");

console.log("\n    如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。    \n    ");

function faaa() {
    console.log('aaa');
}

var _ = 1;
var fa = _ === undefined ? faaa() : _;


console.log("\n    上面代码中，因为fa能取到值，所以函数faaa根本不会执行。\n    ");

console.log("\n对象的解构赋值\n    解构不仅可以用于数组，还可以用于对象。\n    ");

var _foo1$bar = { foo1: "aaa", bar1: "bbb" };
var foo1 = _foo1$bar.foo1;
var bar1 = _foo1$bar.bar1;

foo1; // "aaa"
bar1; // "bbb"

console.log("\n    " + foo1 + "\n    " + bar1 + "\n    \n    对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。\n    ");

console.log("\n字符串也可以解构赋值。\n    这是因为此时，字符串被转换成了一个类似数组的对象。\n    类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。\n    ");

var _hello = 'hello';

var _hello2 = _slicedToArray(_hello, 6);

var l = _hello2[0];
var m = _hello2[1];
var n = _hello2[2];
var o = _hello2[3];
var p = _hello2[4];
var q = _hello2[5];


console.log("\n    " + l + "\n    " + m + "\n    " + n + "\n    " + o + "\n    " + p + "\n    " + q + "\n    ");

var _hello3 = 'hello';
var len = _hello3.length;


console.log(len);

console.log("\n数值和布尔值的解构赋值\n    解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。");

var _2 = 123;
var num = _2.toString;

num === Number.prototype.toString; // true

var _true = true;
var boo = _true.toString;

boo === Boolean.prototype.toString; // true

console.log("\n    上面代码中，数值和布尔值的包装对象都有toString属性，因此变量都能取到值。\n    解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。\n    ");

},{}],4:[function(require,module,exports){
'use strict';

//字符串的扩展和数字的扩展
console.log('\nincludes(), startsWith(), endsWith()\n    \n    includes()：返回布尔值，表示是否找到了参数字符串。\n    startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。\n    endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。\n    ');

var str1 = 'Hello world!';

str1.startsWith('Hello'); // true
str1.endsWith('!'); // true
str1.includes('o'); // true

var str2 = 'Hello world!';

str2.startsWith('world', 6); // true
str2.endsWith('Hello', 5); // true
str2.includes('Hello', 6); // false

/**
 * 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
 */

console.log('\n    repeat()\n    repeat方法返回一个新字符串，表示将原字符串重复n次。\n');

'x'.repeat(3); // "xxx"
'hello'.repeat(2); // "hellohello"
'na'.repeat(0); //

//字符串模板

//数字的扩展, 具体增加了一些新方法, 具体请翻书查阅

},{}],5:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//数组的扩展
console.log('\nArray.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。\n\n下面是一个类似数组的对象，Array.from将它转为真正的数组。\n\n关于 Array.from 更多细节,可以参考 哥 翻译的第17章第一节的内容\n    ');

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
console.log(arr1);

// ES6的写法
var arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);

function foo() {
    var arr3 = Array.from(arguments);
    console.log(arr3);
}

function bar() {
    var arr3 = [].concat(Array.prototype.slice.call(arguments));
    console.log(arr3);
}

foo(1, 2, 3, [4, 5]);

bar(1, 2, 3, [4, 5]);

console.log('\nArray.of 方法\n\nArray.of(item_0, item_1, ···) 可以创建一个由 item_0、item_1 等元素组成的数组。\n是弥补数组构造函数Array()的不足\n');

console.log(Array.of(1));
console.log(Array.of(1, 2));

//数组的实例方法

console.log('\n    数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。\n    \n    它接受三个参数:\n    target（必需）：从该位置开始替换数据。\n    start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。\n    end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。\n    ');

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);

console.log('\n\n    数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，\n    直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined\n\n');

[1, 4, -5, 10].find(function (n) {
    return n < 0;
});

console.log('\n    数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。\n');

[1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9;
}); // 2

console.log('\n    fill方法使用给定值，填充一个数组。\n');

['a', 'b', 'c'].fill(7);
// [7, 7, 7]

new Array(3).fill(7);
// [7, 7, 7]

console.log('\n    entries()，keys()和values()——用于遍历数组。\n');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ['a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;

        console.log(index);
    }
    // 0
    // 1

    // for (let elem of ['a', 'b'].values()) {
    //     console.log(elem);
    // }
    // 'a'
    // 'b'
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = ['a', 'b'].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2);

        var _index = _step2$value[0];
        var elem = _step2$value[1];

        console.log(_index, elem);
    }
    // 0 "a"
    // 1 "b"
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

},{}],6:[function(require,module,exports){
'use strict';

var _console, _console2;

//函数的扩展

console.log('\n    函数参数的默认值\n');

function Point() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    this.x = x;
    this.y = y;
}

var p = new Point();

function log(x) {
    var y = arguments.length <= 1 || arguments[1] === undefined ? 'World' : arguments[1];

    console.log(x, y);
}

log('Hello'); // Hello World
log('Hello', 'China'); // Hello China
log('Hello', ''); // Hello

console.log('\n与解构赋值默认值结合使用\n    参数默认值可以与解构赋值的默认值，结合起来使用。\n');

function foo(_ref) {
    var x = _ref.x;
    var _ref$y = _ref.y;
    var y = _ref$y === undefined ? 5 : _ref$y;

    console.log(x, y);
}

foo({}); // undefined, 5
foo({ x: 1 }); // 1, 5
foo({ x: 1, y: 2 }); // 1, 2
//foo() // TypeError: Cannot read property 'x' of undefined

function fetch(url) {
    var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref2$body = _ref2.body;
    var body = _ref2$body === undefined ? '' : _ref2$body;
    var _ref2$method = _ref2.method;
    var method = _ref2$method === undefined ? 'GET' : _ref2$method;
    var _ref2$headers = _ref2.headers;
    var headers = _ref2$headers === undefined ? {} : _ref2$headers;

    console.log(method);
}

fetch('http://example.com', {});
// "GET"

fetch('http://example.com');
// "GET"

console.log('\n函数的length属性\n    指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真\n');

(function (a) {}).length; // 1
(function () {
    var a = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
}).length; // 0
(function (a, b) {
    var c = arguments.length <= 2 || arguments[2] === undefined ? 5 : arguments[2];
}).length; // 2

console.log('\n    利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。\n');
function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo() {
    var mustBeProvided = arguments.length <= 0 || arguments[0] === undefined ? throwIfMissing() : arguments[0];

    return mustBeProvided;
}

//foo()
// Error: Missing parameter

console.log('\nrest参数\n    ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。\n');

function add() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            sum += val;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum;
}

add(2, 5, 3); // 10

// arguments变量的写法
//const sortNumbers = () =>
//    Array.prototype.slice.call(arguments).sort();

// rest参数的写法
var sortNumbers = function sortNumbers() {
    for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        numbers[_key2] = arguments[_key2];
    }

    return numbers.sort();
};

//注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

// 报错
// function f(a, ...b, c) {
//     // ...
// }

//函数的length属性，不包括rest参数。

//(function(a) {}).length;  // 1
//(function(...a) {}).length;  // 0
//(function(a, ...b) {}).length;  // 1

console.log('\n扩展运算符\n    扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。\n');

(_console = console).log.apply(_console, [1, 2, 3]);
// 1 2 3

(_console2 = console).log.apply(_console2, [1].concat([2, 3, 4], [5]));
// 1 2 3 4 5

console.log('\n    扩展运算的应用\n    合并数组\n');

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
[].concat(arr1, arr2, arr3);

console.log('\n箭头函数\n\n箭头函数有几个使用注意点。\n\n（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。\n\n（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。\n\n（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。\n\n（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。\n');

var numbers = function numbers() {
    for (var _len3 = arguments.length, nums = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nums[_key3] = arguments[_key3];
    }

    return nums;
};

numbers(1, 2, 3, 4, 5);

},{}],7:[function(require,module,exports){
"use strict";

var _obj;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//对象的扩展
console.log("\n属性的简洁表示法\n");

var foo = 'bar';
var baz = { foo: foo };
baz; // {foo: "bar"}

// 等同于
var baz = { foo: foo };

function f(x, y) {
    return { x: x, y: y };
}

// 等同于

function f(x, y) {
    return { x: x, y: y };
}

f(1, 2); // Object {x: 1, y: 2}

var o = {
    method: function method() {
        return "Hello!";
    }
};

// 等同于

var o = {
    method: function method() {
        return "Hello!";
    }
};

function getPoint() {
    var x = 1;
    var y = 10;
    return { x: x, y: y };
}

getPoint();
// {x:1, y:10}

console.log("\n属性名的表达式\n");

var propKey = 'foo';

var obj = (_obj = {}, _defineProperty(_obj, propKey, true), _defineProperty(_obj, 'a' + 'bc', 123), _obj);

var lastWord = 'last word';

var a = _defineProperty({
    'first word': 'hello'
}, lastWord, 'world');

a['first word']; // "hello"
a[lastWord]; // "world"
a['last word']; // "world"

console.log("\n    方法的name属性\n");

var person = {
    sayName: function sayName() {
        console.log(this.name);
    },

    get firstName() {
        return "Nicholas";
    }
};

person.sayName.name; // "sayName"
person.firstName.name; // "get firstName"

console.log("\n    Object.is()\n    Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。\n    不同之处只有两个：一是+0不等于-0，二是NaN等于自身\n");

+0 === -0; //true
NaN === NaN; // false

Object.is(+0, -0); // false
Object.is(NaN, NaN); // true

console.log("\n    Object.assign()\n    Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。\n");

var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
target; // {a:1, b:2, c:3}

console.log("\n    Object.assign方法的用途\n    1.为对象添加属性\n    2.为对象添加方法\n    3.克隆对象\n    4.合并对象\n    5.为属性指定默认值\n");

var Point = function Point(x, y) {
    _classCallCheck(this, Point);

    Object.assign(this, { x: x, y: y });
};

var SomeClass = function SomeClass() {
    _classCallCheck(this, SomeClass);
};

Object.assign(SomeClass.prototype, {
    someMethod: function someMethod(arg1, arg2) {
        //···
    },
    anotherMethod: function anotherMethod() {
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
    var originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}

var merge = function merge(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    return Object.assign.apply(Object, [target].concat(sources));
};

var DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};

function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvbGVzc29uMS9pbmRleC5qcyIsInNyYy9sZXNzb24yL2luZGV4LmpzIiwic3JjL2xlc3NvbjMvaW5kZXguanMiLCJzcmMvbGVzc29uNC9pbmRleC5qcyIsInNyYy9sZXNzb241L2luZGV4LmpzIiwic3JjL2xlc3NvbjYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7QUNMQTs7O0FBR0EsUUFBUSxHQUFSOztBQUtBLFFBQVEsR0FBUjs7QUFRQTtBQUNJLFFBQUksS0FBSSxFQUFKLENBRFI7QUFFSSxRQUFJLElBQUksQ0FBSixDQUZSOzs7O0FBTUEsSUFBSTtBQUNBO0FBREEsS0FFQTtBQUZBLENBQUosQ0FHRSxPQUFPLEtBQVAsRUFBYztBQUNaLFlBQVEsR0FBUixDQUFZLEtBQVosRUFEWTtDQUFkOztBQUlGLFFBQVEsR0FBUjs7QUFhQSxJQUFJO0FBQ0EsWUFBUSxHQUFSLENBQVksR0FBWjtBQURBLFdBRUEsQ0FBUSxHQUFSLENBQVksR0FBWjs7QUFGQSxRQUlJLE1BQU0sQ0FBTixDQUpKO0FBS0EsUUFBSSxNQUFNLENBQU4sQ0FMSjtDQUFKLENBTUUsT0FBTyxLQUFQLEVBQWM7QUFDWixZQUFRLEdBQVIsQ0FBWSxLQUFaO0FBRFksQ0FBZDs7QUFJRixRQUFRLEdBQVI7O0FBTUEsSUFBSTtBQUNBLFFBQUksTUFBTSxHQUFOLENBREo7O0FBR0EsUUFBSSxJQUFKLEVBQVU7QUFDTixlQUFNLEtBQU47QUFETSxZQUVGLGFBQUosQ0FGTTtLQUFWO0NBSEosQ0FPRSxPQUFPLEtBQVAsRUFBYztBQUNaLFlBQVEsR0FBUixDQUFZLEtBQVo7QUFEWSxDQUFkOztBQUlGLFFBQVEsR0FBUjs7QUFPQSxTQUFTLEdBQVQsR0FBZTtBQUNYLFFBQUksSUFBSSxFQUFKOztBQURP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RixTQURFLEtBQ0YsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQjswQkFEaEIsT0FDZ0I7O0FBQ2QsV0FBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixFQUFDLElBQUQsRUFBSSxJQUFKLEVBQXBCLEVBRGM7Q0FBbEI7O0lBS0U7Ozs7QUFJTixPQUFPLE1BQVAsQ0FBYyxVQUFVLFNBQVYsRUFBcUI7QUFDL0Isb0NBQVcsTUFBTSxNQUFNOztLQURRO0FBSS9CLDRDQUFnQjs7S0FKZTtDQUFuQzs7O0FBVUEsVUFBVSxTQUFWLENBQW9CLFVBQXBCLEdBQWlDLFVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQjs7Q0FBdEI7QUFHakMsVUFBVSxTQUFWLENBQW9CLGFBQXBCLEdBQW9DLFlBQVk7O0NBQVo7O0FBSXBDLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDbkIsV0FBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLENBQVAsQ0FEbUI7Q0FBdkI7OztBQUtBLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDbkIsUUFBSSxjQUFjLE9BQU8sY0FBUCxDQUFzQixNQUF0QixDQUFkLENBRGU7QUFFbkIsV0FBTyxPQUFPLE1BQVAsQ0FBYyxPQUFPLE1BQVAsQ0FBYyxXQUFkLENBQWQsRUFBMEMsTUFBMUMsQ0FBUCxDQUZtQjtDQUF2Qjs7QUFLQSxJQUFNLFFBQ0YsU0FERSxLQUNGLENBQUMsTUFBRDtzQ0FBWTs7OztXQUFZLE9BQU8sTUFBUCxnQkFBYyxlQUFXLFFBQXpCO0NBQXhCOztBQUVKLElBQU0sV0FBVztBQUNiLGNBQVUsQ0FBVjtBQUNBLGtCQUFjLE1BQWQ7Q0FGRTs7QUFLTixTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUM7QUFDN0IsY0FBVSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQVYsQ0FENkI7Q0FBakMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtsZXNzb24xfSBmcm9tIFwiLi9sZXNzb24xXCI7XG5pbXBvcnQge2xlc3NvbjJ9IGZyb20gXCIuL2xlc3NvbjJcIjtcbmltcG9ydCB7bGVzc29uM30gZnJvbSBcIi4vbGVzc29uM1wiO1xuaW1wb3J0IHtsZXNzb240fSBmcm9tIFwiLi9sZXNzb240XCI7XG5pbXBvcnQge2xlc3NvbjV9IGZyb20gXCIuL2xlc3NvbjVcIjtcbmltcG9ydCB7bGVzc29uNn0gZnJvbSBcIi4vbGVzc29uNlwiO1xuIiwiJ3VzZSBzdHJpY3QnXG4vL2xldOWSjGNvbnN05ZG95LukXG5cbmNvbnNvbGUubG9nKFxuICAgIGDpmK7kuIDls7AgRUNNQVNjcmlwdDYg5YWl6ZeoIOWtpuS5oCBcbiAgICAg6L+Z6YeM5Y+q5YiX5Ye66aG555uu5Lit55So55qE6KeE5YiZ5ZKM55+l6K+G54K5LCDmm7TlpJrlhoXlrrksIOiHquW3seeci+S5pmBcbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBMZXNzb24gMSBMZXTlkoxjb25zdOWRveS7pFxuXG5MZXRcbuWfuuacrOeUqOazlVxuICAgICBFUzbmlrDlop7kuoZsZXTlkb3ku6TvvIznlKjmnaXlo7DmmI7lj5jph4/jgILlroPnmoTnlKjms5XnsbvkvLzkuo52YXLvvIzkvYbmmK/miYDlo7DmmI7nmoTlj5jph4/vvIzlj6rlnKhsZXTlkb3ku6TmiYDlnKjnmoTku6PnoIHlnZflhoXmnInmlYhgXG4pO1xuXG57XG4gICAgbGV0IGEgPSAxMDtcbiAgICB2YXIgYiA9IDE7XG59XG5cbi8v5Li65LqG5L+d6K+B5Luj56CB5q2j5bi46L+Q6KGMLCDliqDlhaV0cnkgY2F0Y2gg5L2G5piv5L6d54S25bCG6ZSZ6K+v5omT5Y2w5Ye65p2lXG50cnkge1xuICAgIGEgLy8gUmVmZXJlbmNlRXJyb3I6IGEgaXMgbm90IGRlZmluZWQuXG4gICAgYiAvLyAxXG59IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbn1cblxuY29uc29sZS5sb2coXG4gICAgYFxu5LiN5a2Y5Zyo5Y+Y6YeP5o+Q5Y2HXG4gICAgbGV05LiN5YOPdmFy6YKj5qC35Lya5Y+R55Sf4oCc5Y+Y6YeP5o+Q5Y2H4oCd546w6LGh44CC5omA5Lul77yM5Y+Y6YeP5LiA5a6a6KaB5Zyo5aOw5piO5ZCO5L2/55So77yM5ZCm5YiZ5oql6ZSZ44CCXG4gICAgXG4gICAg5rOo5oSPOiDmnInlvoXpqozor4EsIOebruWJjeWcqOaIkeeahOeOr+Wig+S4iywg5rKh5pyJ5oql6ZSZLCDlj6rmmK/ov5Tlm551bmRlZmluZWQsIOS4jmJhYmVs6L2s5oiQRVM15pyJ5YWzLCBcbiAgICBcbiAgICDlrp7pmYXlnKggY2hyb21lIOS4i+i/kOihjCwg57uT5p6c5piv5oiR5Lus5pyf5pyb55qELiBcbiAgICBcbiAgICDmiYDku6XlnKjlrp7pmYXmtYvor5XkuK0sIOivt+eUqOa1j+iniOWZqCznm7TmjqXov5DooYwsIOS9huaYr+i/meaYr+WHhuWImeS5n+aYr+WcqOS7peWQjuWGmUVTNuaJgOW6lOivpeazqOaEj+eahFxuICAgIGBcbik7XG5cbnRyeSB7XG4gICAgY29uc29sZS5sb2coZm9vKTsgLy8g6L6T5Ye6dW5kZWZpbmVkXG4gICAgY29uc29sZS5sb2coYmFyKTsgLy8g5oql6ZSZUmVmZXJlbmNlRXJyb3Ig5pyJ5b6F6aqM6K+BLCDnm67liY3lnKjmiJHnmoTnjq/looPkuIssIOayoeacieaKpemUmSwg5Y+q5piv6L+U5ZuedW5kZWZpbmVkXG5cbiAgICB2YXIgZm9vID0gMjtcbiAgICBsZXQgYmFyID0gMjtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpOyAvL+W6lOivpei+k+WHuiBSZWZlcmVuY2VFcnJvclxufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7mmoLml7bmgKfmrbvljLooVERaKVxuICAgIOWPquimgeWdl+e6p+S9nOeUqOWfn+WGheWtmOWcqGxldOWRveS7pO+8jOWug+aJgOWjsOaYjueahOWPmOmHj+WwseKAnOe7keWumuKAne+8iGJpbmRpbmfvvInov5nkuKrljLrln5/vvIzkuI3lho3lj5flpJbpg6jnmoTlvbHlk43jgIJgXG4pO1xuXG50cnkge1xuICAgIHZhciB0bXAgPSAxMjM7XG5cbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICB0bXAgPSAnYWJjJzsgLy8gUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgbGV0IHRtcDtcbiAgICB9XG59IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy/lupTor6XovpPlh7ogUmVmZXJlbmNlRXJyb3Jcbn1cblxuY29uc29sZS5sb2coXG4gICAgYFxu5LiN5YWB6K646YeN5aSN5aOw5piOXG4gICAgbGV05LiN5YWB6K645Zyo55u45ZCM5L2c55So5Z+f5YaF77yM6YeN5aSN5aOw5piO5ZCM5LiA5Liq5Y+Y6YePYFxuKTtcblxuXG5mdW5jdGlvbiBGb28oKSB7XG4gICAgbGV0IGEgPSAxMDtcbiAgICAvL3ZhciBhID0gMTsgLy/kuLrkuobpmLLmraLmiqUg6YeN5aSN5aOw5piO55qE6ZSZ6K+vIOaJgOS7peazqOmHiuaOiVxufVxuXG5mdW5jdGlvbiBCYXIoKSB7XG4gICAgbGV0IGEgPSAxMDtcbiAgICAvL2xldCBhID0gMTsgIC8v5Li65LqG6Ziy5q2i5oqlIOmHjeWkjeWjsOaYjueahOmUmeivryDmiYDku6Xms6jph4rmjolcbn1cblxuY29uc29sZS5sb2coXG4gICAgYFxuY29uc3RcbiAgICBjb25zdOS5n+eUqOadpeWjsOaYjuWPmOmHj++8jOWFtuS7lueJueaAp+WSjGxldOS4gOagtywg5L2G5piv5aOw5piO55qE5piv5bi46YeP44CC5LiA5pem5aOw5piO77yM5bi46YeP55qE5YC85bCx5LiN6IO95pS55Y+Y44CCYFxuKTtcblxuY29uc3QgUEkgPSAzLjE0MTU7XG5QSSAvLyAzLjE0MTVcblxuLy9QSSA9IDM7ICAgLy8gVHlwZUVycm9yOiBcIlBJXCIgaXMgcmVhZC1vbmx5LCDkuLrkuobpmLLmraLmiqXplJksIOaJgOS7peazqOmHilxuXG5jb25zb2xlLmxvZyhgXG4gICAgY29uc3Tlo7DmmI7nmoTlj5jph4/kuI3lvpfmlLnlj5jlgLzvvIzov5nmhI/lkbPnnYDvvIxjb25zdOS4gOaXpuWjsOaYjuWPmOmHj++8jOWwseW/hemhu+eri+WNs+WIneWni+WMlu+8jOS4jeiDveeVmeWIsOS7peWQjui1i+WAvOOAgmBcbik7IiwiLy/lj5jph4/nmoTop6PmnoTotYvlgLxcbmNvbnNvbGUubG9nKFxuICAgIGBMZXNzb24gMiDlj5jph4/nmoTop6PmnpDotYvlgLxcblxu5pWw57uE55qE57uT5p6E6LWL5YC8XG7ln7rmnKznlKjms5VcbiAgICBFUzblhYHorrjmjInnhafkuIDlrprmqKHlvI/vvIzku47mlbDnu4Tlkozlr7nosaHkuK3mj5Dlj5blgLzvvIzlr7nlj5jph4/ov5vooYzotYvlgLzvvIzov5nooqvnp7DkuLrop6PmnoRgXG4pO1xuXG5sZXQgW2ZvbywgW1tiYXJdLCBiYXpdXSA9IFsxLCBbWzJdLCAzXV07XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAgJHtmb299IC8vIDFcbiAgICAgJHtiYXJ9IC8vIDJcbiAgICAgJHtiYXp9IC8vIDNgXG4pXG5cblxuXG5sZXQgWyAsICwgdGhpcmRdID0gW1wiZm9vXCIsIFwiYmFyXCIsIFwiYmF6XCJdO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHt0aGlyZH0gLy9iYXpcbiAgICBgXG4pO1xuXG5sZXQgW3gsICwgeV0gPSBbMSwgMiwgM107XG5cblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7eH0gLy8gMVxuICAgICR7eX0gLy8gM1xuICAgIGBcbik7XG5cblxubGV0IFtoZWFkLCAuLi50YWlsXSA9IFsxLCAyLCAzLCA0XTtcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7aGVhZH0gLy8gMVxuICAgICR7dGFpbH0gLy8gWzIsIDMsIDRdXG4gICAgYFxuKTtcblxubGV0IFthLCBiLCAuLi5jXSA9IFsnYSddO1xuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7YX0gLy8gXCJhXCJcbiAgICAke2J9IC8vIHVuZGVmaW5lZFxuICAgICR7Y30gLy8gW11cbiAgICBgXG4pO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7pu5jorqTlgLxcbiAgICDop6PmnoTotYvlgLzlhYHorrjmjIflrprpu5jorqTlgLxcbiAgICBgXG4pO1xuXG52YXIgW2Jvb2wgPSB0cnVlXSA9IFtdO1xuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7Ym9vbH0gLy8gdHJ1ZVxuICAgIGBcbilcblxubGV0IFtkLCBlID0gJ2InXSA9IFsnYSddIC8vIGQ9J2EnLCBlPSdiJ1xubGV0IFtmLCBnID0gJ2InXSA9IFsnYScsIHVuZGVmaW5lZF0gLy8gZj0nYScsIGc9J2InXG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke2R9IFxuICAgICR7ZX1cbiAgICAke2Z9XG4gICAgJHtnfVxuICAgIGBcbilcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgIOazqOaEj++8jEVTNuWGhemDqOS9v+eUqOS4peagvOebuOetiei/kOeul+espu+8iD09Pe+8ie+8jOWIpOaWreS4gOS4quS9jee9ruaYr+WQpuacieWAvOOAguaJgOS7pe+8jOWmguaenOS4gOS4quaVsOe7hOaIkOWRmOS4jeS4peagvOetieS6jnVuZGVmaW5lZO+8jOm7mOiupOWAvOaYr+S4jeS8mueUn+aViOeahOOAglxuICAgIGBcbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICDlpoLmnpzpu5jorqTlgLzmmK/kuIDkuKrooajovr7lvI/vvIzpgqPkuYjov5nkuKrooajovr7lvI/mmK/mg7DmgKfmsYLlgLznmoTvvIzljbPlj6rmnInlnKjnlKjliLDnmoTml7blgJnvvIzmiY3kvJrmsYLlgLzjgIIgICAgXG4gICAgYFxuKVxuXG5mdW5jdGlvbiBmYWFhKCl7XG4gICAgY29uc29sZS5sb2coJ2FhYScpO1xufVxuXG5sZXQgW2ZhID0gZmFhYSgpXSA9IFsxXTtcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgIOS4iumdouS7o+eggeS4re+8jOWboOS4umZh6IO95Y+W5Yiw5YC877yM5omA5Lul5Ye95pWwZmFhYeagueacrOS4jeS8muaJp+ihjOOAglxuICAgIGBcbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbuWvueixoeeahOino+aehOi1i+WAvFxuICAgIOino+aehOS4jeS7heWPr+S7peeUqOS6juaVsOe7hO+8jOi/mOWPr+S7peeUqOS6juWvueixoeOAglxuICAgIGBcbik7XG5cbnZhciB7IGZvbzEsIGJhcjEgfSA9IHsgZm9vMTogXCJhYWFcIiwgYmFyMTogXCJiYmJcIiB9O1xuZm9vMSAvLyBcImFhYVwiXG5iYXIxIC8vIFwiYmJiXCJcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7Zm9vMX1cbiAgICAke2JhcjF9XG4gICAgXG4gICAg5a+56LGh55qE6Kej5p6E5LiO5pWw57uE5pyJ5LiA5Liq6YeN6KaB55qE5LiN5ZCM44CC5pWw57uE55qE5YWD57Sg5piv5oyJ5qyh5bqP5o6S5YiX55qE77yM5Y+Y6YeP55qE5Y+W5YC855Sx5a6D55qE5L2N572u5Yaz5a6a77yb6ICM5a+56LGh55qE5bGe5oCn5rKh5pyJ5qyh5bqP77yM5Y+Y6YeP5b+F6aG75LiO5bGe5oCn5ZCM5ZCN77yM5omN6IO95Y+W5Yiw5q2j56Gu55qE5YC844CCXG4gICAgYFxuKTtcblxuY29uc29sZS5sb2coXG4gICAgYFxu5a2X56ym5Liy5Lmf5Y+v5Lul6Kej5p6E6LWL5YC844CCXG4gICAg6L+Z5piv5Zug5Li65q2k5pe277yM5a2X56ym5Liy6KKr6L2s5o2i5oiQ5LqG5LiA5Liq57G75Ly85pWw57uE55qE5a+56LGh44CCXG4gICAg57G75Ly85pWw57uE55qE5a+56LGh6YO95pyJ5LiA5LiqbGVuZ3Ro5bGe5oCn77yM5Zug5q2k6L+Y5Y+v5Lul5a+56L+Z5Liq5bGe5oCn6Kej5p6E6LWL5YC844CCXG4gICAgYFxuKTtcblxuY29uc3QgW2wsbSxuLG8scCxxXSA9ICdoZWxsbyc7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke2x9XG4gICAgJHttfVxuICAgICR7bn1cbiAgICAke299XG4gICAgJHtwfVxuICAgICR7cX1cbiAgICBgXG4pO1xuXG5sZXQge2xlbmd0aCA6IGxlbn0gPSAnaGVsbG8nO1xuXG5jb25zb2xlLmxvZyhsZW4pO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7mlbDlgLzlkozluIPlsJTlgLznmoTop6PmnoTotYvlgLxcbiAgICDop6PmnoTotYvlgLzml7bvvIzlpoLmnpznrYnlj7flj7PovrnmmK/mlbDlgLzlkozluIPlsJTlgLzvvIzliJnkvJrlhYjovazkuLrlr7nosaHjgIJgXG4pO1xuXG5sZXQge3RvU3RyaW5nOiBudW19ID0gMTIzO1xubnVtID09PSBOdW1iZXIucHJvdG90eXBlLnRvU3RyaW5nIC8vIHRydWVcblxubGV0IHt0b1N0cmluZzogYm9vfSA9IHRydWU7XG5ib28gPT09IEJvb2xlYW4ucHJvdG90eXBlLnRvU3RyaW5nIC8vIHRydWVcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgIOS4iumdouS7o+eggeS4re+8jOaVsOWAvOWSjOW4g+WwlOWAvOeahOWMheijheWvueixoemDveaciXRvU3RyaW5n5bGe5oCn77yM5Zug5q2k5Y+Y6YeP6YO96IO95Y+W5Yiw5YC844CCXG4gICAg6Kej5p6E6LWL5YC855qE6KeE5YiZ5piv77yM5Y+q6KaB562J5Y+35Y+z6L6555qE5YC85LiN5piv5a+56LGh77yM5bCx5YWI5bCG5YW26L2s5Li65a+56LGh44CC55Sx5LqOdW5kZWZpbmVk5ZKMbnVsbOaXoOazlei9rOS4uuWvueixoe+8jOaJgOS7peWvueWug+S7rOi/m+ihjOino+aehOi1i+WAvO+8jOmDveS8muaKpemUmeOAglxuICAgIGBcbik7XG5cblxuXG4iLCIvL+Wtl+espuS4sueahOaJqeWxleWSjOaVsOWtl+eahOaJqeWxlVxuY29uc29sZS5sb2coXG4gICAgYFxuaW5jbHVkZXMoKSwgc3RhcnRzV2l0aCgpLCBlbmRzV2l0aCgpXG4gICAgXG4gICAgaW5jbHVkZXMoKe+8mui/lOWbnuW4g+WwlOWAvO+8jOihqOekuuaYr+WQpuaJvuWIsOS6huWPguaVsOWtl+espuS4suOAglxuICAgIHN0YXJ0c1dpdGgoKe+8mui/lOWbnuW4g+WwlOWAvO+8jOihqOekuuWPguaVsOWtl+espuS4suaYr+WQpuWcqOa6kOWtl+espuS4sueahOWktOmDqOOAglxuICAgIGVuZHNXaXRoKCnvvJrov5Tlm57luIPlsJTlgLzvvIzooajnpLrlj4LmlbDlrZfnrKbkuLLmmK/lkKblnKjmupDlrZfnrKbkuLLnmoTlsL7pg6jjgIJcbiAgICBgXG4pO1xuXG52YXIgc3RyMSA9ICdIZWxsbyB3b3JsZCEnO1xuXG5zdHIxLnN0YXJ0c1dpdGgoJ0hlbGxvJykgLy8gdHJ1ZVxuc3RyMS5lbmRzV2l0aCgnIScpIC8vIHRydWVcbnN0cjEuaW5jbHVkZXMoJ28nKSAvLyB0cnVlXG5cbnZhciBzdHIyID0gJ0hlbGxvIHdvcmxkISc7XG5cbnN0cjIuc3RhcnRzV2l0aCgnd29ybGQnLCA2KSAvLyB0cnVlXG5zdHIyLmVuZHNXaXRoKCdIZWxsbycsIDUpIC8vIHRydWVcbnN0cjIuaW5jbHVkZXMoJ0hlbGxvJywgNikgLy8gZmFsc2VcblxuLyoqXG4gKiDkuIrpnaLku6PnoIHooajnpLrvvIzkvb/nlKjnrKzkuozkuKrlj4LmlbBu5pe277yMZW5kc1dpdGjnmoTooYzkuLrkuI7lhbbku5bkuKTkuKrmlrnms5XmnInmiYDkuI3lkIzjgILlroPpkojlr7nliY1u5Liq5a2X56ym77yM6ICM5YW25LuW5Lik5Liq5pa55rOV6ZKI5a+55LuO56ysbuS4quS9jee9ruebtOWIsOWtl+espuS4sue7k+adn+OAglxuICovXG5cbmNvbnNvbGUubG9nKGBcbiAgICByZXBlYXQoKVxuICAgIHJlcGVhdOaWueazlei/lOWbnuS4gOS4quaWsOWtl+espuS4su+8jOihqOekuuWwhuWOn+Wtl+espuS4sumHjeWkjW7mrKHjgIJcbmApXG5cblxuJ3gnLnJlcGVhdCgzKSAvLyBcInh4eFwiXG4naGVsbG8nLnJlcGVhdCgyKSAvLyBcImhlbGxvaGVsbG9cIlxuJ25hJy5yZXBlYXQoMCkgLy9cblxuLy/lrZfnrKbkuLLmqKHmnb9cblxuLy/mlbDlrZfnmoTmianlsZUsIOWFt+S9k+WinuWKoOS6huS4gOS6m+aWsOaWueazlSwg5YW35L2T6K+357+75Lmm5p+l6ZiFIiwiLy/mlbDnu4TnmoTmianlsZVcbmNvbnNvbGUubG9nKFxuICAgIGBcbkFycmF5LmZyb23mlrnms5XnlKjkuo7lsIbkuKTnsbvlr7nosaHovazkuLrnnJ/mraPnmoTmlbDnu4TvvJrnsbvkvLzmlbDnu4TnmoTlr7nosaHvvIhhcnJheS1saWtlIG9iamVjdO+8ieWSjOWPr+mBjeWOhu+8iGl0ZXJhYmxl77yJ55qE5a+56LGh77yI5YyF5ousRVM25paw5aKe55qE5pWw5o2u57uT5p6EU2V05ZKMTWFw77yJ44CCXG5cbuS4i+mdouaYr+S4gOS4quexu+S8vOaVsOe7hOeahOWvueixoe+8jEFycmF5LmZyb23lsIblroPovazkuLrnnJ/mraPnmoTmlbDnu4TjgIJcblxu5YWz5LqOIEFycmF5LmZyb20g5pu05aSa57uG6IqCLOWPr+S7peWPguiAgyDlk6Ug57+76K+R55qE56ysMTfnq6DnrKzkuIDoioLnmoTlhoXlrrlcbiAgICBgXG4pO1xuXG5sZXQgYXJyYXlMaWtlID0ge1xuICAgICcwJzogJ2EnLFxuICAgICcxJzogJ2InLFxuICAgICcyJzogJ2MnLFxuICAgIGxlbmd0aDogM1xufTtcblxuLy8gRVM155qE5YaZ5rOVXG52YXIgYXJyMSA9IFtdLnNsaWNlLmNhbGwoYXJyYXlMaWtlKTsgLy8gWydhJywgJ2InLCAnYyddXG5jb25zb2xlLmxvZyhhcnIxKTtcblxuLy8gRVM255qE5YaZ5rOVXG5sZXQgYXJyMiA9IEFycmF5LmZyb20oYXJyYXlMaWtlKTsgLy8gWydhJywgJ2InLCAnYyddXG5jb25zb2xlLmxvZyhhcnIyKTtcblxuZnVuY3Rpb24gZm9vKCkge1xuICAgIHZhciBhcnIzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xuICAgIGNvbnNvbGUubG9nKGFycjMpO1xufVxuXG5mdW5jdGlvbiBiYXIoKSB7XG4gICAgdmFyIGFycjMgPSBbIC4uLiBhcmd1bWVudHNdO1xuICAgIGNvbnNvbGUubG9nKGFycjMpO1xufVxuXG5mb28oMSwyLDMsWzQsNV0pO1xuXG5iYXIoMSwyLDMsWzQsNV0pO1xuXG5jb25zb2xlLmxvZyhgXG5BcnJheS5vZiDmlrnms5VcblxuQXJyYXkub2YoaXRlbV8wLCBpdGVtXzEsIMK3wrfCtykg5Y+v5Lul5Yib5bu65LiA5Liq55SxIGl0ZW1fMOOAgWl0ZW1fMSDnrYnlhYPntKDnu4TmiJDnmoTmlbDnu4TjgIJcbuaYr+W8peihpeaVsOe7hOaehOmAoOWHveaVsEFycmF5KCnnmoTkuI3otrNcbmApXG5cbmNvbnNvbGUubG9nKEFycmF5Lm9mKDEpKTtcbmNvbnNvbGUubG9nKEFycmF5Lm9mKDEsMikpO1xuXG4vL+aVsOe7hOeahOWunuS+i+aWueazlVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAg5pWw57uE5a6e5L6L55qEY29weVdpdGhpbuaWueazle+8jOWcqOW9k+WJjeaVsOe7hOWGhemDqO+8jOWwhuaMh+WumuS9jee9rueahOaIkOWRmOWkjeWItuWIsOWFtuS7luS9jee9ru+8iOS8muimhuebluWOn+acieaIkOWRmO+8ie+8jOeEtuWQjui/lOWbnuW9k+WJjeaVsOe7hOOAguS5n+WwseaYr+ivtO+8jOS9v+eUqOi/meS4quaWueazle+8jOS8muS/ruaUueW9k+WJjeaVsOe7hOOAglxuICAgIFxuICAgIOWug+aOpeWPl+S4ieS4quWPguaVsDpcbiAgICB0YXJnZXTvvIjlv4XpnIDvvInvvJrku47or6XkvY3nva7lvIDlp4vmm7/mjaLmlbDmja7jgIJcbiAgICBzdGFydO+8iOWPr+mAie+8ie+8muS7juivpeS9jee9ruW8gOWni+ivu+WPluaVsOaNru+8jOm7mOiupOS4ujDjgILlpoLmnpzkuLrotJ/lgLzvvIzooajnpLrlgJLmlbDjgIJcbiAgICBlbmTvvIjlj6/pgInvvInvvJrliLDor6XkvY3nva7liY3lgZzmraLor7vlj5bmlbDmja7vvIzpu5jorqTnrYnkuo7mlbDnu4Tplb/luqbjgILlpoLmnpzkuLrotJ/lgLzvvIzooajnpLrlgJLmlbDjgIJcbiAgICBgXG4pO1xuXG5bMSwgMiwgMywgNCwgNV0uY29weVdpdGhpbigwLCAzLCA0KVxuXG5jb25zb2xlLmxvZyhgXG5cbiAgICDmlbDnu4Tlrp7kvovnmoRmaW5k5pa55rOV77yM55So5LqO5om+5Ye656ys5LiA5Liq56ym5ZCI5p2h5Lu255qE5pWw57uE5oiQ5ZGY44CC5a6D55qE5Y+C5pWw5piv5LiA5Liq5Zue6LCD5Ye95pWw77yM5omA5pyJ5pWw57uE5oiQ5ZGY5L6d5qyh5omn6KGM6K+l5Zue6LCD5Ye95pWw77yMXG4gICAg55u05Yiw5om+5Ye656ys5LiA5Liq6L+U5Zue5YC85Li6dHJ1ZeeahOaIkOWRmO+8jOeEtuWQjui/lOWbnuivpeaIkOWRmOOAguWmguaenOayoeacieespuWQiOadoeS7tueahOaIkOWRmO+8jOWImei/lOWbnnVuZGVmaW5lZFxuXG5gKTtcblxuWzEsIDQsIC01LCAxMF0uZmluZCgobikgPT4gbiA8IDApXG5cbmNvbnNvbGUubG9nKGBcbiAgICDmlbDnu4Tlrp7kvovnmoRmaW5kSW5kZXjmlrnms5XnmoTnlKjms5XkuI5maW5k5pa55rOV6Z2e5bi457G75Ly877yM6L+U5Zue56ys5LiA5Liq56ym5ZCI5p2h5Lu255qE5pWw57uE5oiQ5ZGY55qE5L2N572u77yM5aaC5p6c5omA5pyJ5oiQ5ZGY6YO95LiN56ym5ZCI5p2h5Lu277yM5YiZ6L+U5ZueLTHjgIJcbmApO1xuXG5bMSwgNSwgMTAsIDE1XS5maW5kSW5kZXgoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBhcnIpIHtcbiAgICByZXR1cm4gdmFsdWUgPiA5O1xufSkgLy8gMlxuXG5jb25zb2xlLmxvZyhgXG4gICAgZmlsbOaWueazleS9v+eUqOe7meWumuWAvO+8jOWhq+WFheS4gOS4quaVsOe7hOOAglxuYCk7XG5cblsnYScsICdiJywgJ2MnXS5maWxsKDcpXG4vLyBbNywgNywgN11cblxubmV3IEFycmF5KDMpLmZpbGwoNylcbi8vIFs3LCA3LCA3XVxuXG5jb25zb2xlLmxvZyhgXG4gICAgZW50cmllcygp77yMa2V5cygp5ZKMdmFsdWVzKCnigJTigJTnlKjkuo7pgY3ljobmlbDnu4TjgIJcbmApXG5cbmZvciAobGV0IGluZGV4IG9mIFsnYScsICdiJ10ua2V5cygpKSB7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xufVxuLy8gMFxuLy8gMVxuXG4vLyBmb3IgKGxldCBlbGVtIG9mIFsnYScsICdiJ10udmFsdWVzKCkpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlbGVtKTtcbi8vIH1cbi8vICdhJ1xuLy8gJ2InXG5cbmZvciAobGV0IFtpbmRleCwgZWxlbV0gb2YgWydhJywgJ2InXS5lbnRyaWVzKCkpIHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgZWxlbSk7XG59XG4vLyAwIFwiYVwiXG4vLyAxIFwiYlwiIiwiLy/lh73mlbDnmoTmianlsZVcblxuY29uc29sZS5sb2coYFxuICAgIOWHveaVsOWPguaVsOeahOm7mOiupOWAvFxuYClcblxuZnVuY3Rpb24gUG9pbnQoeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xufVxuXG52YXIgcCA9IG5ldyBQb2ludCgpO1xuXG5mdW5jdGlvbiBsb2coeCwgeSA9ICdXb3JsZCcpIHtcbiAgICBjb25zb2xlLmxvZyh4LCB5KTtcbn1cblxubG9nKCdIZWxsbycpIC8vIEhlbGxvIFdvcmxkXG5sb2coJ0hlbGxvJywgJ0NoaW5hJykgLy8gSGVsbG8gQ2hpbmFcbmxvZygnSGVsbG8nLCAnJykgLy8gSGVsbG9cblxuY29uc29sZS5sb2coYFxu5LiO6Kej5p6E6LWL5YC86buY6K6k5YC857uT5ZCI5L2/55SoXG4gICAg5Y+C5pWw6buY6K6k5YC85Y+v5Lul5LiO6Kej5p6E6LWL5YC855qE6buY6K6k5YC877yM57uT5ZCI6LW35p2l5L2/55So44CCXG5gKTtcblxuZnVuY3Rpb24gZm9vKHt4LCB5ID0gNX0pIHtcbiAgICBjb25zb2xlLmxvZyh4LCB5KTtcbn1cblxuZm9vKHt9KSAvLyB1bmRlZmluZWQsIDVcbmZvbyh7eDogMX0pIC8vIDEsIDVcbmZvbyh7eDogMSwgeTogMn0pIC8vIDEsIDJcbi8vZm9vKCkgLy8gVHlwZUVycm9yOiBDYW5ub3QgcmVhZCBwcm9wZXJ0eSAneCcgb2YgdW5kZWZpbmVkXG5cblxuZnVuY3Rpb24gZmV0Y2godXJsLCB7IGJvZHkgPSAnJywgbWV0aG9kID0gJ0dFVCcsIGhlYWRlcnMgPSB7fSB9ID0ge30pe1xuICAgIGNvbnNvbGUubG9nKG1ldGhvZCk7XG59XG5cbmZldGNoKCdodHRwOi8vZXhhbXBsZS5jb20nLCB7fSlcbi8vIFwiR0VUXCJcblxuZmV0Y2goJ2h0dHA6Ly9leGFtcGxlLmNvbScpXG4vLyBcIkdFVFwiXG5cbmNvbnNvbGUubG9nKGBcbuWHveaVsOeahGxlbmd0aOWxnuaAp1xuICAgIOaMh+WumuS6hum7mOiupOWAvOS7peWQju+8jOWHveaVsOeahGxlbmd0aOWxnuaAp++8jOWwhui/lOWbnuayoeacieaMh+Wumum7mOiupOWAvOeahOWPguaVsOS4quaVsOOAguS5n+WwseaYr+ivtO+8jOaMh+WumuS6hum7mOiupOWAvOWQju+8jGxlbmd0aOWxnuaAp+WwhuWkseecn1xuYCk7XG5cbihmdW5jdGlvbihhKXt9KS5sZW5ndGg7IC8vIDFcbihmdW5jdGlvbihhID0gNSl7fSkubGVuZ3RoOyAvLyAwXG4oZnVuY3Rpb24oYSwgYiwgYyA9IDUpe30pLmxlbmd0aDsgLy8gMlxuXG5jb25zb2xlLmxvZyhgXG4gICAg5Yip55So5Y+C5pWw6buY6K6k5YC877yM5Y+v5Lul5oyH5a6a5p+Q5LiA5Liq5Y+C5pWw5LiN5b6X55yB55Wl77yM5aaC5p6c55yB55Wl5bCx5oqb5Ye65LiA5Liq6ZSZ6K+v44CCXG5gKTtcbmZ1bmN0aW9uIHRocm93SWZNaXNzaW5nKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwYXJhbWV0ZXInKTtcbn1cblxuZnVuY3Rpb24gZm9vKG11c3RCZVByb3ZpZGVkID0gdGhyb3dJZk1pc3NpbmcoKSkge1xuICAgIHJldHVybiBtdXN0QmVQcm92aWRlZDtcbn1cblxuLy9mb28oKVxuLy8gRXJyb3I6IE1pc3NpbmcgcGFyYW1ldGVyXG5cbmNvbnNvbGUubG9nKGBcbnJlc3Tlj4LmlbBcbiAgICBFUzblvJXlhaVyZXN05Y+C5pWw77yI5b2i5byP5Li64oCcLi4u5Y+Y6YeP5ZCN4oCd77yJ77yM55So5LqO6I635Y+W5Ye95pWw55qE5aSa5L2Z5Y+C5pWw77yM6L+Z5qC35bCx5LiN6ZyA6KaB5L2/55SoYXJndW1lbnRz5a+56LGh5LqG44CCcmVzdOWPguaVsOaQremFjeeahOWPmOmHj+aYr+S4gOS4quaVsOe7hO+8jOivpeWPmOmHj+WwhuWkmuS9meeahOWPguaVsOaUvuWFpeaVsOe7hOS4reOAglxuYCk7XG5cblxuZnVuY3Rpb24gYWRkKC4uLnZhbHVlcykge1xuICAgIGxldCBzdW0gPSAwO1xuXG4gICAgZm9yICh2YXIgdmFsIG9mIHZhbHVlcykge1xuICAgICAgICBzdW0gKz0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBzdW07XG59XG5cbmFkZCgyLCA1LCAzKSAvLyAxMFxuXG4vLyBhcmd1bWVudHPlj5jph4/nmoTlhpnms5Vcbi8vY29uc3Qgc29ydE51bWJlcnMgPSAoKSA9PlxuLy8gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zb3J0KCk7XG5cbi8vIHJlc3Tlj4LmlbDnmoTlhpnms5VcbmNvbnN0IHNvcnROdW1iZXJzID0gKC4uLm51bWJlcnMpID0+IG51bWJlcnMuc29ydCgpO1xuXG4vL+azqOaEj++8jHJlc3Tlj4LmlbDkuYvlkI7kuI3og73lho3mnInlhbbku5blj4LmlbDvvIjljbPlj6rog73mmK/mnIDlkI7kuIDkuKrlj4LmlbDvvInvvIzlkKbliJnkvJrmiqXplJnjgIJcblxuLy8g5oql6ZSZXG4vLyBmdW5jdGlvbiBmKGEsIC4uLmIsIGMpIHtcbi8vICAgICAvLyAuLi5cbi8vIH1cblxuLy/lh73mlbDnmoRsZW5ndGjlsZ7mgKfvvIzkuI3ljIXmi6xyZXN05Y+C5pWw44CCXG5cbi8vKGZ1bmN0aW9uKGEpIHt9KS5sZW5ndGg7ICAvLyAxXG4vLyhmdW5jdGlvbiguLi5hKSB7fSkubGVuZ3RoOyAgLy8gMFxuLy8oZnVuY3Rpb24oYSwgLi4uYikge30pLmxlbmd0aDsgIC8vIDFcblxuXG5jb25zb2xlLmxvZyhgXG7mianlsZXov5DnrpfnrKZcbiAgICDmianlsZXov5DnrpfnrKbvvIhzcHJlYWTvvInmmK/kuInkuKrngrnvvIguLi7vvInjgILlroPlpb3mr5RyZXN05Y+C5pWw55qE6YCG6L+Q566X77yM5bCG5LiA5Liq5pWw57uE6L2s5Li655So6YCX5Y+35YiG6ZqU55qE5Y+C5pWw5bqP5YiX44CCXG5gKTtcblxuXG5jb25zb2xlLmxvZyguLi5bMSwgMiwgM10pO1xuLy8gMSAyIDNcblxuY29uc29sZS5sb2coMSwgLi4uWzIsIDMsIDRdLCA1KTtcbi8vIDEgMiAzIDQgNVxuXG5cbmNvbnNvbGUubG9nKGBcbiAgICDmianlsZXov5DnrpfnmoTlupTnlKhcbiAgICDlkIjlubbmlbDnu4RcbmApO1xuXG52YXIgYXJyMSA9IFsnYScsICdiJ107XG52YXIgYXJyMiA9IFsnYyddO1xudmFyIGFycjMgPSBbJ2QnLCAnZSddO1xuXG4vLyBFUzXnmoTlkIjlubbmlbDnu4RcbmFycjEuY29uY2F0KGFycjIsIGFycjMpO1xuLy8gWyAnYScsICdiJywgJ2MnLCAnZCcsICdlJyBdXG5cbi8vIEVTNueahOWQiOW5tuaVsOe7hFxuWy4uLmFycjEsIC4uLmFycjIsIC4uLmFycjNdO1xuXG5jb25zb2xlLmxvZyhgXG7nrq3lpLTlh73mlbBcblxu566t5aS05Ye95pWw5pyJ5Yeg5Liq5L2/55So5rOo5oSP54K544CCXG5cbu+8iDHvvInlh73mlbDkvZPlhoXnmoR0aGlz5a+56LGh77yM5bCx5piv5a6a5LmJ5pe25omA5Zyo55qE5a+56LGh77yM6ICM5LiN5piv5L2/55So5pe25omA5Zyo55qE5a+56LGh44CCXG5cbu+8iDLvvInkuI3lj6/ku6XlvZPkvZzmnoTpgKDlh73mlbDvvIzkuZ/lsLHmmK/or7TvvIzkuI3lj6/ku6Xkvb/nlKhuZXflkb3ku6TvvIzlkKbliJnkvJrmipvlh7rkuIDkuKrplJnor6/jgIJcblxu77yIM++8ieS4jeWPr+S7peS9v+eUqGFyZ3VtZW50c+Wvueixoe+8jOivpeWvueixoeWcqOWHveaVsOS9k+WGheS4jeWtmOWcqOOAguWmguaenOimgeeUqO+8jOWPr+S7peeUqFJlc3Tlj4LmlbDku6Pmm7/jgIJcblxu77yINO+8ieS4jeWPr+S7peS9v+eUqHlpZWxk5ZG95Luk77yM5Zug5q2k566t5aS05Ye95pWw5LiN6IO955So5L2cR2VuZXJhdG9y5Ye95pWw44CCXG5gKTtcblxuXG5jb25zdCBudW1iZXJzID0gKC4uLm51bXMpID0+IG51bXM7XG5cbm51bWJlcnMoMSwgMiwgMywgNCwgNSk7XG4iLCIvL+WvueixoeeahOaJqeWxlVxuY29uc29sZS5sb2coYFxu5bGe5oCn55qE566A5rSB6KGo56S65rOVXG5gKTtcblxudmFyIGZvbyA9ICdiYXInO1xudmFyIGJheiA9IHtmb299O1xuYmF6IC8vIHtmb286IFwiYmFyXCJ9XG5cbi8vIOetieWQjOS6jlxudmFyIGJheiA9IHtmb286IGZvb307XG5cblxuZnVuY3Rpb24gZih4LCB5KSB7XG4gICAgcmV0dXJuIHt4LCB5fTtcbn1cblxuLy8g562J5ZCM5LqOXG5cbmZ1bmN0aW9uIGYoeCwgeSkge1xuICAgIHJldHVybiB7eDogeCwgeTogeX07XG59XG5cbmYoMSwgMikgLy8gT2JqZWN0IHt4OiAxLCB5OiAyfVxuXG52YXIgbyA9IHtcbiAgICBtZXRob2QoKSB7XG4gICAgICAgIHJldHVybiBcIkhlbGxvIVwiO1xuICAgIH1cbn07XG5cbi8vIOetieWQjOS6jlxuXG52YXIgbyA9IHtcbiAgICBtZXRob2Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJIZWxsbyFcIjtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBnZXRQb2ludCgpIHtcbiAgICB2YXIgeCA9IDE7XG4gICAgdmFyIHkgPSAxMDtcbiAgICByZXR1cm4ge3gsIHl9O1xufVxuXG5nZXRQb2ludCgpXG4vLyB7eDoxLCB5OjEwfVxuXG5jb25zb2xlLmxvZyhgXG7lsZ7mgKflkI3nmoTooajovr7lvI9cbmApO1xuXG5sZXQgcHJvcEtleSA9ICdmb28nO1xuXG5sZXQgb2JqID0ge1xuICAgIFtwcm9wS2V5XTogdHJ1ZSxcbiAgICBbJ2EnICsgJ2JjJ106IDEyM1xufTtcblxudmFyIGxhc3RXb3JkID0gJ2xhc3Qgd29yZCc7XG5cbnZhciBhID0ge1xuICAgICdmaXJzdCB3b3JkJzogJ2hlbGxvJyxcbiAgICBbbGFzdFdvcmRdOiAnd29ybGQnXG59O1xuXG5hWydmaXJzdCB3b3JkJ10gLy8gXCJoZWxsb1wiXG5hW2xhc3RXb3JkXSAvLyBcIndvcmxkXCJcbmFbJ2xhc3Qgd29yZCddIC8vIFwid29ybGRcIlxuXG5jb25zb2xlLmxvZyhgXG4gICAg5pa55rOV55qEbmFtZeWxnuaAp1xuYCk7XG5cbnZhciBwZXJzb24gPSB7XG4gICAgc2F5TmFtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcbiAgICB9LFxuICAgIGdldCBmaXJzdE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBcIk5pY2hvbGFzXCJcbiAgICB9XG59XG5cbnBlcnNvbi5zYXlOYW1lLm5hbWUgICAvLyBcInNheU5hbWVcIlxucGVyc29uLmZpcnN0TmFtZS5uYW1lIC8vIFwiZ2V0IGZpcnN0TmFtZVwiXG5cbmNvbnNvbGUubG9nKGBcbiAgICBPYmplY3QuaXMoKVxuICAgIE9iamVjdC5pc+WwseaYr+mDqOe9sui/meS4queul+azleeahOaWsOaWueazleOAguWug+eUqOadpeavlOi+g+S4pOS4quWAvOaYr+WQpuS4peagvOebuOetie+8jOS4juS4peagvOavlOi+g+i/kOeul+espu+8iD09Pe+8ieeahOihjOS4uuWfuuacrOS4gOiHtOOAglxuICAgIOS4jeWQjOS5i+WkhOWPquacieS4pOS4qu+8muS4gOaYrysw5LiN562J5LqOLTDvvIzkuozmmK9OYU7nrYnkuo7oh6rouqtcbmApO1xuXG4rMCA9PT0gLTAgLy90cnVlXG5OYU4gPT09IE5hTiAvLyBmYWxzZVxuXG5PYmplY3QuaXMoKzAsIC0wKSAvLyBmYWxzZVxuT2JqZWN0LmlzKE5hTiwgTmFOKSAvLyB0cnVlXG5cbmNvbnNvbGUubG9nKGBcbiAgICBPYmplY3QuYXNzaWduKClcbiAgICBPYmplY3QuYXNzaWdu5pa55rOV55So5LqO5a+56LGh55qE5ZCI5bm277yM5bCG5rqQ5a+56LGh77yIc291cmNl77yJ55qE5omA5pyJ5Y+v5p6a5Li+5bGe5oCn77yM5aSN5Yi25Yiw55uu5qCH5a+56LGh77yIdGFyZ2V077yJ44CCXG5gKTtcblxudmFyIHRhcmdldCA9IHsgYTogMSB9O1xuXG52YXIgc291cmNlMSA9IHsgYjogMiB9O1xudmFyIHNvdXJjZTIgPSB7IGM6IDMgfTtcblxuT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZTEsIHNvdXJjZTIpO1xudGFyZ2V0IC8vIHthOjEsIGI6MiwgYzozfVxuXG5jb25zb2xlLmxvZyhgXG4gICAgT2JqZWN0LmFzc2lnbuaWueazleeahOeUqOmAlFxuICAgIDEu5Li65a+56LGh5re75Yqg5bGe5oCnXG4gICAgMi7kuLrlr7nosaHmt7vliqDmlrnms5VcbiAgICAzLuWFi+mahuWvueixoVxuICAgIDQu5ZCI5bm25a+56LGhXG4gICAgNS7kuLrlsZ7mgKfmjIflrprpu5jorqTlgLxcbmApO1xuXG5jbGFzcyBQb2ludCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHt4LCB5fSk7XG4gICAgfVxufVxuXG5jbGFzcyBTb21lQ2xhc3Mge1xuXG59XG5cbk9iamVjdC5hc3NpZ24oU29tZUNsYXNzLnByb3RvdHlwZSwge1xuICAgIHNvbWVNZXRob2QoYXJnMSwgYXJnMikge1xuICAgIC8vwrfCt8K3XG4gICAgfSxcbiAgICBhbm90aGVyTWV0aG9kKCkge1xuICAgIC8vwrfCt8K3XG4gICAgfVxufSk7XG5cbi8vIOetieWQjOS6juS4i+mdoueahOWGmeazlVxuU29tZUNsYXNzLnByb3RvdHlwZS5zb21lTWV0aG9kID0gZnVuY3Rpb24gKGFyZzEsIGFyZzIpIHtcbiAgICAvL8K3wrfCt1xufTtcblNvbWVDbGFzcy5wcm90b3R5cGUuYW5vdGhlck1ldGhvZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL8K3wrfCt1xufTtcblxuZnVuY3Rpb24gY2xvbmUob3JpZ2luKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbik7XG59XG5cbi8vIOS4jei/h++8jOmHh+eUqOi/meenjeaWueazleWFi+mahu+8jOWPquiDveWFi+mahuWOn+Wni+WvueixoeiHqui6q+eahOWAvO+8jOS4jeiDveWFi+mahuWug+e7p+aJv+eahOWAvOOAguWmguaenOaDs+imgeS/neaMgee7p+aJv+mTvu+8jOWPr+S7pemHh+eUqOS4i+mdoueahOS7o+eggeOAglxuZnVuY3Rpb24gY2xvbmUob3JpZ2luKSB7XG4gICAgbGV0IG9yaWdpblByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShvcmlnaW5Qcm90byksIG9yaWdpbik7XG59XG5cbmNvbnN0IG1lcmdlID1cbiAgICAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG5cbmNvbnN0IERFRkFVTFRTID0ge1xuICAgIGxvZ0xldmVsOiAwLFxuICAgIG91dHB1dEZvcm1hdDogJ2h0bWwnXG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzQ29udGVudChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRTLCBvcHRpb25zKTtcbn0iXX0=
