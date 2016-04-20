(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _lesson = require("./lesson1");

var _lesson2 = require("./lesson2");

var _lesson3 = require("./lesson3");

var _lesson4 = require("./lesson4");

var _lesson5 = require("./lesson5");

var _lesson6 = require("./lesson6");

var _lesson7 = require("./lesson7");

var _lesson8 = require("./lesson8");

var _lesson9 = require("./lesson9");

var _lesson10 = require("./lesson10");

var _TodoListController = require("./todoList/TodoListController");

angular.module("todoApp", []).controller("TodoListController", _TodoListController.TodoListController);

},{"./lesson1":2,"./lesson10":3,"./lesson2":4,"./lesson3":5,"./lesson4":6,"./lesson5":7,"./lesson6":8,"./lesson7":9,"./lesson8":10,"./lesson9":11,"./todoList/TodoListController":13}],2:[function(require,module,exports){
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
//class
"use strict";

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

//proxy and Reflect

console.log("\n    Proxy用于修改某些操作的默认行为,等同于语言层面做出修改,所以属于一种\"元编程\", 既对编程语言进行编程.\n    ");

var obj = new Proxy({}, {
    get: function get(target, key, receiver) {
        console.log("getting " + key);
        return Reflect.get.apply(Reflect, arguments);
    },
    set: function set(target, key, value, recevier) {
        console.log("setting " + key);
        return Reflect.set.apply(Reflect, arguments);
    }
});

obj.name = "harry";
obj.name;

obj.count = 1;
++obj.count;

console.log("\n    proxy 的用法\n    var proxy = new Proxy(target, handler);\n    \n    target参数表示所要拦截的目标对象, handler参数也是一个对象, 用来定制拦截行为\n");

var proxy = new Proxy({}, {
    get: function get(target, key, recevier) {
        return 35;
    }
});

proxy.time;
proxy.name;
console.log(proxy.title);

console.log("\n    如果 handler 是一个空对象, 没有任何拦截效果, 访问handler就等同于访问target\n");

var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = "test";
console.log(target.a);

console.log("\n    可以将Proxy对象, 设置到object.proxy属性, 从而可以在object对象上调用\n");

var object = { proxy: new Proxy(target, handler) };

console.log("\n    proxy对象也可以作为其他对象的原型对象\n");

var obj = Object.create(proxy);

console.log("\n    同一个拦截器,可以设置多个拦截操作\n");

var handler = {
    get: function get(target, key, receiver) {
        if (key === 'prototype') return Object.prototype;
        return "Hello, " + key;
    },
    apply: function apply(target, context, args) {
        return args[0];
    },
    construct: function construct(target, args) {
        return args[1];
    }
};

var fproxy = new Proxy(function (x, y) {
    return x + y;
}, handler);

console.log(fproxy(1, 2));
console.log(new fproxy(1, new Number(2)));
console.log(fproxy.foo);
console.log(fproxy.prototype);

console.log("\nproxy实例方法\n    get方法用于拦截某个属性的读取操作。上文已经有一个例子，下面是另一个拦截读取操作的例子\n");

var person = {
    name: "张三"
};

var proxy = new Proxy(person, {
    get: function get(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});

proxy.name; // "张三"
//proxy.age // 抛出一个错误

var proto = new Proxy({}, {
    get: function get(target, propertyKey, receiver) {
        console.log('GET ' + propertyKey);
        return target[propertyKey];
    }
});

var obj = Object.create(proto);
obj.xxx; // "GET xxx"

function createArray() {
    var handler = {
        get: function get(target, propKey, receiver) {
            var index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };

    var target = [];
    target.push.apply(target, arguments);
    return new Proxy(target, handler);
}

var arr = createArray('a', 'b', 'c');
console.log(arr[-1]); // c

var pipe = function () {
    var pipe;
    return function (value) {
        pipe = [];
        return new Proxy({}, {
            get: function get(pipeObject, fnName) {
                if (fnName == "get") {
                    return pipe.reduce(function (val, fn) {
                        return fn(val);
                    }, value);
                }
                pipe.push(window[fnName]);
                return pipeObject;
            }
        });
    };
}();

var double = function double(n) {
    return n * 2;
};
var pow = function pow(n) {
    return n * n;
};
var reverseInt = function reverseInt(n) {
    return n.toString().split('').reverse().join('') | 0;
};

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

console.log("\n    set 方法用来拦截某个属性的赋值操作\n");
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
    get: function get(target, key) {
        invariant(key, 'get');
        return target[key];
    },
    set: function set(target, key, value) {
        invariant(key, 'set');
        return true;
    }
};
function invariant(key, action) {
    if (key[0] === '_') {
        throw new Error("Invalid attempt to " + action + " private \"" + key + "\" property");
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

console.log("\n    apply方法拦截函数的调用, call 和 apply 操作\n");

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
    apply: function apply(target, ctx, args) {
        return Reflect.apply.apply(Reflect, arguments) * 2;
    }
};
function sum(left, right) {
    return left + right;
};
var proxy = new Proxy(sum, twice);
proxy(1, 2); // 6
proxy.call(null, 5, 6); // 22
proxy.apply(null, [7, 8]); // 30

console.log("\n    has方法可以隐藏某些属性, 不被in操作符发现.\n");

var handler = {
    has: function has(target, key) {
        if (key[0] === '_') {
            return false;
        }
        return key in target;
    }
};
var target = { _prop: 'foo', prop: 'foo' };
var proxy = new Proxy(target, handler);
'_prop' in proxy; // false

console.log("\n    如果原对象不可配置或者禁止扩展，这时has拦截会报错。\n");
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

console.log("\n    construct 用于拦截new命令\n    ");

var p = new Proxy(function () {}, {
    construct: function construct(target, args) {
        console.log('called: ' + args.join(', '));
        return { value: args[0] * 10 };
    }
});

new p(1).value;
// "called: 1"
// 10

//如果 construct 返回的不是对象, 将会报错
var p = new Proxy(function () {}, {
    construct: function construct(target, argumentsList) {
        return 1;
    }
});

//new p() // 报错

console.log("\n    Proxy.revocable方法返回一个可取消的Proxy实例。\n");

var target = {};
var handler = {};

var _Proxy$revocable = Proxy.revocable(target, handler);

var proxy = _Proxy$revocable.proxy;
var revoke = _Proxy$revocable.revoke;


proxy.foo = 123;
proxy.foo; // 123

revoke();
//proxy.foo // TypeError: Revoked

console.log("\n    Reflect\n    ");

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

},{}],10:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//set 和 map
console.log('\n    Set\n    Set本身是一个构造函数, 用来生成Set的数据结构\n');

var s = new Set();
[2, 3, 4, 5, 6].map(function (x) {
    return s.add(x);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
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

console.log('\n    Set 函数可以接受一个数组(或类似数组对象)作为参数, 用来初始化\n');

var set = new Set([1, 2, 3, 4, 5]);
[].concat(_toConsumableArray(set));

var items = new Set([1, 2, 3]);
items.size;

function divs() {
    return [].concat(_toConsumableArray(document.querySelectorAll('div')));
}

var set = new Set(divs());
set.size;

divs().forEach(function (div) {
    return set.add(div);
});
set.size;

console.log('\n    往set加入值得时候, 不会发生类型转换, 所以 5 和 "5" 是两个不同的值. set 内部判定两个值是否相等\n    使用的是 === 主要区别是 NaN 等于自身, 而精确相等运算符认为 NaN 不等于自身\n    与 Object.is 不同\n');

console.log('\n    Set的实例属性和方法\n    - Set.prototype.constructor: 构造函数, 默认就是Set函数\n    - Set.prototype.size: 返回Set实例的成员总数\n');

//Set实例的方法分为两类: 操作方法和遍历方法
//add() delete() has() clear()

var set = new Set();

set.add(1).add(2).add(3);

console.log(set.size);

console.log(set.has(2));
console.log(set.has(1));

console.log(set.delete(1));
console.log(set.has(1));

//数组去重
function dedupe(array) {
    return Array.from(new Set(array));
}

(_console = console).log.apply(_console, _toConsumableArray(dedupe([1, 1, 2, 3]))); // 1 2 3

//遍历操作

//Set的结构的四种遍历操作

var set = new Set(['red', 'green', 'blue']);

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = set.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        console.log(item);
    }
    // red
    // green
    // blue
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

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = set.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _item = _step3.value;

        console.log(_item);
    }
    // red
    // green
    // blue
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = set.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _item2 = _step4.value;

        console.log(_item2);
    }
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator5 = set[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var x = _step5.value;

        console.log(x);
    }
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}

var arr = [].concat(_toConsumableArray(set));
console.log(arr);

//数组去重
var arr1 = [3, 5, 2, 2, 5, 5];
var unique = [].concat(_toConsumableArray(new Set(arr1)));
console.log(unique);

var set2 = new Set([1, 2, 3]);
set2 = new Set([].concat(_toConsumableArray(set2)).map(function (x) {
    return x * 2;
}));
// 返回Set结构：{2, 4, 6}

var set3 = new Set([1, 2, 3, 4, 5]);
set3 = new Set([].concat(_toConsumableArray(set3)).filter(function (x) {
    return x % 2 == 0;
}));
// 返回Set结构：{2, 4}

var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);

// 并集
var union = new Set([].concat(_toConsumableArray(a), _toConsumableArray(b)));
// [1, 2, 3, 4]

// 交集
var intersect = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
    return b.has(x);
}));
// [2, 3]

// 差集
var difference = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
    return !b.has(x);
}));

console.log('\n    WeakSet 省略\n');

console.log('\n    Map \n    ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。\n    也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。\n');

var m = new Map();
var o = { p: "Hello World" };

m.set(o, "content");
m.get(o); // "content"

m.has(o); // true
m.delete(o); // true
m.has(o); // false

console.log('\n    作为构造函数 Map也可以接受一个数组作为参数, 然后 get 方法读取这个键, 接着使用detect方法删除这个键\n');

var map = new Map([["name", "张三"], ["title", "Author"]]);

map.size; // 2
map.has("name"); // true
map.get("name"); // "张三"
map.has("title"); // true
map.get("title"); // "Author"

//注意，只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心。

var map = new Map();

map.set(['a'], 555);
console.log(map.get(['a'])); // undefined

//同理，同样的值的两个实例，在Map结构中被视为两个键。

var map = new Map();

var k1 = ['a'];
var k2 = ['a'];

map.set(k1, 111).set(k2, 222);

map.get(k1); // 111
map.get(k2); // 222

//如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键，包括0和-0。
// 另外，虽然NaN不严格相等于自身，但Map将其视为同一个键。

console.log('\n    Map的实例属性和操作方法\n    \n    size属性  set(key, value)方法 get(key)方法 has(key)方法 delete(key) clear()方法\n');

console.log('\n    Map原生提供三个遍历器生成函数和一个遍历方法。\n\n    keys()：返回键名的遍历器。\n    values()：返回键值的遍历器。\n    entries()：返回所有成员的遍历器。\n    forEach()：遍历Map的所有成员。\n');

var map = new Map([['F', 'no'], ['T', 'yes']]);

var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
    for (var _iterator6 = map.keys()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var key = _step6.value;

        console.log(key);
    }
    // "F"
    // "T"
} catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
        }
    } finally {
        if (_didIteratorError6) {
            throw _iteratorError6;
        }
    }
}

var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
    for (var _iterator7 = map.values()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var value = _step7.value;

        console.log(value);
    }
    // "no"
    // "yes"
} catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
        }
    } finally {
        if (_didIteratorError7) {
            throw _iteratorError7;
        }
    }
}

var _iteratorNormalCompletion8 = true;
var _didIteratorError8 = false;
var _iteratorError8 = undefined;

try {
    for (var _iterator8 = map.entries()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _item3 = _step8.value;

        console.log(_item3[0], _item3[1]);
    }
    // "F" "no"
    // "T" "yes"

    // 或者
} catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
        }
    } finally {
        if (_didIteratorError8) {
            throw _iteratorError8;
        }
    }
}

var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;

try {
    for (var _iterator9 = map.entries()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var _step9$value = _slicedToArray(_step9.value, 2);

        var _key = _step9$value[0];
        var _value = _step9$value[1];

        console.log(_key, _value);
    }

    // 等同于使用map.entries()
} catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion9 && _iterator9.return) {
            _iterator9.return();
        }
    } finally {
        if (_didIteratorError9) {
            throw _iteratorError9;
        }
    }
}

var _iteratorNormalCompletion10 = true;
var _didIteratorError10 = false;
var _iteratorError10 = undefined;

try {
    for (var _iterator10 = map[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
        var _step10$value = _slicedToArray(_step10.value, 2);

        var _key2 = _step10$value[0];
        var _value2 = _step10$value[1];

        console.log(_key2, _value2);
    }
} catch (err) {
    _didIteratorError10 = true;
    _iteratorError10 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion10 && _iterator10.return) {
            _iterator10.return();
        }
    } finally {
        if (_didIteratorError10) {
            throw _iteratorError10;
        }
    }
}

console.log('与其他数组结构的转换');

//Map转成数组

console.log([].concat(_toConsumableArray(map)));

//数组转Map
var map = new Map([].concat(_toConsumableArray(map)));

//Map转对象
//如果所有的Map键都是字符串, 它可以转为对象

function strMapToObj(strMap) {
    var obj = Object.create(null);
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
        for (var _iterator11 = strMap[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var _step11$value = _slicedToArray(_step11.value, 2);

            var k = _step11$value[0];
            var v = _step11$value[1];

            obj[k] = v;
        }
    } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion11 && _iterator11.return) {
                _iterator11.return();
            }
        } finally {
            if (_didIteratorError11) {
                throw _iteratorError11;
            }
        }
    }

    return obj;
}

var myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap);

//对象转Map
function objToStrMap(obj) {
    var strMap = new Map();
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
        for (var _iterator12 = Object.keys(obj)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
            var k = _step12.value;

            strMap.set(k, obj[k]);
        }
    } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion12 && _iterator12.return) {
                _iterator12.return();
            }
        } finally {
            if (_didIteratorError12) {
                throw _iteratorError12;
            }
        }
    }

    return strMap;
}

objToStrMap({ yes: true, no: false });

//Map 与 JSON 互相转化

console.log('\n    WeakMap 省略\n');

},{}],11:[function(require,module,exports){
'use strict';

//Promise
//基本用法
console.log('\n    ES6规定. Promise对象是一个构造函数, 用来生成Promise实例\n');

function timeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then(function (value) {
    console.log(value);
});

var promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function () {
    console.log('Resolved.');
});

console.log('Hi!');

//暂时没有想到好的测试方法

//最佳写法
// window.fetch('json/FE.json').then(function(response) {
//     return response.json()
// }).then(function(json) {
//     console.log('parsed json', json)
//     drawRadar(json);
// }).catch(function(ex) {
//     console.log('parsing failed', ex)
// });

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function Todo(text) {
    var done = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    _classCallCheck(this, Todo);

    this.text = text;
    this.done = done;
};

exports.default = Todo;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TodoListController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Todo = require("./Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoListController = exports.TodoListController = function () {
    function TodoListController() {
        _classCallCheck(this, TodoListController);

        this.todos = [];
        this.init();
    }

    _createClass(TodoListController, [{
        key: "addTodo",
        value: function addTodo() {
            if (this.todoText) {
                this.todos.push(new _Todo2.default(this.todoText));
            }
        }
    }, {
        key: "remaining",
        value: function remaining() {
            return this.todos.filter(function (todo) {
                return todo.done;
            }).length;
        }
    }, {
        key: "archive",
        value: function archive() {
            this.todos = this.todos.filter(function (todo) {
                return !todo.done;
            });
        }
    }, {
        key: "init",
        value: function init() {
            //add three todos
            this.todos.push(new _Todo2.default("Learn ES6"));
            this.todos.push(new _Todo2.default("Learn AngularJS"));
            this.todos.push(new _Todo2.default("Learn ES6 + AngularJS"));
        }
    }]);

    return TodoListController;
}();

},{"./Todo":12}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvbGVzc29uMS9pbmRleC5qcyIsInNyYy9sZXNzb24xMC9pbmRleC5qcyIsInNyYy9sZXNzb24yL2luZGV4LmpzIiwic3JjL2xlc3NvbjMvaW5kZXguanMiLCJzcmMvbGVzc29uNC9pbmRleC5qcyIsInNyYy9sZXNzb241L2luZGV4LmpzIiwic3JjL2xlc3NvbjYvaW5kZXguanMiLCJzcmMvbGVzc29uNy9pbmRleC5qcyIsInNyYy9sZXNzb244L2luZGV4LmpzIiwic3JjL2xlc3NvbjkvaW5kZXguanMiLCJzcmMvdG9kb0xpc3QvVG9kby5qcyIsInNyYy90b2RvTGlzdC9Ub2RvTGlzdENvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsRUFBMUIsRUFBOEIsVUFBOUIsQ0FBeUMsb0JBQXpDOzs7QUNkQTs7O0FBR0EsUUFBUSxHQUFSOztBQUtBLFFBQVEsR0FBUjs7QUFRQTtBQUNJLFFBQUksS0FBSSxFQUFKLENBRFI7QUFFSSxRQUFJLElBQUksQ0FBSixDQUZSOzs7O0FBTUEsSUFBSTtBQUNBO0FBREEsS0FFQTtBQUZBLENBQUosQ0FHRSxPQUFPLEtBQVAsRUFBYztBQUNaLFlBQVEsR0FBUixDQUFZLEtBQVosRUFEWTtDQUFkOztBQUlGLFFBQVEsR0FBUjs7QUFhQSxJQUFJO0FBQ0EsWUFBUSxHQUFSLENBQVksR0FBWjtBQURBLFdBRUEsQ0FBUSxHQUFSLENBQVksR0FBWjs7QUFGQSxRQUlJLE1BQU0sQ0FBTixDQUpKO0FBS0EsUUFBSSxNQUFNLENBQU4sQ0FMSjtDQUFKLENBTUUsT0FBTyxLQUFQLEVBQWM7QUFDWixZQUFRLEdBQVIsQ0FBWSxLQUFa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aUI7Ozs7Ozs7Ozs7OztBQ0FyQjs7Ozs7Ozs7SUFFYTtBQUNULGFBRFMsa0JBQ1QsR0FBZTs4QkFETixvQkFDTTs7QUFDWCxhQUFLLEtBQUwsR0FBYSxFQUFiLENBRFc7QUFFWCxhQUFLLElBQUwsR0FGVztLQUFmOztpQkFEUzs7a0NBTUE7QUFDTCxnQkFBRyxLQUFLLFFBQUwsRUFBZTtBQUNkLHFCQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLG1CQUFTLEtBQUssUUFBTCxDQUF6QixFQURjO2FBQWxCOzs7O29DQUtPO0FBQ1AsbUJBQU8sS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixnQkFBUTtBQUFDLHVCQUFPLEtBQUssSUFBTCxDQUFSO2FBQVIsQ0FBbEIsQ0FBOEMsTUFBOUMsQ0FEQTs7OztrQ0FJRjtBQUNMLGlCQUFLLEtBQUwsR0FBYSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLGdCQUFRO0FBQUMsdUJBQU8sQ0FBQyxLQUFLLElBQUwsQ0FBVDthQUFSLENBQS9CLENBREs7Ozs7K0JBSUY7O0FBRUgsaUJBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsbUJBQVMsV0FBVCxDQUFoQixFQUZHO0FBR0gsaUJBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsbUJBQVMsaUJBQVQsQ0FBaEIsRUFIRztBQUlILGlCQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLG1CQUFTLHVCQUFULENBQWhCLEVBSkc7Ozs7V0FwQkUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtsZXNzb24xfSBmcm9tIFwiLi9sZXNzb24xXCI7XG5pbXBvcnQge2xlc3NvbjJ9IGZyb20gXCIuL2xlc3NvbjJcIjtcbmltcG9ydCB7bGVzc29uM30gZnJvbSBcIi4vbGVzc29uM1wiO1xuaW1wb3J0IHtsZXNzb240fSBmcm9tIFwiLi9sZXNzb240XCI7XG5pbXBvcnQge2xlc3NvbjV9IGZyb20gXCIuL2xlc3NvbjVcIjtcbmltcG9ydCB7bGVzc29uNn0gZnJvbSBcIi4vbGVzc29uNlwiO1xuaW1wb3J0IHtsZXNzb243fSBmcm9tIFwiLi9sZXNzb243XCI7XG5pbXBvcnQge2xlc3Nvbjh9IGZyb20gXCIuL2xlc3NvbjhcIjtcbmltcG9ydCB7bGVzc29uOX0gZnJvbSBcIi4vbGVzc29uOVwiO1xuaW1wb3J0IHtsZXNzb24xMH0gZnJvbSBcIi4vbGVzc29uMTBcIjtcblxuXG5pbXBvcnQgeyBUb2RvTGlzdENvbnRyb2xsZXIgfSBmcm9tICcuL3RvZG9MaXN0L1RvZG9MaXN0Q29udHJvbGxlcic7XG5cbmFuZ3VsYXIubW9kdWxlKFwidG9kb0FwcFwiLCBbXSkuY29udHJvbGxlcihcIlRvZG9MaXN0Q29udHJvbGxlclwiLCBUb2RvTGlzdENvbnRyb2xsZXIpO1xuIiwiJ3VzZSBzdHJpY3QnXG4vL2xldOWSjGNvbnN05ZG95LukXG5cbmNvbnNvbGUubG9nKFxuICAgIGDpmK7kuIDls7AgRUNNQVNjcmlwdDYg5YWl6ZeoIOWtpuS5oCBcbiAgICAg6L+Z6YeM5Y+q5YiX5Ye66aG555uu5Lit55So55qE6KeE5YiZ5ZKM55+l6K+G54K5LCDmm7TlpJrlhoXlrrksIOiHquW3seeci+S5pmBcbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBMZXNzb24gMSBMZXTlkoxjb25zdOWRveS7pFxuXG5MZXRcbuWfuuacrOeUqOazlVxuICAgICBFUzbmlrDlop7kuoZsZXTlkb3ku6TvvIznlKjmnaXlo7DmmI7lj5jph4/jgILlroPnmoTnlKjms5XnsbvkvLzkuo52YXLvvIzkvYbmmK/miYDlo7DmmI7nmoTlj5jph4/vvIzlj6rlnKhsZXTlkb3ku6TmiYDlnKjnmoTku6PnoIHlnZflhoXmnInmlYhgXG4pO1xuXG57XG4gICAgbGV0IGEgPSAxMDtcbiAgICB2YXIgYiA9IDE7XG59XG5cbi8v5Li65LqG5L+d6K+B5Luj56CB5q2j5bi46L+Q6KGMLCDliqDlhaV0cnkgY2F0Y2gg5L2G5piv5L6d54S25bCG6ZSZ6K+v5omT5Y2w5Ye65p2lXG50cnkge1xuICAgIGEgLy8gUmVmZXJlbmNlRXJyb3I6IGEgaXMgbm90IGRlZmluZWQuXG4gICAgYiAvLyAxXG59IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbn1cblxuY29uc29sZS5sb2coXG4gICAgYFxu5LiN5a2Y5Zyo5Y+Y6YeP5o+Q5Y2HXG4gICAgbGV05LiN5YOPdmFy6YKj5qC35Lya5Y+R55Sf4oCc5Y+Y6YeP5o+Q5Y2H4oCd546w6LGh44CC5omA5Lul77yM5Y+Y6YeP5LiA5a6a6KaB5Zyo5aOw5piO5ZCO5L2/55So77yM5ZCm5YiZ5oql6ZSZ44CCXG4gICAgXG4gICAg5rOo5oSPOiDmnInlvoXpqozor4EsIOebruWJjeWcqOaIkeeahOeOr+Wig+S4iywg5rKh5pyJ5oql6ZSZLCDlj6rmmK/ov5Tlm551bmRlZmluZWQsIOS4jmJhYmVs6L2s5oiQRVM15pyJ5YWzLCBcbiAgICBcbiAgICDlrp7pmYXlnKggY2hyb21lIOS4i+i/kOihjCwg57uT5p6c5piv5oiR5Lus5pyf5pyb55qELiBcbiAgICBcbiAgICDmiYDku6XlnKjlrp7pmYXmtYvor5XkuK0sIOivt+eUqOa1j+iniOWZqCznm7TmjqXov5DooYwsIOS9huaYr+i/meaYr+WHhuWImeS5n+aYr+WcqOS7peWQjuWGmUVTNuaJgOW6lOivpeazqOaEj+eahFxuICAgIGBcbik7XG5cbnRyeSB7XG4gICAgY29uc29sZS5sb2coZm9vKTsgLy8g6L6T5Ye6dW5kZWZpbmVkXG4gICAgY29uc29sZS5sb2coYmFyKTsgLy8g5oql6ZSZUmVmZXJlbmNlRXJyb3Ig5pyJ5b6F6aqM6K+BLCDnm67liY3lnKjmiJHnmoTnjq/looPkuIssIOayoeacieaKpemUmSwg5Y+q5piv6L+U5ZuedW5kZWZpbmVkXG5cbiAgICB2YXIgZm9vID0gMjtcbiAgICBsZXQgYmFyID0gMjtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpOyAvL+W6lOivpei+k+WHuiBSZWZlcmVuY2VFcnJvclxufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7mmoLml7bmgKfmrbvljLooVERaKVxuICAgIOWPquimgeWdl+e6p+S9nOeUqOWfn+WGheWtmOWcqGxldOWRveS7pO+8jOWug+aJgOWjsOaYjueahOWPmOmHj+WwseKAnOe7keWumuKAne+8iGJpbmRpbmfvvInov5nkuKrljLrln5/vvIzkuI3lho3lj5flpJbpg6jnmoTlvbHlk43jgIJgXG4pO1xuXG50cnkge1xuICAgIHZhciB0bXAgPSAxMjM7XG5cbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICB0bXAgPSAnYWJjJzsgLy8gUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgbGV0IHRtcDtcbiAgICB9XG59IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy/lupTor6XovpPlh7ogUmVmZXJlbmNlRXJyb3Jcbn1cblxuY29uc29sZS5sb2coXG4gICAgYFxu5LiN5YWB6K646YeN5aSN5aOw5piOXG4gICAgbGV05LiN5YWB6K645Zyo55u45ZCM5L2c55So5Z+f5YaF77yM6YeN5aSN5aOw5piO5ZCM5LiA5Liq5Y+Y6YePYFxuKTtcblxuXG5mdW5jdGlvbiBGb28oKSB7XG4gICAgbGV0IGEgPSAxMDtcbiAgICAvL3ZhciBhID0gMTsgLy/kuLrkuobpmLLmraLmiqUg6YeN5aSN5aOw5piO55qE6ZSZ6K+vIOaJgOS7peazqOmHiuaOiVxufVxuXG5mdW5jdGlvbiBCYXIoKSB7XG4gICAgbGV0IGEgPSAxMDtcbiAgICAvL2xldCBhID0gMTsgIC8v5Li65LqG6Ziy5q2i5oqlIOmHjeWkjeWjsOaYjueahOmUmeivryDmiYDku6Xms6jph4rmjolcbn1cblxuY29uc29sZS5sb2coXG4gICAgYFxuY29uc3RcbiAgICBjb25zdOS5n+eUqOadpeWjsOaYjuWPmOmHj++8jOWFtuS7lueJueaAp+WSjGxldOS4gOagtywg5L2G5piv5aOw5piO55qE5piv5bi46YeP44CC5LiA5pem5aOw5piO77yM5bi46YeP55qE5YC85bCx5LiN6IO95pS55Y+Y44CCYFxuKTtcblxuY29uc3QgUEkgPSAzLjE0MTU7XG5QSSAvLyAzLjE0MTVcblxuLy9QSSA9IDM7ICAgLy8gVHlwZUVycm9yOiBcIlBJXCIgaXMgcmVhZC1vbmx5LCDkuLrkuobpmLLmraLmiqXplJksIOaJgOS7peazqOmHilxuXG5jb25zb2xlLmxvZyhgXG4gICAgY29uc3Tlo7DmmI7nmoTlj5jph4/kuI3lvpfmlLnlj5jlgLzvvIzov5nmhI/lkbPnnYDvvIxjb25zdOS4gOaXpuWjsOaYjuWPmOmHj++8jOWwseW/hemhu+eri+WNs+WIneWni+WMlu+8jOS4jeiDveeVmeWIsOS7peWQjui1i+WAvOOAgmBcbik7IiwiLy9jbGFzc1xuXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsIi8v5Y+Y6YeP55qE6Kej5p6E6LWL5YC8XG5jb25zb2xlLmxvZyhcbiAgICBgTGVzc29uIDIg5Y+Y6YeP55qE6Kej5p6Q6LWL5YC8XG5cbuaVsOe7hOeahOe7k+aehOi1i+WAvFxu5Z+65pys55So5rOVXG4gICAgRVM25YWB6K645oyJ54Wn5LiA5a6a5qih5byP77yM5LuO5pWw57uE5ZKM5a+56LGh5Lit5o+Q5Y+W5YC877yM5a+55Y+Y6YeP6L+b6KGM6LWL5YC877yM6L+Z6KKr56ew5Li66Kej5p6EYFxuKTtcblxubGV0IFtmb28sIFtbYmFyXSwgYmF6XV0gPSBbMSwgW1syXSwgM11dO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgICR7Zm9vfSAvLyAxXG4gICAgICR7YmFyfSAvLyAyXG4gICAgICR7YmF6fSAvLyAzYFxuKVxuXG5cblxubGV0IFsgLCAsIHRoaXJkXSA9IFtcImZvb1wiLCBcImJhclwiLCBcImJhelwiXTtcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7dGhpcmR9IC8vYmF6XG4gICAgYFxuKTtcblxubGV0IFt4LCAsIHldID0gWzEsIDIsIDNdO1xuXG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke3h9IC8vIDFcbiAgICAke3l9IC8vIDNcbiAgICBgXG4pO1xuXG5cbmxldCBbaGVhZCwgLi4udGFpbF0gPSBbMSwgMiwgMywgNF07XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke2hlYWR9IC8vIDFcbiAgICAke3RhaWx9IC8vIFsyLCAzLCA0XVxuICAgIGBcbik7XG5cbmxldCBbYSwgYiwgLi4uY10gPSBbJ2EnXTtcbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke2F9IC8vIFwiYVwiXG4gICAgJHtifSAvLyB1bmRlZmluZWRcbiAgICAke2N9IC8vIFtdXG4gICAgYFxuKTtcblxuY29uc29sZS5sb2coXG4gICAgYFxu6buY6K6k5YC8XG4gICAg6Kej5p6E6LWL5YC85YWB6K645oyH5a6a6buY6K6k5YC8XG4gICAgYFxuKTtcblxudmFyIFtib29sID0gdHJ1ZV0gPSBbXTtcbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke2Jvb2x9IC8vIHRydWVcbiAgICBgXG4pXG5cbmxldCBbZCwgZSA9ICdiJ10gPSBbJ2EnXSAvLyBkPSdhJywgZT0nYidcbmxldCBbZiwgZyA9ICdiJ10gPSBbJ2EnLCB1bmRlZmluZWRdIC8vIGY9J2EnLCBnPSdiJ1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHtkfSBcbiAgICAke2V9XG4gICAgJHtmfVxuICAgICR7Z31cbiAgICBgXG4pXG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICDms6jmhI/vvIxFUzblhoXpg6jkvb/nlKjkuKXmoLznm7jnrYnov5DnrpfnrKbvvIg9PT3vvInvvIzliKTmlq3kuIDkuKrkvY3nva7mmK/lkKbmnInlgLzjgILmiYDku6XvvIzlpoLmnpzkuIDkuKrmlbDnu4TmiJDlkZjkuI3kuKXmoLznrYnkuo51bmRlZmluZWTvvIzpu5jorqTlgLzmmK/kuI3kvJrnlJ/mlYjnmoTjgIJcbiAgICBgXG4pO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAg5aaC5p6c6buY6K6k5YC85piv5LiA5Liq6KGo6L6+5byP77yM6YKj5LmI6L+Z5Liq6KGo6L6+5byP5piv5oOw5oCn5rGC5YC855qE77yM5Y2z5Y+q5pyJ5Zyo55So5Yiw55qE5pe25YCZ77yM5omN5Lya5rGC5YC844CCICAgIFxuICAgIGBcbilcblxuZnVuY3Rpb24gZmFhYSgpe1xuICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcbn1cblxubGV0IFtmYSA9IGZhYWEoKV0gPSBbMV07XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICDkuIrpnaLku6PnoIHkuK3vvIzlm6DkuLpmYeiDveWPluWIsOWAvO+8jOaJgOS7peWHveaVsGZhYWHmoLnmnKzkuI3kvJrmiafooYzjgIJcbiAgICBgXG4pO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7lr7nosaHnmoTop6PmnoTotYvlgLxcbiAgICDop6PmnoTkuI3ku4Xlj6/ku6XnlKjkuo7mlbDnu4TvvIzov5jlj6/ku6XnlKjkuo7lr7nosaHjgIJcbiAgICBgXG4pO1xuXG52YXIgeyBmb28xLCBiYXIxIH0gPSB7IGZvbzE6IFwiYWFhXCIsIGJhcjE6IFwiYmJiXCIgfTtcbmZvbzEgLy8gXCJhYWFcIlxuYmFyMSAvLyBcImJiYlwiXG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke2ZvbzF9XG4gICAgJHtiYXIxfVxuICAgIFxuICAgIOWvueixoeeahOino+aehOS4juaVsOe7hOacieS4gOS4qumHjeimgeeahOS4jeWQjOOAguaVsOe7hOeahOWFg+e0oOaYr+aMieasoeW6j+aOkuWIl+eahO+8jOWPmOmHj+eahOWPluWAvOeUseWug+eahOS9jee9ruWGs+Wumu+8m+iAjOWvueixoeeahOWxnuaAp+ayoeacieasoeW6j++8jOWPmOmHj+W/hemhu+S4juWxnuaAp+WQjOWQje+8jOaJjeiDveWPluWIsOato+ehrueahOWAvOOAglxuICAgIGBcbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbuWtl+espuS4suS5n+WPr+S7peino+aehOi1i+WAvOOAglxuICAgIOi/meaYr+WboOS4uuatpOaXtu+8jOWtl+espuS4suiiq+i9rOaNouaIkOS6huS4gOS4quexu+S8vOaVsOe7hOeahOWvueixoeOAglxuICAgIOexu+S8vOaVsOe7hOeahOWvueixoemDveacieS4gOS4qmxlbmd0aOWxnuaAp++8jOWboOatpOi/mOWPr+S7peWvuei/meS4quWxnuaAp+ino+aehOi1i+WAvOOAglxuICAgIGBcbik7XG5cbmNvbnN0IFtsLG0sbixvLHAscV0gPSAnaGVsbG8nO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHtsfVxuICAgICR7bX1cbiAgICAke259XG4gICAgJHtvfVxuICAgICR7cH1cbiAgICAke3F9XG4gICAgYFxuKTtcblxubGV0IHtsZW5ndGggOiBsZW59ID0gJ2hlbGxvJztcblxuY29uc29sZS5sb2cobGVuKTtcblxuY29uc29sZS5sb2coXG4gICAgYFxu5pWw5YC85ZKM5biD5bCU5YC855qE6Kej5p6E6LWL5YC8XG4gICAg6Kej5p6E6LWL5YC85pe277yM5aaC5p6c562J5Y+35Y+z6L655piv5pWw5YC85ZKM5biD5bCU5YC877yM5YiZ5Lya5YWI6L2s5Li65a+56LGh44CCYFxuKTtcblxubGV0IHt0b1N0cmluZzogbnVtfSA9IDEyMztcbm51bSA9PT0gTnVtYmVyLnByb3RvdHlwZS50b1N0cmluZyAvLyB0cnVlXG5cbmxldCB7dG9TdHJpbmc6IGJvb30gPSB0cnVlO1xuYm9vID09PSBCb29sZWFuLnByb3RvdHlwZS50b1N0cmluZyAvLyB0cnVlXG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICDkuIrpnaLku6PnoIHkuK3vvIzmlbDlgLzlkozluIPlsJTlgLznmoTljIXoo4Xlr7nosaHpg73mnIl0b1N0cmluZ+WxnuaAp++8jOWboOatpOWPmOmHj+mDveiDveWPluWIsOWAvOOAglxuICAgIOino+aehOi1i+WAvOeahOinhOWImeaYr++8jOWPquimgeetieWPt+WPs+i+ueeahOWAvOS4jeaYr+Wvueixoe+8jOWwseWFiOWwhuWFtui9rOS4uuWvueixoeOAgueUseS6jnVuZGVmaW5lZOWSjG51bGzml6Dms5XovazkuLrlr7nosaHvvIzmiYDku6Xlr7nlroPku6zov5vooYzop6PmnoTotYvlgLzvvIzpg73kvJrmiqXplJnjgIJcbiAgICBgXG4pO1xuXG5cblxuIiwiLy/lrZfnrKbkuLLnmoTmianlsZXlkozmlbDlrZfnmoTmianlsZVcbmNvbnNvbGUubG9nKFxuICAgIGBcbmluY2x1ZGVzKCksIHN0YXJ0c1dpdGgoKSwgZW5kc1dpdGgoKVxuICAgIFxuICAgIGluY2x1ZGVzKCnvvJrov5Tlm57luIPlsJTlgLzvvIzooajnpLrmmK/lkKbmib7liLDkuoblj4LmlbDlrZfnrKbkuLLjgIJcbiAgICBzdGFydHNXaXRoKCnvvJrov5Tlm57luIPlsJTlgLzvvIzooajnpLrlj4LmlbDlrZfnrKbkuLLmmK/lkKblnKjmupDlrZfnrKbkuLLnmoTlpLTpg6jjgIJcbiAgICBlbmRzV2l0aCgp77ya6L+U5Zue5biD5bCU5YC877yM6KGo56S65Y+C5pWw5a2X56ym5Liy5piv5ZCm5Zyo5rqQ5a2X56ym5Liy55qE5bC+6YOo44CCXG4gICAgYFxuKTtcblxudmFyIHN0cjEgPSAnSGVsbG8gd29ybGQhJztcblxuc3RyMS5zdGFydHNXaXRoKCdIZWxsbycpIC8vIHRydWVcbnN0cjEuZW5kc1dpdGgoJyEnKSAvLyB0cnVlXG5zdHIxLmluY2x1ZGVzKCdvJykgLy8gdHJ1ZVxuXG52YXIgc3RyMiA9ICdIZWxsbyB3b3JsZCEnO1xuXG5zdHIyLnN0YXJ0c1dpdGgoJ3dvcmxkJywgNikgLy8gdHJ1ZVxuc3RyMi5lbmRzV2l0aCgnSGVsbG8nLCA1KSAvLyB0cnVlXG5zdHIyLmluY2x1ZGVzKCdIZWxsbycsIDYpIC8vIGZhbHNlXG5cbi8qKlxuICog5LiK6Z2i5Luj56CB6KGo56S677yM5L2/55So56ys5LqM5Liq5Y+C5pWwbuaXtu+8jGVuZHNXaXRo55qE6KGM5Li65LiO5YW25LuW5Lik5Liq5pa55rOV5pyJ5omA5LiN5ZCM44CC5a6D6ZKI5a+55YmNbuS4quWtl+espu+8jOiAjOWFtuS7luS4pOS4quaWueazlemSiOWvueS7juesrG7kuKrkvY3nva7nm7TliLDlrZfnrKbkuLLnu5PmnZ/jgIJcbiAqL1xuXG5jb25zb2xlLmxvZyhgXG4gICAgcmVwZWF0KClcbiAgICByZXBlYXTmlrnms5Xov5Tlm57kuIDkuKrmlrDlrZfnrKbkuLLvvIzooajnpLrlsIbljp/lrZfnrKbkuLLph43lpI1u5qyh44CCXG5gKVxuXG5cbid4Jy5yZXBlYXQoMykgLy8gXCJ4eHhcIlxuJ2hlbGxvJy5yZXBlYXQoMikgLy8gXCJoZWxsb2hlbGxvXCJcbiduYScucmVwZWF0KDApIC8vXG5cbi8v5a2X56ym5Liy5qih5p2/XG5cbi8v5pWw5a2X55qE5omp5bGVLCDlhbfkvZPlop7liqDkuobkuIDkupvmlrDmlrnms5UsIOWFt+S9k+ivt+e/u+S5puafpemYhSIsIi8v5pWw57uE55qE5omp5bGVXG5jb25zb2xlLmxvZyhcbiAgICBgXG5BcnJheS5mcm9t5pa55rOV55So5LqO5bCG5Lik57G75a+56LGh6L2s5Li655yf5q2j55qE5pWw57uE77ya57G75Ly85pWw57uE55qE5a+56LGh77yIYXJyYXktbGlrZSBvYmplY3TvvInlkozlj6/pgY3ljobvvIhpdGVyYWJsZe+8ieeahOWvueixoe+8iOWMheaLrEVTNuaWsOWinueahOaVsOaNrue7k+aehFNldOWSjE1hcO+8ieOAglxuXG7kuIvpnaLmmK/kuIDkuKrnsbvkvLzmlbDnu4TnmoTlr7nosaHvvIxBcnJheS5mcm9t5bCG5a6D6L2s5Li655yf5q2j55qE5pWw57uE44CCXG5cbuWFs+S6jiBBcnJheS5mcm9tIOabtOWkmue7huiKgizlj6/ku6Xlj4LogIMg5ZOlIOe/u+ivkeeahOesrDE356ug56ys5LiA6IqC55qE5YaF5a65XG4gICAgYFxuKTtcblxubGV0IGFycmF5TGlrZSA9IHtcbiAgICAnMCc6ICdhJyxcbiAgICAnMSc6ICdiJyxcbiAgICAnMic6ICdjJyxcbiAgICBsZW5ndGg6IDNcbn07XG5cbi8vIEVTNeeahOWGmeazlVxudmFyIGFycjEgPSBbXS5zbGljZS5jYWxsKGFycmF5TGlrZSk7IC8vIFsnYScsICdiJywgJ2MnXVxuY29uc29sZS5sb2coYXJyMSk7XG5cbi8vIEVTNueahOWGmeazlVxubGV0IGFycjIgPSBBcnJheS5mcm9tKGFycmF5TGlrZSk7IC8vIFsnYScsICdiJywgJ2MnXVxuY29uc29sZS5sb2coYXJyMik7XG5cbmZ1bmN0aW9uIGZvbygpIHtcbiAgICB2YXIgYXJyMyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcbiAgICBjb25zb2xlLmxvZyhhcnIzKTtcbn1cblxuZnVuY3Rpb24gYmFyKCkge1xuICAgIHZhciBhcnIzID0gWyAuLi4gYXJndW1lbnRzXTtcbiAgICBjb25zb2xlLmxvZyhhcnIzKTtcbn1cblxuZm9vKDEsMiwzLFs0LDVdKTtcblxuYmFyKDEsMiwzLFs0LDVdKTtcblxuY29uc29sZS5sb2coYFxuQXJyYXkub2Yg5pa55rOVXG5cbkFycmF5Lm9mKGl0ZW1fMCwgaXRlbV8xLCDCt8K3wrcpIOWPr+S7peWIm+W7uuS4gOS4queUsSBpdGVtXzDjgIFpdGVtXzEg562J5YWD57Sg57uE5oiQ55qE5pWw57uE44CCXG7mmK/lvKXooaXmlbDnu4TmnoTpgKDlh73mlbBBcnJheSgp55qE5LiN6LazXG5gKVxuXG5jb25zb2xlLmxvZyhBcnJheS5vZigxKSk7XG5jb25zb2xlLmxvZyhBcnJheS5vZigxLDIpKTtcblxuLy/mlbDnu4TnmoTlrp7kvovmlrnms5VcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgIOaVsOe7hOWunuS+i+eahGNvcHlXaXRoaW7mlrnms5XvvIzlnKjlvZPliY3mlbDnu4TlhoXpg6jvvIzlsIbmjIflrprkvY3nva7nmoTmiJDlkZjlpI3liLbliLDlhbbku5bkvY3nva7vvIjkvJropobnm5bljp/mnInmiJDlkZjvvInvvIznhLblkI7ov5Tlm57lvZPliY3mlbDnu4TjgILkuZ/lsLHmmK/or7TvvIzkvb/nlKjov5nkuKrmlrnms5XvvIzkvJrkv67mlLnlvZPliY3mlbDnu4TjgIJcbiAgICBcbiAgICDlroPmjqXlj5fkuInkuKrlj4LmlbA6XG4gICAgdGFyZ2V077yI5b+F6ZyA77yJ77ya5LuO6K+l5L2N572u5byA5aeL5pu/5o2i5pWw5o2u44CCXG4gICAgc3RhcnTvvIjlj6/pgInvvInvvJrku47or6XkvY3nva7lvIDlp4vor7vlj5bmlbDmja7vvIzpu5jorqTkuLow44CC5aaC5p6c5Li66LSf5YC877yM6KGo56S65YCS5pWw44CCXG4gICAgZW5k77yI5Y+v6YCJ77yJ77ya5Yiw6K+l5L2N572u5YmN5YGc5q2i6K+75Y+W5pWw5o2u77yM6buY6K6k562J5LqO5pWw57uE6ZW/5bqm44CC5aaC5p6c5Li66LSf5YC877yM6KGo56S65YCS5pWw44CCXG4gICAgYFxuKTtcblxuWzEsIDIsIDMsIDQsIDVdLmNvcHlXaXRoaW4oMCwgMywgNClcblxuY29uc29sZS5sb2coYFxuXG4gICAg5pWw57uE5a6e5L6L55qEZmluZOaWueazle+8jOeUqOS6juaJvuWHuuesrOS4gOS4quespuWQiOadoeS7tueahOaVsOe7hOaIkOWRmOOAguWug+eahOWPguaVsOaYr+S4gOS4quWbnuiwg+WHveaVsO+8jOaJgOacieaVsOe7hOaIkOWRmOS+neasoeaJp+ihjOivpeWbnuiwg+WHveaVsO+8jFxuICAgIOebtOWIsOaJvuWHuuesrOS4gOS4qui/lOWbnuWAvOS4unRydWXnmoTmiJDlkZjvvIznhLblkI7ov5Tlm57or6XmiJDlkZjjgILlpoLmnpzmsqHmnInnrKblkIjmnaHku7bnmoTmiJDlkZjvvIzliJnov5Tlm551bmRlZmluZWRcblxuYCk7XG5cblsxLCA0LCAtNSwgMTBdLmZpbmQoKG4pID0+IG4gPCAwKVxuXG5jb25zb2xlLmxvZyhgXG4gICAg5pWw57uE5a6e5L6L55qEZmluZEluZGV45pa55rOV55qE55So5rOV5LiOZmluZOaWueazlemdnuW4uOexu+S8vO+8jOi/lOWbnuesrOS4gOS4quespuWQiOadoeS7tueahOaVsOe7hOaIkOWRmOeahOS9jee9ru+8jOWmguaenOaJgOacieaIkOWRmOmDveS4jeespuWQiOadoeS7tu+8jOWImei/lOWbni0x44CCXG5gKTtcblxuWzEsIDUsIDEwLCAxNV0uZmluZEluZGV4KGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgYXJyKSB7XG4gICAgcmV0dXJuIHZhbHVlID4gOTtcbn0pIC8vIDJcblxuY29uc29sZS5sb2coYFxuICAgIGZpbGzmlrnms5Xkvb/nlKjnu5nlrprlgLzvvIzloavlhYXkuIDkuKrmlbDnu4TjgIJcbmApO1xuXG5bJ2EnLCAnYicsICdjJ10uZmlsbCg3KVxuLy8gWzcsIDcsIDddXG5cbm5ldyBBcnJheSgzKS5maWxsKDcpXG4vLyBbNywgNywgN11cblxuY29uc29sZS5sb2coYFxuICAgIGVudHJpZXMoKe+8jGtleXMoKeWSjHZhbHVlcygp4oCU4oCU55So5LqO6YGN5Y6G5pWw57uE44CCXG5gKVxuXG5mb3IgKGxldCBpbmRleCBvZiBbJ2EnLCAnYiddLmtleXMoKSkge1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbn1cbi8vIDBcbi8vIDFcblxuLy8gZm9yIChsZXQgZWxlbSBvZiBbJ2EnLCAnYiddLnZhbHVlcygpKSB7XG4vLyAgICAgY29uc29sZS5sb2coZWxlbSk7XG4vLyB9XG4vLyAnYSdcbi8vICdiJ1xuXG5mb3IgKGxldCBbaW5kZXgsIGVsZW1dIG9mIFsnYScsICdiJ10uZW50cmllcygpKSB7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIGVsZW0pO1xufVxuLy8gMCBcImFcIlxuLy8gMSBcImJcIiIsIi8v5Ye95pWw55qE5omp5bGVXG5cbmNvbnNvbGUubG9nKGBcbiAgICDlh73mlbDlj4LmlbDnmoTpu5jorqTlgLxcbmApXG5cbmZ1bmN0aW9uIFBvaW50KHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbn1cblxudmFyIHAgPSBuZXcgUG9pbnQoKTtcblxuZnVuY3Rpb24gbG9nKHgsIHkgPSAnV29ybGQnKSB7XG4gICAgY29uc29sZS5sb2coeCwgeSk7XG59XG5cbmxvZygnSGVsbG8nKSAvLyBIZWxsbyBXb3JsZFxubG9nKCdIZWxsbycsICdDaGluYScpIC8vIEhlbGxvIENoaW5hXG5sb2coJ0hlbGxvJywgJycpIC8vIEhlbGxvXG5cbmNvbnNvbGUubG9nKGBcbuS4juino+aehOi1i+WAvOm7mOiupOWAvOe7k+WQiOS9v+eUqFxuICAgIOWPguaVsOm7mOiupOWAvOWPr+S7peS4juino+aehOi1i+WAvOeahOm7mOiupOWAvO+8jOe7k+WQiOi1t+adpeS9v+eUqOOAglxuYCk7XG5cbmZ1bmN0aW9uIGZvbyh7eCwgeSA9IDV9KSB7XG4gICAgY29uc29sZS5sb2coeCwgeSk7XG59XG5cbmZvbyh7fSkgLy8gdW5kZWZpbmVkLCA1XG5mb28oe3g6IDF9KSAvLyAxLCA1XG5mb28oe3g6IDEsIHk6IDJ9KSAvLyAxLCAyXG4vL2ZvbygpIC8vIFR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydHkgJ3gnIG9mIHVuZGVmaW5lZFxuXG5cbmZ1bmN0aW9uIGZldGNoKHVybCwgeyBib2R5ID0gJycsIG1ldGhvZCA9ICdHRVQnLCBoZWFkZXJzID0ge30gfSA9IHt9KXtcbiAgICBjb25zb2xlLmxvZyhtZXRob2QpO1xufVxuXG5mZXRjaCgnaHR0cDovL2V4YW1wbGUuY29tJywge30pXG4vLyBcIkdFVFwiXG5cbmZldGNoKCdodHRwOi8vZXhhbXBsZS5jb20nKVxuLy8gXCJHRVRcIlxuXG5jb25zb2xlLmxvZyhgXG7lh73mlbDnmoRsZW5ndGjlsZ7mgKdcbiAgICDmjIflrprkuobpu5jorqTlgLzku6XlkI7vvIzlh73mlbDnmoRsZW5ndGjlsZ7mgKfvvIzlsIbov5Tlm57msqHmnInmjIflrprpu5jorqTlgLznmoTlj4LmlbDkuKrmlbDjgILkuZ/lsLHmmK/or7TvvIzmjIflrprkuobpu5jorqTlgLzlkI7vvIxsZW5ndGjlsZ7mgKflsIblpLHnnJ9cbmApO1xuXG4oZnVuY3Rpb24oYSl7fSkubGVuZ3RoOyAvLyAxXG4oZnVuY3Rpb24oYSA9IDUpe30pLmxlbmd0aDsgLy8gMFxuKGZ1bmN0aW9uKGEsIGIsIGMgPSA1KXt9KS5sZW5ndGg7IC8vIDJcblxuY29uc29sZS5sb2coYFxuICAgIOWIqeeUqOWPguaVsOm7mOiupOWAvO+8jOWPr+S7peaMh+WumuafkOS4gOS4quWPguaVsOS4jeW+l+ecgeeVpe+8jOWmguaenOecgeeVpeWwseaKm+WHuuS4gOS4qumUmeivr+OAglxuYCk7XG5mdW5jdGlvbiB0aHJvd0lmTWlzc2luZygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVyJyk7XG59XG5cbmZ1bmN0aW9uIGZvbyhtdXN0QmVQcm92aWRlZCA9IHRocm93SWZNaXNzaW5nKCkpIHtcbiAgICByZXR1cm4gbXVzdEJlUHJvdmlkZWQ7XG59XG5cbi8vZm9vKClcbi8vIEVycm9yOiBNaXNzaW5nIHBhcmFtZXRlclxuXG5jb25zb2xlLmxvZyhgXG5yZXN05Y+C5pWwXG4gICAgRVM25byV5YWlcmVzdOWPguaVsO+8iOW9ouW8j+S4uuKAnC4uLuWPmOmHj+WQjeKAne+8ie+8jOeUqOS6juiOt+WPluWHveaVsOeahOWkmuS9meWPguaVsO+8jOi/meagt+WwseS4jemcgOimgeS9v+eUqGFyZ3VtZW50c+WvueixoeS6huOAgnJlc3Tlj4LmlbDmkK3phY3nmoTlj5jph4/mmK/kuIDkuKrmlbDnu4TvvIzor6Xlj5jph4/lsIblpJrkvZnnmoTlj4LmlbDmlL7lhaXmlbDnu4TkuK3jgIJcbmApO1xuXG5cbmZ1bmN0aW9uIGFkZCguLi52YWx1ZXMpIHtcbiAgICBsZXQgc3VtID0gMDtcblxuICAgIGZvciAodmFyIHZhbCBvZiB2YWx1ZXMpIHtcbiAgICAgICAgc3VtICs9IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtO1xufVxuXG5hZGQoMiwgNSwgMykgLy8gMTBcblxuLy8gYXJndW1lbnRz5Y+Y6YeP55qE5YaZ5rOVXG4vL2NvbnN0IHNvcnROdW1iZXJzID0gKCkgPT5cbi8vICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc29ydCgpO1xuXG4vLyByZXN05Y+C5pWw55qE5YaZ5rOVXG5jb25zdCBzb3J0TnVtYmVycyA9ICguLi5udW1iZXJzKSA9PiBudW1iZXJzLnNvcnQoKTtcblxuLy/ms6jmhI/vvIxyZXN05Y+C5pWw5LmL5ZCO5LiN6IO95YaN5pyJ5YW25LuW5Y+C5pWw77yI5Y2z5Y+q6IO95piv5pyA5ZCO5LiA5Liq5Y+C5pWw77yJ77yM5ZCm5YiZ5Lya5oql6ZSZ44CCXG5cbi8vIOaKpemUmVxuLy8gZnVuY3Rpb24gZihhLCAuLi5iLCBjKSB7XG4vLyAgICAgLy8gLi4uXG4vLyB9XG5cbi8v5Ye95pWw55qEbGVuZ3Ro5bGe5oCn77yM5LiN5YyF5ouscmVzdOWPguaVsOOAglxuXG4vLyhmdW5jdGlvbihhKSB7fSkubGVuZ3RoOyAgLy8gMVxuLy8oZnVuY3Rpb24oLi4uYSkge30pLmxlbmd0aDsgIC8vIDBcbi8vKGZ1bmN0aW9uKGEsIC4uLmIpIHt9KS5sZW5ndGg7ICAvLyAxXG5cblxuY29uc29sZS5sb2coYFxu5omp5bGV6L+Q566X56ymXG4gICAg5omp5bGV6L+Q566X56ym77yIc3ByZWFk77yJ5piv5LiJ5Liq54K577yILi4u77yJ44CC5a6D5aW95q+UcmVzdOWPguaVsOeahOmAhui/kOeul++8jOWwhuS4gOS4quaVsOe7hOi9rOS4uueUqOmAl+WPt+WIhumalOeahOWPguaVsOW6j+WIl+OAglxuYCk7XG5cblxuY29uc29sZS5sb2coLi4uWzEsIDIsIDNdKTtcbi8vIDEgMiAzXG5cbmNvbnNvbGUubG9nKDEsIC4uLlsyLCAzLCA0XSwgNSk7XG4vLyAxIDIgMyA0IDVcblxuXG5jb25zb2xlLmxvZyhgXG4gICAg5omp5bGV6L+Q566X55qE5bqU55SoXG4gICAg5ZCI5bm25pWw57uEXG5gKTtcblxudmFyIGFycjEgPSBbJ2EnLCAnYiddO1xudmFyIGFycjIgPSBbJ2MnXTtcbnZhciBhcnIzID0gWydkJywgJ2UnXTtcblxuLy8gRVM155qE5ZCI5bm25pWw57uEXG5hcnIxLmNvbmNhdChhcnIyLCBhcnIzKTtcbi8vIFsgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScgXVxuXG4vLyBFUzbnmoTlkIjlubbmlbDnu4RcblsuLi5hcnIxLCAuLi5hcnIyLCAuLi5hcnIzXTtcblxuY29uc29sZS5sb2coYFxu566t5aS05Ye95pWwXG5cbueureWktOWHveaVsOacieWHoOS4quS9v+eUqOazqOaEj+eCueOAglxuXG7vvIgx77yJ5Ye95pWw5L2T5YaF55qEdGhpc+Wvueixoe+8jOWwseaYr+WumuS5ieaXtuaJgOWcqOeahOWvueixoe+8jOiAjOS4jeaYr+S9v+eUqOaXtuaJgOWcqOeahOWvueixoeOAglxuXG7vvIgy77yJ5LiN5Y+v5Lul5b2T5L2c5p6E6YCg5Ye95pWw77yM5Lmf5bCx5piv6K+077yM5LiN5Y+v5Lul5L2/55SobmV35ZG95Luk77yM5ZCm5YiZ5Lya5oqb5Ye65LiA5Liq6ZSZ6K+v44CCXG5cbu+8iDPvvInkuI3lj6/ku6Xkvb/nlKhhcmd1bWVudHPlr7nosaHvvIzor6Xlr7nosaHlnKjlh73mlbDkvZPlhoXkuI3lrZjlnKjjgILlpoLmnpzopoHnlKjvvIzlj6/ku6XnlKhSZXN05Y+C5pWw5Luj5pu/44CCXG5cbu+8iDTvvInkuI3lj6/ku6Xkvb/nlKh5aWVsZOWRveS7pO+8jOWboOatpOeureWktOWHveaVsOS4jeiDveeUqOS9nEdlbmVyYXRvcuWHveaVsOOAglxuYCk7XG5cblxuY29uc3QgbnVtYmVycyA9ICguLi5udW1zKSA9PiBudW1zO1xuXG5udW1iZXJzKDEsIDIsIDMsIDQsIDUpO1xuIiwiLy/lr7nosaHnmoTmianlsZVcbmNvbnNvbGUubG9nKGBcbuWxnuaAp+eahOeugOa0geihqOekuuazlVxuYCk7XG5cbnZhciBmb28gPSAnYmFyJztcbnZhciBiYXogPSB7Zm9vfTtcbmJheiAvLyB7Zm9vOiBcImJhclwifVxuXG4vLyDnrYnlkIzkuo5cbnZhciBiYXogPSB7Zm9vOiBmb299O1xuXG5cbmZ1bmN0aW9uIGYoeCwgeSkge1xuICAgIHJldHVybiB7eCwgeX07XG59XG5cbi8vIOetieWQjOS6jlxuXG5mdW5jdGlvbiBmKHgsIHkpIHtcbiAgICByZXR1cm4ge3g6IHgsIHk6IHl9O1xufVxuXG5mKDEsIDIpIC8vIE9iamVjdCB7eDogMSwgeTogMn1cblxudmFyIG8gPSB7XG4gICAgbWV0aG9kKCkge1xuICAgICAgICByZXR1cm4gXCJIZWxsbyFcIjtcbiAgICB9XG59O1xuXG4vLyDnrYnlkIzkuo5cblxudmFyIG8gPSB7XG4gICAgbWV0aG9kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFwiSGVsbG8hXCI7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZ2V0UG9pbnQoKSB7XG4gICAgdmFyIHggPSAxO1xuICAgIHZhciB5ID0gMTA7XG4gICAgcmV0dXJuIHt4LCB5fTtcbn1cblxuZ2V0UG9pbnQoKVxuLy8ge3g6MSwgeToxMH1cblxuY29uc29sZS5sb2coYFxu5bGe5oCn5ZCN55qE6KGo6L6+5byPXG5gKTtcblxubGV0IHByb3BLZXkgPSAnZm9vJztcblxubGV0IG9iaiA9IHtcbiAgICBbcHJvcEtleV06IHRydWUsXG4gICAgWydhJyArICdiYyddOiAxMjNcbn07XG5cbnZhciBsYXN0V29yZCA9ICdsYXN0IHdvcmQnO1xuXG52YXIgYSA9IHtcbiAgICAnZmlyc3Qgd29yZCc6ICdoZWxsbycsXG4gICAgW2xhc3RXb3JkXTogJ3dvcmxkJ1xufTtcblxuYVsnZmlyc3Qgd29yZCddIC8vIFwiaGVsbG9cIlxuYVtsYXN0V29yZF0gLy8gXCJ3b3JsZFwiXG5hWydsYXN0IHdvcmQnXSAvLyBcIndvcmxkXCJcblxuY29uc29sZS5sb2coYFxuICAgIOaWueazleeahG5hbWXlsZ7mgKdcbmApO1xuXG52YXIgcGVyc29uID0ge1xuICAgIHNheU5hbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gICAgfSxcbiAgICBnZXQgZmlyc3ROYW1lKCkge1xuICAgICAgICByZXR1cm4gXCJOaWNob2xhc1wiXG4gICAgfVxufVxuXG5wZXJzb24uc2F5TmFtZS5uYW1lICAgLy8gXCJzYXlOYW1lXCJcbnBlcnNvbi5maXJzdE5hbWUubmFtZSAvLyBcImdldCBmaXJzdE5hbWVcIlxuXG5jb25zb2xlLmxvZyhgXG4gICAgT2JqZWN0LmlzKClcbiAgICBPYmplY3QuaXPlsLHmmK/pg6jnvbLov5nkuKrnrpfms5XnmoTmlrDmlrnms5XjgILlroPnlKjmnaXmr5TovoPkuKTkuKrlgLzmmK/lkKbkuKXmoLznm7jnrYnvvIzkuI7kuKXmoLzmr5TovoPov5DnrpfnrKbvvIg9PT3vvInnmoTooYzkuLrln7rmnKzkuIDoh7TjgIJcbiAgICDkuI3lkIzkuYvlpITlj6rmnInkuKTkuKrvvJrkuIDmmK8rMOS4jeetieS6ji0w77yM5LqM5pivTmFO562J5LqO6Ieq6LqrXG5gKTtcblxuKzAgPT09IC0wIC8vdHJ1ZVxuTmFOID09PSBOYU4gLy8gZmFsc2VcblxuT2JqZWN0LmlzKCswLCAtMCkgLy8gZmFsc2Vcbk9iamVjdC5pcyhOYU4sIE5hTikgLy8gdHJ1ZVxuXG5jb25zb2xlLmxvZyhgXG4gICAgT2JqZWN0LmFzc2lnbigpXG4gICAgT2JqZWN0LmFzc2lnbuaWueazleeUqOS6juWvueixoeeahOWQiOW5tu+8jOWwhua6kOWvueixoe+8iHNvdXJjZe+8ieeahOaJgOacieWPr+aemuS4vuWxnuaAp++8jOWkjeWItuWIsOebruagh+Wvueixoe+8iHRhcmdldO+8ieOAglxuYCk7XG5cbnZhciB0YXJnZXQgPSB7IGE6IDEgfTtcblxudmFyIHNvdXJjZTEgPSB7IGI6IDIgfTtcbnZhciBzb3VyY2UyID0geyBjOiAzIH07XG5cbk9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UxLCBzb3VyY2UyKTtcbnRhcmdldCAvLyB7YToxLCBiOjIsIGM6M31cblxuY29uc29sZS5sb2coYFxuICAgIE9iamVjdC5hc3NpZ27mlrnms5XnmoTnlKjpgJRcbiAgICAxLuS4uuWvueixoea3u+WKoOWxnuaAp1xuICAgIDIu5Li65a+56LGh5re75Yqg5pa55rOVXG4gICAgMy7lhYvpmoblr7nosaFcbiAgICA0LuWQiOW5tuWvueixoVxuICAgIDUu5Li65bGe5oCn5oyH5a6a6buY6K6k5YC8XG5gKTtcblxuY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7eCwgeX0pO1xuICAgIH1cbn1cblxuY2xhc3MgU29tZUNsYXNzIHtcblxufVxuXG5PYmplY3QuYXNzaWduKFNvbWVDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBzb21lTWV0aG9kKGFyZzEsIGFyZzIpIHtcbiAgICAvL8K3wrfCt1xuICAgIH0sXG4gICAgYW5vdGhlck1ldGhvZCgpIHtcbiAgICAvL8K3wrfCt1xuICAgIH1cbn0pO1xuXG4vLyDnrYnlkIzkuo7kuIvpnaLnmoTlhpnms5VcblNvbWVDbGFzcy5wcm90b3R5cGUuc29tZU1ldGhvZCA9IGZ1bmN0aW9uIChhcmcxLCBhcmcyKSB7XG4gICAgLy/Ct8K3wrdcbn07XG5Tb21lQ2xhc3MucHJvdG90eXBlLmFub3RoZXJNZXRob2QgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy/Ct8K3wrdcbn07XG5cbmZ1bmN0aW9uIGNsb25lKG9yaWdpbikge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW4pO1xufVxuXG4vLyDkuI3ov4fvvIzph4fnlKjov5nnp43mlrnms5XlhYvpmobvvIzlj6rog73lhYvpmobljp/lp4vlr7nosaHoh6rouqvnmoTlgLzvvIzkuI3og73lhYvpmoblroPnu6fmib/nmoTlgLzjgILlpoLmnpzmg7PopoHkv53mjIHnu6fmib/pk77vvIzlj6/ku6Xph4fnlKjkuIvpnaLnmoTku6PnoIHjgIJcbmZ1bmN0aW9uIGNsb25lKG9yaWdpbikge1xuICAgIGxldCBvcmlnaW5Qcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW4pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUob3JpZ2luUHJvdG8pLCBvcmlnaW4pO1xufVxuXG5jb25zdCBtZXJnZSA9XG4gICAgKHRhcmdldCwgLi4uc291cmNlcykgPT4gT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgICBsb2dMZXZlbDogMCxcbiAgICBvdXRwdXRGb3JtYXQ6ICdodG1sJ1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc0NvbnRlbnQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUUywgb3B0aW9ucyk7XG59IiwiLy9wcm94eSBhbmQgUmVmbGVjdFxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgUHJveHnnlKjkuo7kv67mlLnmn5Dkupvmk43kvZznmoTpu5jorqTooYzkuLos562J5ZCM5LqO6K+t6KiA5bGC6Z2i5YGa5Ye65L+u5pS5LOaJgOS7peWxnuS6juS4gOenjVwi5YWD57yW56iLXCIsIOaXouWvuee8lueoi+ivreiogOi/m+ihjOe8lueoiy5cbiAgICBgXG4pO1xuXG52YXIgb2JqID0gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0OiBmdW5jdGlvbih0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGdldHRpbmcgJHtrZXl9YCk7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCguLi5hcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2V2aWVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzZXR0aW5nICR7a2V5fWApO1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQoLi4uYXJndW1lbnRzKTtcbiAgICB9XG59KTtcblxub2JqLm5hbWUgPSBcImhhcnJ5XCI7XG5vYmoubmFtZTtcblxub2JqLmNvdW50ID0gMTtcbisrb2JqLmNvdW50O1xuXG5jb25zb2xlLmxvZyhgXG4gICAgcHJveHkg55qE55So5rOVXG4gICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XG4gICAgXG4gICAgdGFyZ2V05Y+C5pWw6KGo56S65omA6KaB5oum5oiq55qE55uu5qCH5a+56LGhLCBoYW5kbGVy5Y+C5pWw5Lmf5piv5LiA5Liq5a+56LGhLCDnlKjmnaXlrprliLbmi6bmiKrooYzkuLpcbmApO1xuXG52YXIgcHJveHkgPSBuZXcgUHJveHkoe30sIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKHRhcmdldCwga2V5LCByZWNldmllcil7XG4gICAgICAgIHJldHVybiAzNTtcbiAgICB9XG59KTtcblxucHJveHkudGltZTtcbnByb3h5Lm5hbWU7XG5jb25zb2xlLmxvZyhwcm94eS50aXRsZSk7XG5cbmNvbnNvbGUubG9nKGBcbiAgICDlpoLmnpwgaGFuZGxlciDmmK/kuIDkuKrnqbrlr7nosaEsIOayoeacieS7u+S9leaLpuaIquaViOaenCwg6K6/6ZeuaGFuZGxlcuWwseetieWQjOS6juiuv+mXrnRhcmdldFxuYCk7XG5cbnZhciB0YXJnZXQgPSB7fTtcbnZhciBoYW5kbGVyID0ge307XG52YXIgcHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbnByb3h5LmEgPSBcInRlc3RcIjtcbmNvbnNvbGUubG9nKHRhcmdldC5hKTtcblxuY29uc29sZS5sb2coYFxuICAgIOWPr+S7peWwhlByb3h55a+56LGhLCDorr7nva7liLBvYmplY3QucHJveHnlsZ7mgKcsIOS7juiAjOWPr+S7peWcqG9iamVjdOWvueixoeS4iuiwg+eUqFxuYCk7XG5cbnZhciBvYmplY3QgPSB7cHJveHk6IG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpfTtcblxuY29uc29sZS5sb2coYFxuICAgIHByb3h55a+56LGh5Lmf5Y+v5Lul5L2c5Li65YW25LuW5a+56LGh55qE5Y6f5Z6L5a+56LGhXG5gKTtcblxudmFyIG9iaiA9IE9iamVjdC5jcmVhdGUocHJveHkpO1xuXG5jb25zb2xlLmxvZyhgXG4gICAg5ZCM5LiA5Liq5oum5oiq5ZmoLOWPr+S7peiuvue9ruWkmuS4quaLpuaIquaTjeS9nFxuYCk7XG5cbnZhciBoYW5kbGVyID0ge1xuICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwga2V5LCByZWNlaXZlcikge1xuICAgICAgICBpZihrZXkgPT09ICdwcm90b3R5cGUnKSByZXR1cm4gT2JqZWN0LnByb3RvdHlwZTtcbiAgICAgICAgcmV0dXJuIGBIZWxsbywgJHtrZXl9YDtcbiAgICB9LFxuICAgIGFwcGx5OiBmdW5jdGlvbih0YXJnZXQsIGNvbnRleHQsIGFyZ3Mpe1xuICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9LFxuICAgIGNvbnN0cnVjdDogZnVuY3Rpb24gKHRhcmdldCwgYXJncykge1xuICAgICAgICByZXR1cm4gYXJnc1sxXTtcbiAgICB9XG59O1xuXG52YXIgZnByb3h5ID0gbmV3IFByb3h5KGZ1bmN0aW9uKHgseSl7IHJldHVybiB4K3k7fSwgaGFuZGxlcik7XG5cblxuY29uc29sZS5sb2coZnByb3h5KDEsMikpO1xuY29uc29sZS5sb2cobmV3IGZwcm94eSgxLCBuZXcgTnVtYmVyKDIpKSk7XG5jb25zb2xlLmxvZyhmcHJveHkuZm9vKTtcbmNvbnNvbGUubG9nKGZwcm94eS5wcm90b3R5cGUpO1xuXG5jb25zb2xlLmxvZyhgXG5wcm94eeWunuS+i+aWueazlVxuICAgIGdldOaWueazleeUqOS6juaLpuaIquafkOS4quWxnuaAp+eahOivu+WPluaTjeS9nOOAguS4iuaWh+W3sue7j+acieS4gOS4quS+i+WtkO+8jOS4i+mdouaYr+WPpuS4gOS4quaLpuaIquivu+WPluaTjeS9nOeahOS+i+WtkFxuYCk7XG5cbnZhciBwZXJzb24gPSB7XG4gICAgbmFtZTogXCLlvKDkuIlcIlxufTtcblxudmFyIHByb3h5ID0gbmV3IFByb3h5KHBlcnNvbiwge1xuICAgIGdldDogZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIlByb3BlcnR5IFxcXCJcIiArIHByb3BlcnR5ICsgXCJcXFwiIGRvZXMgbm90IGV4aXN0LlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5wcm94eS5uYW1lIC8vIFwi5byg5LiJXCJcbi8vcHJveHkuYWdlIC8vIOaKm+WHuuS4gOS4qumUmeivr1xuXG5sZXQgcHJvdG8gPSBuZXcgUHJveHkoe30sIHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dFVCAnK3Byb3BlcnR5S2V5KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gICAgfVxufSk7XG5cbnZhciBvYmogPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbm9iai54eHggLy8gXCJHRVQgeHh4XCJcblxuZnVuY3Rpb24gY3JlYXRlQXJyYXkoLi4uZWxlbWVudHMpIHtcbiAgICBsZXQgaGFuZGxlciA9IHtcbiAgICAgICAgZ2V0KHRhcmdldCwgcHJvcEtleSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE51bWJlcihwcm9wS2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBwcm9wS2V5ID0gU3RyaW5nKHRhcmdldC5sZW5ndGggKyBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wS2V5LCByZWNlaXZlcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHRhcmdldCA9IFtdO1xuICAgIHRhcmdldC5wdXNoKC4uLmVsZW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XG59XG5cbmxldCBhcnIgPSBjcmVhdGVBcnJheSgnYScsICdiJywgJ2MnKTtcbmNvbnNvbGUubG9nKGFyclstMV0pOyAvLyBjXG5cbnZhciBwaXBlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGlwZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHBpcGUgPSBbXTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh7fSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAocGlwZU9iamVjdCwgZm5OYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuTmFtZSA9PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwaXBlLnJlZHVjZShmdW5jdGlvbiAodmFsLCBmbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGlwZS5wdXNoKHdpbmRvd1tmbk5hbWVdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGlwZU9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSgpKTtcblxudmFyIGRvdWJsZSA9IG4gPT4gbiAqIDI7XG52YXIgcG93ID0gbiA9PiBuICogbjtcbnZhciByZXZlcnNlSW50ID0gbiA9PiBuLnRvU3RyaW5nKCkuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSB8IDA7XG5cbi8vcGlwZSgzKS5kb3VibGUucG93LnJldmVyc2VJbnQuZ2V0XG4vLyA2MzsgaXQgY2FuIG5vdCB3b3JrIG9uIGJhYmVsOyBjaHJvbWUgaXMgZ29vZFxuXG4vLyBjb25zdCBkb20gPSBuZXcgUHJveHkoe30sIHtcbi8vICAgICBnZXQodGFyZ2V0LCBwcm9wZXJ0eSkge1xuLy8gICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXR0cnMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwcm9wZXJ0eSk7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIE9iamVjdC5rZXlzKGF0dHJzKSkge1xuLy8gICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyc1twcm9wXSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuLy8gICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChjaGlsZCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICByZXR1cm4gZWw7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KTtcbi8vXG4vLyBjb25zdCBlbCA9IGRvbS5kaXYoe30sXG4vLyAgICAgJ0hlbGxvLCBteSBuYW1lIGlzICcsXG4vLyAgICAgZG9tLmEoe2hyZWY6ICcvL2V4YW1wbGUuY29tJ30sICdNYXJrJyksXG4vLyAgICAgJy4gSSBsaWtlOicsXG4vLyAgICAgZG9tLnVsKHt9LFxuLy8gICAgICAgICBkb20ubGkoe30sICdUaGUgd2ViJyksXG4vLyAgICAgICAgIGRvbS5saSh7fSwgJ0Zvb2QnKSxcbi8vICAgICAgICAgZG9tLmxpKHt9LCAn4oCmYWN0dWFsbHkgdGhhdFxcJ3MgaXQnKVxuLy8gICAgIClcbi8vICk7XG4vL1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cbi8vIFNvIGZhciBpdCBpcyBub3Qgd29yayBvbiBiYWJlbCwgYnV0IGNocm9tZSBpcyBnb29kXG5cblxuY29uc29sZS5sb2coYFxuICAgIHNldCDmlrnms5XnlKjmnaXmi6bmiKrmn5DkuKrlsZ7mgKfnmoTotYvlgLzmk43kvZxcbmApO1xuLy9cbi8vIGxldCB2YWxpZGF0b3IgPSB7XG4vLyAgICAgc2V0OiBmdW5jdGlvbihvYmosIHByb3AsIHZhbHVlKSB7XG4vLyAgICAgICAgIGlmIChwcm9wID09PSAnYWdlJykge1xuLy8gICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBhZ2UgaXMgbm90IGFuIGludGVnZXInKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDIwMCkge1xuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgYWdlIHNlZW1zIGludmFsaWQnKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgLy8g5a+55LqOYWdl5Lul5aSW55qE5bGe5oCn77yM55u05o6l5L+d5a2YXG4vLyAgICAgICAgIG9ialtwcm9wXSA9IHZhbHVlO1xuLy8gICAgIH1cbi8vIH07XG4vL1xuLy8gdmFyIHBlcnNvbiA9IG5ldyBQcm94eSh7fSwgdmFsaWRhdG9yKTtcbi8vXG4vLyBwZXJzb24uYWdlID0gMTAwO1xuLy9cbi8vIHBlcnNvbi5hZ2UgLy8gMTAwXG4vLyBwZXJzb24uYWdlID0gJ3lvdW5nJyAvLyDmiqXplJlcbi8vIHBlcnNvbi5hZ2UgPSAzMDAgLy8g5oql6ZSZXG5cbi8vIGJhYmVsIOWvuSBQcm94eSDnmoTmlK/mjIHnmoTkuI3mmK/lvojlpb1cblxuXG52YXIgaGFuZGxlciA9IHtcbiAgICBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgICAgIGludmFyaWFudChrZXksICdnZXQnKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgIH0sXG4gICAgc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaW52YXJpYW50KGtleSwgJ3NldCcpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnZhcmlhbnQgKGtleSwgYWN0aW9uKSB7XG4gICAgaWYgKGtleVswXSA9PT0gJ18nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhdHRlbXB0IHRvICR7YWN0aW9ufSBwcml2YXRlIFwiJHtrZXl9XCIgcHJvcGVydHlgKTtcbiAgICB9XG59XG52YXIgdGFyZ2V0ID0ge307XG52YXIgcHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbi8vcHJveHkuX3Byb3Bcbi8vIEVycm9yOiBJbnZhbGlkIGF0dGVtcHQgdG8gZ2V0IHByaXZhdGUgXCJfcHJvcFwiIHByb3BlcnR5XG4vL3Byb3h5Ll9wcm9wID0gJ2MnXG4vLyBFcnJvcjogSW52YWxpZCBhdHRlbXB0IHRvIHNldCBwcml2YXRlIFwiX3Byb3BcIiBwcm9wZXJ0eVxuXG4vL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzUwMjUyMDQvamF2YXNjcmlwdC1wcm94eS1zdXBwb3J0LWluLWJhYmVsXG4vL3Byb3h5IHN1cHBvcnQgZGVwZW5kIG9uIGJyb3dzZXJcblxuY29uc29sZS5sb2coYFxuICAgIGFwcGx55pa55rOV5oum5oiq5Ye95pWw55qE6LCD55SoLCBjYWxsIOWSjCBhcHBseSDmk43kvZxcbmApO1xuXG4vLyB2YXIgdGFyZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0kgYW0gdGhlIHRhcmdldCc7IH07XG4vLyB2YXIgaGFuZGxlciA9IHtcbi8vICAgICBhcHBseTogZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICByZXR1cm4gJ0kgYW0gdGhlIHByb3h5Jztcbi8vICAgICB9XG4vLyB9O1xuLy9cbi8vIHZhciBwID0gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XG4vL1xuLy8gcCgpO1xuXG52YXIgdHdpY2UgPSB7XG4gICAgYXBwbHkgKHRhcmdldCwgY3R4LCBhcmdzKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KC4uLmFyZ3VtZW50cykgKiAyO1xuICAgIH1cbn07XG5mdW5jdGlvbiBzdW0gKGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIGxlZnQgKyByaWdodDtcbn07XG52YXIgcHJveHkgPSBuZXcgUHJveHkoc3VtLCB0d2ljZSk7XG5wcm94eSgxLCAyKSAvLyA2XG5wcm94eS5jYWxsKG51bGwsIDUsIDYpIC8vIDIyXG5wcm94eS5hcHBseShudWxsLCBbNywgOF0pIC8vIDMwXG5cbmNvbnNvbGUubG9nKGBcbiAgICBoYXPmlrnms5Xlj6/ku6XpmpDol4/mn5DkupvlsZ7mgKcsIOS4jeiiq2lu5pON5L2c56ym5Y+R546wLlxuYCk7XG5cbnZhciBoYW5kbGVyID0ge1xuICAgIGhhcyAodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKGtleVswXSA9PT0gJ18nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleSBpbiB0YXJnZXQ7XG4gICAgfVxufTtcbnZhciB0YXJnZXQgPSB7IF9wcm9wOiAnZm9vJywgcHJvcDogJ2ZvbycgfTtcbnZhciBwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xuJ19wcm9wJyBpbiBwcm94eSAvLyBmYWxzZVxuXG5jb25zb2xlLmxvZyhgXG4gICAg5aaC5p6c5Y6f5a+56LGh5LiN5Y+v6YWN572u5oiW6ICF56aB5q2i5omp5bGV77yM6L+Z5pe2aGFz5oum5oiq5Lya5oql6ZSZ44CCXG5gKTtcbi8vXG4vLyB2YXIgb2JqID0geyBhOiAxMCB9O1xuLy8gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKG9iaik7XG4vLyB2YXIgcCA9IG5ldyBQcm94eShvYmosIHtcbi8vICAgICBoYXM6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcCkge1xuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfVxuLy8gfSk7XG4vL1xuLy8gXCJhXCIgaW4gcDsgLy8gVHlwZUVycm9yIGlzIHRocm93blxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgY29uc3RydWN0IOeUqOS6juaLpuaIqm5ld+WRveS7pFxuICAgIGBcbik7XG5cbnZhciBwID0gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcbiAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uKHRhcmdldCwgYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGVkOiAnICsgYXJncy5qb2luKCcsICcpKTtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGFyZ3NbMF0gKiAxMCB9O1xuICAgIH1cbn0pO1xuXG5uZXcgcCgxKS52YWx1ZVxuLy8gXCJjYWxsZWQ6IDFcIlxuLy8gMTBcblxuLy/lpoLmnpwgY29uc3RydWN0IOi/lOWbnueahOS4jeaYr+WvueixoSwg5bCG5Lya5oql6ZSZXG52YXIgcCA9IG5ldyBQcm94eShmdW5jdGlvbigpIHt9LCB7XG4gICAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3VtZW50c0xpc3QpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxufSk7XG5cbi8vbmV3IHAoKSAvLyDmiqXplJlcblxuY29uc29sZS5sb2coYFxuICAgIFByb3h5LnJldm9jYWJsZeaWueazlei/lOWbnuS4gOS4quWPr+WPlua2iOeahFByb3h55a6e5L6L44CCXG5gKTtcblxudmFyIHRhcmdldCA9IHt9O1xudmFyIGhhbmRsZXIgPSB7fTtcblxudmFyIHtwcm94eSwgcmV2b2tlfSA9IFByb3h5LnJldm9jYWJsZSh0YXJnZXQsIGhhbmRsZXIpO1xuXG5wcm94eS5mb28gPSAxMjM7XG5wcm94eS5mb28gLy8gMTIzXG5cbnJldm9rZSgpO1xuLy9wcm94eS5mb28gLy8gVHlwZUVycm9yOiBSZXZva2VkXG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICBSZWZsZWN0XG4gICAgYFxuKTtcblxuXG4vLyBSZWZsZWN05a+56LGh55qE5pa55rOV5riF5Y2V5aaC5LiL77yM5YWxMTTkuKrjgIJcbi8vXG4vLyBSZWZsZWN0LmFwcGx5KHRhcmdldCx0aGlzQXJnLGFyZ3MpXG4vLyBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsYXJncylcbi8vIFJlZmxlY3QuZ2V0KHRhcmdldCxuYW1lLHJlY2VpdmVyKVxuLy8gUmVmbGVjdC5zZXQodGFyZ2V0LG5hbWUsdmFsdWUscmVjZWl2ZXIpXG4vLyBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxuYW1lLGRlc2MpXG4vLyBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCxuYW1lKVxuLy8gUmVmbGVjdC5oYXModGFyZ2V0LG5hbWUpXG4vLyBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxuLy8gUmVmbGVjdC5lbnVtZXJhdGUodGFyZ2V0KVxuLy8gUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KVxuLy8gUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXG4vLyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpXG4vLyBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcbi8vIFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90b3R5cGUpXG5cbiIsIi8vc2V0IOWSjCBtYXBcbmNvbnNvbGUubG9nKGBcbiAgICBTZXRcbiAgICBTZXTmnKzouqvmmK/kuIDkuKrmnoTpgKDlh73mlbAsIOeUqOadpeeUn+aIkFNldOeahOaVsOaNrue7k+aehFxuYCk7XG5cbnZhciBzID0gbmV3IFNldCgpO1xuWzIsMyw0LDUsNl0ubWFwKHggPT4gcy5hZGQoeCkpO1xuXG5mb3IobGV0IGkgb2Ygcykge1xuICAgIGNvbnNvbGUubG9nKGkpO1xufVxuXG5jb25zb2xlLmxvZyhgXG4gICAgU2V0IOWHveaVsOWPr+S7peaOpeWPl+S4gOS4quaVsOe7hCjmiJbnsbvkvLzmlbDnu4Tlr7nosaEp5L2c5Li65Y+C5pWwLCDnlKjmnaXliJ3lp4vljJZcbmApO1xuXG52YXIgc2V0ID0gbmV3IFNldChbMSwyLDMsNCw1XSk7XG5bLi4uc2V0XTtcblxudmFyIGl0ZW1zID0gbmV3IFNldChbMSwyLDNdKTtcbml0ZW1zLnNpemU7XG5cbmZ1bmN0aW9uIGRpdnMoKSB7XG4gICAgcmV0dXJuIFsuLi4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2JyldO1xufVxuXG52YXIgc2V0ID0gbmV3IFNldChkaXZzKCkpO1xuc2V0LnNpemU7XG5cbmRpdnMoKS5mb3JFYWNoKGRpdiA9PiBzZXQuYWRkKGRpdikpO1xuc2V0LnNpemU7XG5cbmNvbnNvbGUubG9nKGBcbiAgICDlvoBzZXTliqDlhaXlgLzlvpfml7blgJksIOS4jeS8muWPkeeUn+exu+Wei+i9rOaNoiwg5omA5LulIDUg5ZKMIFwiNVwiIOaYr+S4pOS4quS4jeWQjOeahOWAvC4gc2V0IOWGhemDqOWIpOWumuS4pOS4quWAvOaYr+WQpuebuOetiVxuICAgIOS9v+eUqOeahOaYryA9PT0g5Li76KaB5Yy65Yir5pivIE5hTiDnrYnkuo7oh6rouqssIOiAjOeyvuehruebuOetiei/kOeul+espuiupOS4uiBOYU4g5LiN562J5LqO6Ieq6LqrXG4gICAg5LiOIE9iamVjdC5pcyDkuI3lkIxcbmApO1xuXG5jb25zb2xlLmxvZyhgXG4gICAgU2V055qE5a6e5L6L5bGe5oCn5ZKM5pa55rOVXG4gICAgLSBTZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yOiDmnoTpgKDlh73mlbAsIOm7mOiupOWwseaYr1NldOWHveaVsFxuICAgIC0gU2V0LnByb3RvdHlwZS5zaXplOiDov5Tlm55TZXTlrp7kvovnmoTmiJDlkZjmgLvmlbBcbmApO1xuXG4vL1NldOWunuS+i+eahOaWueazleWIhuS4uuS4pOexuzog5pON5L2c5pa55rOV5ZKM6YGN5Y6G5pa55rOVXG4vL2FkZCgpIGRlbGV0ZSgpIGhhcygpIGNsZWFyKClcblxudmFyIHNldCA9IG5ldyBTZXQoKTtcblxuc2V0LmFkZCgxKS5hZGQoMikuYWRkKDMpO1xuXG5jb25zb2xlLmxvZyhzZXQuc2l6ZSk7XG5cbmNvbnNvbGUubG9nKHNldC5oYXMoMikpO1xuY29uc29sZS5sb2coc2V0LmhhcygxKSk7XG5cblxuY29uc29sZS5sb2coc2V0LmRlbGV0ZSgxKSk7XG5jb25zb2xlLmxvZyhzZXQuaGFzKDEpKTtcblxuXG5cbi8v5pWw57uE5Y676YeNXG5mdW5jdGlvbiBkZWR1cGUoYXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5KSk7XG59XG5cbmNvbnNvbGUubG9nKC4uLmRlZHVwZShbMSwxLDIsM10pKSAvLyAxIDIgM1xuXG5cbi8v6YGN5Y6G5pON5L2cXG5cbi8vU2V055qE57uT5p6E55qE5Zub56eN6YGN5Y6G5pON5L2cXG5cbnZhciBzZXQgPSBuZXcgU2V0KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSk7XG5cbmZvciAoIGxldCBpdGVtIG9mIHNldC5rZXlzKCkgKXtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbn1cbi8vIHJlZFxuLy8gZ3JlZW5cbi8vIGJsdWVcblxuZm9yICggbGV0IGl0ZW0gb2Ygc2V0LnZhbHVlcygpICl7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG59XG4vLyByZWRcbi8vIGdyZWVuXG4vLyBibHVlXG5cbmZvciAoIGxldCBpdGVtIG9mIHNldC5lbnRyaWVzKCkgKXtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbn1cbi8vIFtcInJlZFwiLCBcInJlZFwiXVxuLy8gW1wiZ3JlZW5cIiwgXCJncmVlblwiXVxuLy8gW1wiYmx1ZVwiLCBcImJsdWVcIl1cblxuZm9yIChsZXQgeCBvZiBzZXQpIHtcbiAgICBjb25zb2xlLmxvZyh4KTtcbn1cblxubGV0IGFyciA9IFsuLi5zZXRdO1xuY29uc29sZS5sb2coYXJyKTtcblxuLy/mlbDnu4Tljrvph41cbmxldCBhcnIxID0gWzMsIDUsIDIsIDIsIDUsIDVdO1xubGV0IHVuaXF1ZSA9IFsuLi5uZXcgU2V0KGFycjEpXTtcbmNvbnNvbGUubG9nKHVuaXF1ZSk7XG5cbmxldCBzZXQyID0gbmV3IFNldChbMSwgMiwgM10pO1xuc2V0MiA9IG5ldyBTZXQoWy4uLnNldDJdLm1hcCh4ID0+IHggKiAyKSk7XG4vLyDov5Tlm55TZXTnu5PmnoTvvJp7MiwgNCwgNn1cblxubGV0IHNldDMgPSBuZXcgU2V0KFsxLCAyLCAzLCA0LCA1XSk7XG5zZXQzID0gbmV3IFNldChbLi4uc2V0M10uZmlsdGVyKHggPT4gKHggJSAyKSA9PSAwKSk7XG4vLyDov5Tlm55TZXTnu5PmnoTvvJp7MiwgNH1cblxubGV0IGEgPSBuZXcgU2V0KFsxLCAyLCAzXSk7XG5sZXQgYiA9IG5ldyBTZXQoWzQsIDMsIDJdKTtcblxuLy8g5bm26ZuGXG5sZXQgdW5pb24gPSBuZXcgU2V0KFsuLi5hLCAuLi5iXSk7XG4vLyBbMSwgMiwgMywgNF1cblxuLy8g5Lqk6ZuGXG5sZXQgaW50ZXJzZWN0ID0gbmV3IFNldChbLi4uYV0uZmlsdGVyKHggPT4gYi5oYXMoeCkpKTtcbi8vIFsyLCAzXVxuXG4vLyDlt67pm4ZcbmxldCBkaWZmZXJlbmNlID0gbmV3IFNldChbLi4uYV0uZmlsdGVyKHggPT4gIWIuaGFzKHgpKSk7XG5cblxuY29uc29sZS5sb2coYFxuICAgIFdlYWtTZXQg55yB55WlXG5gKTtcblxuY29uc29sZS5sb2coYFxuICAgIE1hcCBcbiAgICBFUzbmj5DkvpvkuoZNYXDmlbDmja7nu5PmnoTjgILlroPnsbvkvLzkuo7lr7nosaHvvIzkuZ/mmK/plK7lgLzlr7nnmoTpm4blkIjvvIzkvYbmmK/igJzplK7igJ3nmoTojIPlm7TkuI3pmZDkuo7lrZfnrKbkuLLvvIzlkITnp43nsbvlnovnmoTlgLzvvIjljIXmi6zlr7nosaHvvInpg73lj6/ku6XlvZPkvZzplK7jgIJcbiAgICDkuZ/lsLHmmK/or7TvvIxPYmplY3Tnu5PmnoTmj5DkvpvkuobigJzlrZfnrKbkuLLigJTlgLzigJ3nmoTlr7nlupTvvIxNYXDnu5PmnoTmj5DkvpvkuobigJzlgLzigJTlgLzigJ3nmoTlr7nlupTvvIzmmK/kuIDnp43mm7TlrozlloTnmoRIYXNo57uT5p6E5a6e546w44CC5aaC5p6c5L2g6ZyA6KaB4oCc6ZSu5YC85a+54oCd55qE5pWw5o2u57uT5p6E77yMTWFw5q+UT2JqZWN05pu05ZCI6YCC44CCXG5gKTtcblxuXG52YXIgbSA9IG5ldyBNYXAoKTtcbnZhciBvID0ge3A6IFwiSGVsbG8gV29ybGRcIn07XG5cbm0uc2V0KG8sIFwiY29udGVudFwiKVxubS5nZXQobykgLy8gXCJjb250ZW50XCJcblxubS5oYXMobykgLy8gdHJ1ZVxubS5kZWxldGUobykgLy8gdHJ1ZVxubS5oYXMobykgLy8gZmFsc2VcblxuY29uc29sZS5sb2coYFxuICAgIOS9nOS4uuaehOmAoOWHveaVsCBNYXDkuZ/lj6/ku6XmjqXlj5fkuIDkuKrmlbDnu4TkvZzkuLrlj4LmlbAsIOeEtuWQjiBnZXQg5pa55rOV6K+75Y+W6L+Z5Liq6ZSuLCDmjqXnnYDkvb/nlKhkZXRlY3Tmlrnms5XliKDpmaTov5nkuKrplK5cbmApXG5cblxudmFyIG1hcCA9IG5ldyBNYXAoW1tcIm5hbWVcIiwgXCLlvKDkuIlcIl0sIFtcInRpdGxlXCIsIFwiQXV0aG9yXCJdXSk7XG5cbm1hcC5zaXplIC8vIDJcbm1hcC5oYXMoXCJuYW1lXCIpIC8vIHRydWVcbm1hcC5nZXQoXCJuYW1lXCIpIC8vIFwi5byg5LiJXCJcbm1hcC5oYXMoXCJ0aXRsZVwiKSAvLyB0cnVlXG5tYXAuZ2V0KFwidGl0bGVcIikgLy8gXCJBdXRob3JcIlxuXG4vL+azqOaEj++8jOWPquacieWvueWQjOS4gOS4quWvueixoeeahOW8leeUqO+8jE1hcOe7k+aehOaJjeWwhuWFtuinhuS4uuWQjOS4gOS4qumUruOAgui/meS4gOeCueimgemdnuW4uOWwj+W/g+OAglxuXG52YXIgbWFwID0gbmV3IE1hcCgpO1xuXG5tYXAuc2V0KFsnYSddLCA1NTUpO1xuY29uc29sZS5sb2cobWFwLmdldChbJ2EnXSkpIC8vIHVuZGVmaW5lZFxuXG4vL+WQjOeQhu+8jOWQjOagt+eahOWAvOeahOS4pOS4quWunuS+i++8jOWcqE1hcOe7k+aehOS4reiiq+inhuS4uuS4pOS4qumUruOAglxuXG52YXIgbWFwID0gbmV3IE1hcCgpO1xuXG52YXIgazEgPSBbJ2EnXTtcbnZhciBrMiA9IFsnYSddO1xuXG5tYXBcbiAgICAuc2V0KGsxLCAxMTEpXG4gICAgLnNldChrMiwgMjIyKTtcblxubWFwLmdldChrMSkgLy8gMTExXG5tYXAuZ2V0KGsyKSAvLyAyMjJcblxuXG4vL+WmguaenE1hcOeahOmUruaYr+S4gOS4queugOWNleexu+Wei+eahOWAvO+8iOaVsOWtl+OAgeWtl+espuS4suOAgeW4g+WwlOWAvO+8ie+8jOWImeWPquimgeS4pOS4quWAvOS4peagvOebuOetie+8jE1hcOWwhuWFtuinhuS4uuS4gOS4qumUru+8jOWMheaLrDDlkowtMOOAglxuLy8g5Y+m5aSW77yM6Jm954S2TmFO5LiN5Lil5qC855u4562J5LqO6Ieq6Lqr77yM5L2GTWFw5bCG5YW26KeG5Li65ZCM5LiA5Liq6ZSu44CCXG5cbmNvbnNvbGUubG9nKGBcbiAgICBNYXDnmoTlrp7kvovlsZ7mgKflkozmk43kvZzmlrnms5VcbiAgICBcbiAgICBzaXpl5bGe5oCnICBzZXQoa2V5LCB2YWx1ZSnmlrnms5UgZ2V0KGtleSnmlrnms5UgaGFzKGtleSnmlrnms5UgZGVsZXRlKGtleSkgY2xlYXIoKeaWueazlVxuYCk7XG5cbmNvbnNvbGUubG9nKGBcbiAgICBNYXDljp/nlJ/mj5DkvpvkuInkuKrpgY3ljoblmajnlJ/miJDlh73mlbDlkozkuIDkuKrpgY3ljobmlrnms5XjgIJcblxuICAgIGtleXMoKe+8mui/lOWbnumUruWQjeeahOmBjeWOhuWZqOOAglxuICAgIHZhbHVlcygp77ya6L+U5Zue6ZSu5YC855qE6YGN5Y6G5Zmo44CCXG4gICAgZW50cmllcygp77ya6L+U5Zue5omA5pyJ5oiQ5ZGY55qE6YGN5Y6G5Zmo44CCXG4gICAgZm9yRWFjaCgp77ya6YGN5Y6GTWFw55qE5omA5pyJ5oiQ5ZGY44CCXG5gKTtcblxuXG52YXIgbWFwID0gbmV3IE1hcChbXG4gICAgWydGJywgJ25vJ10sXG4gICAgWydUJywgICd5ZXMnXSxcbl0pO1xuXG5mb3IgKGxldCBrZXkgb2YgbWFwLmtleXMoKSkge1xuICAgIGNvbnNvbGUubG9nKGtleSk7XG59XG4vLyBcIkZcIlxuLy8gXCJUXCJcblxuZm9yIChsZXQgdmFsdWUgb2YgbWFwLnZhbHVlcygpKSB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xufVxuLy8gXCJub1wiXG4vLyBcInllc1wiXG5cbmZvciAobGV0IGl0ZW0gb2YgbWFwLmVudHJpZXMoKSkge1xuICAgIGNvbnNvbGUubG9nKGl0ZW1bMF0sIGl0ZW1bMV0pO1xufVxuLy8gXCJGXCIgXCJub1wiXG4vLyBcIlRcIiBcInllc1wiXG5cbi8vIOaIluiAhVxuZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIG1hcC5lbnRyaWVzKCkpIHtcbiAgICBjb25zb2xlLmxvZyhrZXksIHZhbHVlKTtcbn1cblxuLy8g562J5ZCM5LqO5L2/55SobWFwLmVudHJpZXMoKVxuZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIG1hcCkge1xuICAgIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpO1xufVxuXG5cbmNvbnNvbGUubG9nKGDkuI7lhbbku5bmlbDnu4Tnu5PmnoTnmoTovazmjaJgKVxuXG4vL01hcOi9rOaIkOaVsOe7hFxuXG5jb25zb2xlLmxvZyhbLi4ubWFwXSk7XG5cbi8v5pWw57uE6L2sTWFwXG52YXIgbWFwID0gbmV3IE1hcChbLi4ubWFwXSk7XG5cblxuLy9NYXDovazlr7nosaFcbi8v5aaC5p6c5omA5pyJ55qETWFw6ZSu6YO95piv5a2X56ym5LiyLCDlroPlj6/ku6XovazkuLrlr7nosaFcblxuZnVuY3Rpb24gc3RyTWFwVG9PYmooc3RyTWFwKSB7XG4gICAgbGV0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgZm9yIChsZXQgW2ssdl0gb2Ygc3RyTWFwKSB7XG4gICAgICAgIG9ialtrXSA9IHY7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmxldCBteU1hcCA9IG5ldyBNYXAoKS5zZXQoJ3llcycsIHRydWUpLnNldCgnbm8nLCBmYWxzZSk7XG5zdHJNYXBUb09iaihteU1hcCk7XG5cbi8v5a+56LGh6L2sTWFwXG5mdW5jdGlvbiBvYmpUb1N0ck1hcChvYmopIHtcbiAgICBsZXQgc3RyTWFwID0gbmV3IE1hcCgpO1xuICAgIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMob2JqKSkge1xuICAgICAgICBzdHJNYXAuc2V0KGssIG9ialtrXSk7XG4gICAgfVxuICAgIHJldHVybiBzdHJNYXA7XG59XG5cbm9ialRvU3RyTWFwKHt5ZXM6IHRydWUsIG5vOiBmYWxzZX0pO1xuXG5cbi8vTWFwIOS4jiBKU09OIOS6kuebuOi9rOWMllxuXG5jb25zb2xlLmxvZyhgXG4gICAgV2Vha01hcCDnnIHnlaVcbmApO1xuIiwiLy9Qcm9taXNlXG4vL+WfuuacrOeUqOazlVxuY29uc29sZS5sb2coYFxuICAgIEVTNuinhOWumi4gUHJvbWlzZeWvueixoeaYr+S4gOS4quaehOmAoOWHveaVsCwg55So5p2l55Sf5oiQUHJvbWlzZeWunuS+i1xuYCk7XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zLCAnZG9uZScpO1xuICAgIH0pO1xufVxuXG50aW1lb3V0KDEwMCkudGhlbigodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG59KTtcblxubGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zb2xlLmxvZygnUHJvbWlzZScpO1xuICAgIHJlc29sdmUoKTtcbn0pO1xuXG5wcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ1Jlc29sdmVkLicpO1xufSk7XG5cbmNvbnNvbGUubG9nKCdIaSEnKTtcblxuLy/mmoLml7bmsqHmnInmg7PliLDlpb3nmoTmtYvor5Xmlrnms5VcblxuLy/mnIDkvbPlhpnms5Vcbi8vIHdpbmRvdy5mZXRjaCgnanNvbi9GRS5qc29uJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbi8vIH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuLy8gICAgIGNvbnNvbGUubG9nKCdwYXJzZWQganNvbicsIGpzb24pXG4vLyAgICAgZHJhd1JhZGFyKGpzb24pO1xuLy8gfSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcbi8vICAgICBjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcbi8vIH0pO1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKHRleHQsIGRvbmUgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgfVxufSIsImltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG9cIjtcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGFkZFRvZG8oKXtcbiAgICAgICAgaWYodGhpcy50b2RvVGV4dCkge1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKG5ldyBUb2RvKHRoaXMudG9kb1RleHQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbWFpbmluZygpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiB7cmV0dXJuIHRvZG8uZG9uZX0pLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhcmNoaXZlKCl7XG4gICAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+IHtyZXR1cm4gIXRvZG8uZG9uZX0pO1xuICAgIH1cblxuICAgIGluaXQgKCl7XG4gICAgICAgIC8vYWRkIHRocmVlIHRvZG9zXG4gICAgICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9kbyhcIkxlYXJuIEVTNlwiKSk7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9kbyhcIkxlYXJuIEFuZ3VsYXJKU1wiKSk7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9kbyhcIkxlYXJuIEVTNiArIEFuZ3VsYXJKU1wiKSk7XG4gICAgfVxufSJdfQ==
