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

},{"./lesson1":2,"./lesson2":3,"./lesson3":4,"./lesson4":5,"./lesson5":6,"./lesson6":7,"./lesson7":8,"./lesson8":9,"./lesson9":10}],2:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvbGVzc29uMS9pbmRleC5qcyIsInNyYy9sZXNzb24yL2luZGV4LmpzIiwic3JjL2xlc3NvbjMvaW5kZXguanMiLCJzcmMvbGVzc29uNC9pbmRleC5qcyIsInNyYy9sZXNzb241L2luZGV4LmpzIiwic3JjL2xlc3NvbjYvaW5kZXguanMiLCJzcmMvbGVzc29uNy9pbmRleC5qcyIsInNyYy9sZXNzb244L2luZGV4LmpzIiwic3JjL2xlc3NvbjkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7QUNSQTs7O0FBR0EsUUFBUSxHQUFSOztBQUtBLFFBQVEsR0FBUjs7QUFRQTtBQUNJLFFBQUksS0FBSSxFQUFKLENBRFI7QUFFSSxRQUFJLElBQUksQ0FBSixDQUZSOzs7O0FBTUEsSUFBSTtBQUNBO0FBREEsS0FFQTtBQUZBLENBQUosQ0FHRSxPQUFPLEtBQVAsRUFBYztBQUNaLFlBQVEsR0FBUixDQUFZLEtBQVosRUFEWTtDQUFkOztBQUlGLFFBQVEsR0FBUjs7QUFhQSxJQUFJO0FBQ0EsWUFBUSxHQUFSLENBQVksR0FBWjtBQURBLFdBRUEsQ0FBUSxHQUFSLENBQVksR0FBWjs7QUFGQSxRQUlJLE1BQU0sQ0FBTixDQUpKO0FBS0EsUUFBSSxNQUFNLENBQU4sQ0FMSjtDQUFKLENBTUUsT0FBTyxLQUFQLEVBQWM7QUFDWixZQUFRLEdBQVIsQ0FBWSxLQUFaO0FBRFksQ0FBZDs7QUFJRixRQUFRLEdBQVI7O0FBTUEsSUFBSTtBQUNBLFFBQUksTUFBTSxHQUFOLENBREo7O0FBR0EsUUFBSSxJQUFKLEVBQVU7QUFDTixlQUFNLEtBQU47QUFETSxZQUVGLGFBQUosQ0FGTTtLQUFWO0NBSEosQ0FPRSxPQUFPLEtBQVAsRUFBYztBQUNaLFlBQVEs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UCxDQUxzQjtDQUExQjs7QUFRQSxZQUFZLEVBQUMsS0FBSyxJQUFMLEVBQVcsSUFBSSxLQUFKLEVBQXhCOzs7O0FBS0EsUUFBUSxHQUFSOzs7Ozs7O0FDdFJBLFFBQVEsR0FBUjs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsRUFBakIsRUFBcUI7QUFDakIsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3BDLG1CQUFXLE9BQVgsRUFBb0IsRUFBcEIsRUFBd0IsTUFBeEIsRUFEb0M7S0FBckIsQ0FBbkIsQ0FEaUI7Q0FBckI7O0FBTUEsUUFBUSxHQUFSLEVBQWEsSUFBYixDQUFrQixVQUFDLEtBQUQsRUFBVztBQUN6QixZQUFRLEdBQVIsQ0FBWSxLQUFaLEVBRHlCO0NBQVgsQ0FBbEI7O0FBSUEsSUFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQVMsT0FBVCxFQUFrQixNQUFsQixFQUEwQjtBQUNoRCxZQUFRLEdBQVIsQ0FBWSxTQUFaLEVBRGdEO0FBRWhELGNBRmdEO0NBQTFCLENBQXRCOztBQUtKLFFBQVEsSUFBUixDQUFhLFlBQVc7QUFDcEIsWUFBUSxHQUFSLENBQVksV0FBWixFQURvQjtDQUFYLENBQWI7O0FBSUEsUUFBUSxHQUFSLENBQVksS0FBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge2xlc3NvbjF9IGZyb20gXCIuL2xlc3NvbjFcIjtcbmltcG9ydCB7bGVzc29uMn0gZnJvbSBcIi4vbGVzc29uMlwiO1xuaW1wb3J0IHtsZXNzb24zfSBmcm9tIFwiLi9sZXNzb24zXCI7XG5pbXBvcnQge2xlc3NvbjR9IGZyb20gXCIuL2xlc3NvbjRcIjtcbmltcG9ydCB7bGVzc29uNX0gZnJvbSBcIi4vbGVzc29uNVwiO1xuaW1wb3J0IHtsZXNzb242fSBmcm9tIFwiLi9sZXNzb242XCI7XG5pbXBvcnQge2xlc3Nvbjd9IGZyb20gXCIuL2xlc3NvbjdcIjtcbmltcG9ydCB7bGVzc29uOH0gZnJvbSBcIi4vbGVzc29uOFwiO1xuaW1wb3J0IHtsZXNzb245fSBmcm9tIFwiLi9sZXNzb245XCI7XG4iLCIndXNlIHN0cmljdCdcbi8vbGV05ZKMY29uc3Tlkb3ku6RcblxuY29uc29sZS5sb2coXG4gICAgYOmYruS4gOWzsCBFQ01BU2NyaXB0NiDlhaXpl6gg5a2m5LmgIFxuICAgICDov5nph4zlj6rliJflh7rpobnnm67kuK3nlKjnmoTop4TliJnlkoznn6Xor4bngrksIOabtOWkmuWGheWuuSwg6Ieq5bex55yL5LmmYFxuKTtcblxuY29uc29sZS5sb2coXG4gICAgYExlc3NvbiAxIExldOWSjGNvbnN05ZG95LukXG5cbkxldFxu5Z+65pys55So5rOVXG4gICAgIEVTNuaWsOWinuS6hmxldOWRveS7pO+8jOeUqOadpeWjsOaYjuWPmOmHj+OAguWug+eahOeUqOazleexu+S8vOS6jnZhcu+8jOS9huaYr+aJgOWjsOaYjueahOWPmOmHj++8jOWPquWcqGxldOWRveS7pOaJgOWcqOeahOS7o+eggeWdl+WGheacieaViGBcbik7XG5cbntcbiAgICBsZXQgYSA9IDEwO1xuICAgIHZhciBiID0gMTtcbn1cblxuLy/kuLrkuobkv53or4Hku6PnoIHmraPluLjov5DooYwsIOWKoOWFpXRyeSBjYXRjaCDkvYbmmK/kvp3nhLblsIbplJnor6/miZPljbDlh7rmnaVcbnRyeSB7XG4gICAgYSAvLyBSZWZlcmVuY2VFcnJvcjogYSBpcyBub3QgZGVmaW5lZC5cbiAgICBiIC8vIDFcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7kuI3lrZjlnKjlj5jph4/mj5DljYdcbiAgICBsZXTkuI3lg492YXLpgqPmoLfkvJrlj5HnlJ/igJzlj5jph4/mj5DljYfigJ3njrDosaHjgILmiYDku6XvvIzlj5jph4/kuIDlrpropoHlnKjlo7DmmI7lkI7kvb/nlKjvvIzlkKbliJnmiqXplJnjgIJcbiAgICBcbiAgICDms6jmhI86IOacieW+hemqjOivgSwg55uu5YmN5Zyo5oiR55qE546v5aKD5LiLLCDmsqHmnInmiqXplJksIOWPquaYr+i/lOWbnnVuZGVmaW5lZCwg5LiOYmFiZWzovazmiJBFUzXmnInlhbMsIFxuICAgIFxuICAgIOWunumZheWcqCBjaHJvbWUg5LiL6L+Q6KGMLCDnu5PmnpzmmK/miJHku6zmnJ/mnJvnmoQuIFxuICAgIFxuICAgIOaJgOS7peWcqOWunumZhea1i+ivleS4rSwg6K+355So5rWP6KeI5ZmoLOebtOaOpei/kOihjCwg5L2G5piv6L+Z5piv5YeG5YiZ5Lmf5piv5Zyo5Lul5ZCO5YaZRVM25omA5bqU6K+l5rOo5oSP55qEXG4gICAgYFxuKTtcblxudHJ5IHtcbiAgICBjb25zb2xlLmxvZyhmb28pOyAvLyDovpPlh7p1bmRlZmluZWRcbiAgICBjb25zb2xlLmxvZyhiYXIpOyAvLyDmiqXplJlSZWZlcmVuY2VFcnJvciDmnInlvoXpqozor4EsIOebruWJjeWcqOaIkeeahOeOr+Wig+S4iywg5rKh5pyJ5oql6ZSZLCDlj6rmmK/ov5Tlm551bmRlZmluZWRcblxuICAgIHZhciBmb28gPSAyO1xuICAgIGxldCBiYXIgPSAyO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8v5bqU6K+l6L6T5Ye6IFJlZmVyZW5jZUVycm9yXG59XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbuaaguaXtuaAp+atu+WMuihURFopXG4gICAg5Y+q6KaB5Z2X57qn5L2c55So5Z+f5YaF5a2Y5ZyobGV05ZG95Luk77yM5a6D5omA5aOw5piO55qE5Y+Y6YeP5bCx4oCc57uR5a6a4oCd77yIYmluZGluZ++8iei/meS4quWMuuWfn++8jOS4jeWGjeWPl+WklumDqOeahOW9seWTjeOAgmBcbik7XG5cbnRyeSB7XG4gICAgdmFyIHRtcCA9IDEyMztcblxuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIHRtcCA9ICdhYmMnOyAvLyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBsZXQgdG1wO1xuICAgIH1cbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpOyAvL+W6lOivpei+k+WHuiBSZWZlcmVuY2VFcnJvclxufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7kuI3lhYHorrjph43lpI3lo7DmmI5cbiAgICBsZXTkuI3lhYHorrjlnKjnm7jlkIzkvZznlKjln5/lhoXvvIzph43lpI3lo7DmmI7lkIzkuIDkuKrlj5jph49gXG4pO1xuXG5cbmZ1bmN0aW9uIEZvbygpIHtcbiAgICBsZXQgYSA9IDEwO1xuICAgIC8vdmFyIGEgPSAxOyAvL+S4uuS6humYsuatouaKpSDph43lpI3lo7DmmI7nmoTplJnor68g5omA5Lul5rOo6YeK5o6JXG59XG5cbmZ1bmN0aW9uIEJhcigpIHtcbiAgICBsZXQgYSA9IDEwO1xuICAgIC8vbGV0IGEgPSAxOyAgLy/kuLrkuobpmLLmraLmiqUg6YeN5aSN5aOw5piO55qE6ZSZ6K+vIOaJgOS7peazqOmHiuaOiVxufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG5jb25zdFxuICAgIGNvbnN05Lmf55So5p2l5aOw5piO5Y+Y6YeP77yM5YW25LuW54m55oCn5ZKMbGV05LiA5qC3LCDkvYbmmK/lo7DmmI7nmoTmmK/luLjph4/jgILkuIDml6blo7DmmI7vvIzluLjph4/nmoTlgLzlsLHkuI3og73mlLnlj5jjgIJgXG4pO1xuXG5jb25zdCBQSSA9IDMuMTQxNTtcblBJIC8vIDMuMTQxNVxuXG4vL1BJID0gMzsgICAvLyBUeXBlRXJyb3I6IFwiUElcIiBpcyByZWFkLW9ubHksIOS4uuS6humYsuatouaKpemUmSwg5omA5Lul5rOo6YeKXG5cbmNvbnNvbGUubG9nKGBcbiAgICBjb25zdOWjsOaYjueahOWPmOmHj+S4jeW+l+aUueWPmOWAvO+8jOi/meaEj+WRs+edgO+8jGNvbnN05LiA5pem5aOw5piO5Y+Y6YeP77yM5bCx5b+F6aG756uL5Y2z5Yid5aeL5YyW77yM5LiN6IO955WZ5Yiw5Lul5ZCO6LWL5YC844CCYFxuKTsiLCIvL+WPmOmHj+eahOino+aehOi1i+WAvFxuY29uc29sZS5sb2coXG4gICAgYExlc3NvbiAyIOWPmOmHj+eahOino+aekOi1i+WAvFxuXG7mlbDnu4TnmoTnu5PmnoTotYvlgLxcbuWfuuacrOeUqOazlVxuICAgIEVTNuWFgeiuuOaMieeFp+S4gOWumuaooeW8j++8jOS7juaVsOe7hOWSjOWvueixoeS4reaPkOWPluWAvO+8jOWvueWPmOmHj+i/m+ihjOi1i+WAvO+8jOi/meiiq+ensOS4uuino+aehGBcbik7XG5cbmxldCBbZm9vLCBbW2Jhcl0sIGJhel1dID0gWzEsIFtbMl0sIDNdXTtcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICAke2Zvb30gLy8gMVxuICAgICAke2Jhcn0gLy8gMlxuICAgICAke2Jhen0gLy8gM2BcbilcblxuXG5cbmxldCBbICwgLCB0aGlyZF0gPSBbXCJmb29cIiwgXCJiYXJcIiwgXCJiYXpcIl07XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke3RoaXJkfSAvL2JhelxuICAgIGBcbik7XG5cbmxldCBbeCwgLCB5XSA9IFsxLCAyLCAzXTtcblxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHt4fSAvLyAxXG4gICAgJHt5fSAvLyAzXG4gICAgYFxuKTtcblxuXG5sZXQgW2hlYWQsIC4uLnRhaWxdID0gWzEsIDIsIDMsIDRdO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHtoZWFkfSAvLyAxXG4gICAgJHt0YWlsfSAvLyBbMiwgMywgNF1cbiAgICBgXG4pO1xuXG5sZXQgW2EsIGIsIC4uLmNdID0gWydhJ107XG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHthfSAvLyBcImFcIlxuICAgICR7Yn0gLy8gdW5kZWZpbmVkXG4gICAgJHtjfSAvLyBbXVxuICAgIGBcbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbum7mOiupOWAvFxuICAgIOino+aehOi1i+WAvOWFgeiuuOaMh+Wumum7mOiupOWAvFxuICAgIGBcbik7XG5cbnZhciBbYm9vbCA9IHRydWVdID0gW107XG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHtib29sfSAvLyB0cnVlXG4gICAgYFxuKVxuXG5sZXQgW2QsIGUgPSAnYiddID0gWydhJ10gLy8gZD0nYScsIGU9J2InXG5sZXQgW2YsIGcgPSAnYiddID0gWydhJywgdW5kZWZpbmVkXSAvLyBmPSdhJywgZz0nYidcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7ZH0gXG4gICAgJHtlfVxuICAgICR7Zn1cbiAgICAke2d9XG4gICAgYFxuKVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAg5rOo5oSP77yMRVM25YaF6YOo5L2/55So5Lil5qC855u4562J6L+Q566X56ym77yIPT0977yJ77yM5Yik5pat5LiA5Liq5L2N572u5piv5ZCm5pyJ5YC844CC5omA5Lul77yM5aaC5p6c5LiA5Liq5pWw57uE5oiQ5ZGY5LiN5Lil5qC8562J5LqOdW5kZWZpbmVk77yM6buY6K6k5YC85piv5LiN5Lya55Sf5pWI55qE44CCXG4gICAgYFxuKTtcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgIOWmguaenOm7mOiupOWAvOaYr+S4gOS4quihqOi+vuW8j++8jOmCo+S5iOi/meS4quihqOi+vuW8j+aYr+aDsOaAp+axguWAvOeahO+8jOWNs+WPquacieWcqOeUqOWIsOeahOaXtuWAme+8jOaJjeS8muaxguWAvOOAgiAgICBcbiAgICBgXG4pXG5cbmZ1bmN0aW9uIGZhYWEoKXtcbiAgICBjb25zb2xlLmxvZygnYWFhJyk7XG59XG5cbmxldCBbZmEgPSBmYWFhKCldID0gWzFdO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAg5LiK6Z2i5Luj56CB5Lit77yM5Zug5Li6ZmHog73lj5bliLDlgLzvvIzmiYDku6Xlh73mlbBmYWFh5qC55pys5LiN5Lya5omn6KGM44CCXG4gICAgYFxuKTtcblxuY29uc29sZS5sb2coXG4gICAgYFxu5a+56LGh55qE6Kej5p6E6LWL5YC8XG4gICAg6Kej5p6E5LiN5LuF5Y+v5Lul55So5LqO5pWw57uE77yM6L+Y5Y+v5Lul55So5LqO5a+56LGh44CCXG4gICAgYFxuKTtcblxudmFyIHsgZm9vMSwgYmFyMSB9ID0geyBmb28xOiBcImFhYVwiLCBiYXIxOiBcImJiYlwiIH07XG5mb28xIC8vIFwiYWFhXCJcbmJhcjEgLy8gXCJiYmJcIlxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHtmb28xfVxuICAgICR7YmFyMX1cbiAgICBcbiAgICDlr7nosaHnmoTop6PmnoTkuI7mlbDnu4TmnInkuIDkuKrph43opoHnmoTkuI3lkIzjgILmlbDnu4TnmoTlhYPntKDmmK/mjInmrKHluo/mjpLliJfnmoTvvIzlj5jph4/nmoTlj5blgLznlLHlroPnmoTkvY3nva7lhrPlrprvvJvogIzlr7nosaHnmoTlsZ7mgKfmsqHmnInmrKHluo/vvIzlj5jph4/lv4XpobvkuI7lsZ7mgKflkIzlkI3vvIzmiY3og73lj5bliLDmraPnoa7nmoTlgLzjgIJcbiAgICBgXG4pO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7lrZfnrKbkuLLkuZ/lj6/ku6Xop6PmnoTotYvlgLzjgIJcbiAgICDov5nmmK/lm6DkuLrmraTml7bvvIzlrZfnrKbkuLLooqvovazmjaLmiJDkuobkuIDkuKrnsbvkvLzmlbDnu4TnmoTlr7nosaHjgIJcbiAgICDnsbvkvLzmlbDnu4TnmoTlr7nosaHpg73mnInkuIDkuKpsZW5ndGjlsZ7mgKfvvIzlm6DmraTov5jlj6/ku6Xlr7nov5nkuKrlsZ7mgKfop6PmnoTotYvlgLzjgIJcbiAgICBgXG4pO1xuXG5jb25zdCBbbCxtLG4sbyxwLHFdID0gJ2hlbGxvJztcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7bH1cbiAgICAke219XG4gICAgJHtufVxuICAgICR7b31cbiAgICAke3B9XG4gICAgJHtxfVxuICAgIGBcbik7XG5cbmxldCB7bGVuZ3RoIDogbGVufSA9ICdoZWxsbyc7XG5cbmNvbnNvbGUubG9nKGxlbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbuaVsOWAvOWSjOW4g+WwlOWAvOeahOino+aehOi1i+WAvFxuICAgIOino+aehOi1i+WAvOaXtu+8jOWmguaenOetieWPt+WPs+i+ueaYr+aVsOWAvOWSjOW4g+WwlOWAvO+8jOWImeS8muWFiOi9rOS4uuWvueixoeOAgmBcbik7XG5cbmxldCB7dG9TdHJpbmc6IG51bX0gPSAxMjM7XG5udW0gPT09IE51bWJlci5wcm90b3R5cGUudG9TdHJpbmcgLy8gdHJ1ZVxuXG5sZXQge3RvU3RyaW5nOiBib299ID0gdHJ1ZTtcbmJvbyA9PT0gQm9vbGVhbi5wcm90b3R5cGUudG9TdHJpbmcgLy8gdHJ1ZVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAg5LiK6Z2i5Luj56CB5Lit77yM5pWw5YC85ZKM5biD5bCU5YC855qE5YyF6KOF5a+56LGh6YO95pyJdG9TdHJpbmflsZ7mgKfvvIzlm6DmraTlj5jph4/pg73og73lj5bliLDlgLzjgIJcbiAgICDop6PmnoTotYvlgLznmoTop4TliJnmmK/vvIzlj6ropoHnrYnlj7flj7PovrnnmoTlgLzkuI3mmK/lr7nosaHvvIzlsLHlhYjlsIblhbbovazkuLrlr7nosaHjgILnlLHkuo51bmRlZmluZWTlkoxudWxs5peg5rOV6L2s5Li65a+56LGh77yM5omA5Lul5a+55a6D5Lus6L+b6KGM6Kej5p6E6LWL5YC877yM6YO95Lya5oql6ZSZ44CCXG4gICAgYFxuKTtcblxuXG5cbiIsIi8v5a2X56ym5Liy55qE5omp5bGV5ZKM5pWw5a2X55qE5omp5bGVXG5jb25zb2xlLmxvZyhcbiAgICBgXG5pbmNsdWRlcygpLCBzdGFydHNXaXRoKCksIGVuZHNXaXRoKClcbiAgICBcbiAgICBpbmNsdWRlcygp77ya6L+U5Zue5biD5bCU5YC877yM6KGo56S65piv5ZCm5om+5Yiw5LqG5Y+C5pWw5a2X56ym5Liy44CCXG4gICAgc3RhcnRzV2l0aCgp77ya6L+U5Zue5biD5bCU5YC877yM6KGo56S65Y+C5pWw5a2X56ym5Liy5piv5ZCm5Zyo5rqQ5a2X56ym5Liy55qE5aS06YOo44CCXG4gICAgZW5kc1dpdGgoKe+8mui/lOWbnuW4g+WwlOWAvO+8jOihqOekuuWPguaVsOWtl+espuS4suaYr+WQpuWcqOa6kOWtl+espuS4sueahOWwvumDqOOAglxuICAgIGBcbik7XG5cbnZhciBzdHIxID0gJ0hlbGxvIHdvcmxkISc7XG5cbnN0cjEuc3RhcnRzV2l0aCgnSGVsbG8nKSAvLyB0cnVlXG5zdHIxLmVuZHNXaXRoKCchJykgLy8gdHJ1ZVxuc3RyMS5pbmNsdWRlcygnbycpIC8vIHRydWVcblxudmFyIHN0cjIgPSAnSGVsbG8gd29ybGQhJztcblxuc3RyMi5zdGFydHNXaXRoKCd3b3JsZCcsIDYpIC8vIHRydWVcbnN0cjIuZW5kc1dpdGgoJ0hlbGxvJywgNSkgLy8gdHJ1ZVxuc3RyMi5pbmNsdWRlcygnSGVsbG8nLCA2KSAvLyBmYWxzZVxuXG4vKipcbiAqIOS4iumdouS7o+eggeihqOekuu+8jOS9v+eUqOesrOS6jOS4quWPguaVsG7ml7bvvIxlbmRzV2l0aOeahOihjOS4uuS4juWFtuS7luS4pOS4quaWueazleacieaJgOS4jeWQjOOAguWug+mSiOWvueWJjW7kuKrlrZfnrKbvvIzogIzlhbbku5bkuKTkuKrmlrnms5Xpkojlr7nku47nrKxu5Liq5L2N572u55u05Yiw5a2X56ym5Liy57uT5p2f44CCXG4gKi9cblxuY29uc29sZS5sb2coYFxuICAgIHJlcGVhdCgpXG4gICAgcmVwZWF05pa55rOV6L+U5Zue5LiA5Liq5paw5a2X56ym5Liy77yM6KGo56S65bCG5Y6f5a2X56ym5Liy6YeN5aSNbuasoeOAglxuYClcblxuXG4neCcucmVwZWF0KDMpIC8vIFwieHh4XCJcbidoZWxsbycucmVwZWF0KDIpIC8vIFwiaGVsbG9oZWxsb1wiXG4nbmEnLnJlcGVhdCgwKSAvL1xuXG4vL+Wtl+espuS4suaooeadv1xuXG4vL+aVsOWtl+eahOaJqeWxlSwg5YW35L2T5aKe5Yqg5LqG5LiA5Lqb5paw5pa55rOVLCDlhbfkvZPor7fnv7vkuabmn6XpmIUiLCIvL+aVsOe7hOeahOaJqeWxlVxuY29uc29sZS5sb2coXG4gICAgYFxuQXJyYXkuZnJvbeaWueazleeUqOS6juWwhuS4pOexu+Wvueixoei9rOS4uuecn+ato+eahOaVsOe7hO+8muexu+S8vOaVsOe7hOeahOWvueixoe+8iGFycmF5LWxpa2Ugb2JqZWN077yJ5ZKM5Y+v6YGN5Y6G77yIaXRlcmFibGXvvInnmoTlr7nosaHvvIjljIXmi6xFUzbmlrDlop7nmoTmlbDmja7nu5PmnoRTZXTlkoxNYXDvvInjgIJcblxu5LiL6Z2i5piv5LiA5Liq57G75Ly85pWw57uE55qE5a+56LGh77yMQXJyYXkuZnJvbeWwhuWug+i9rOS4uuecn+ato+eahOaVsOe7hOOAglxuXG7lhbPkuo4gQXJyYXkuZnJvbSDmm7TlpJrnu4boioIs5Y+v5Lul5Y+C6ICDIOWTpSDnv7vor5HnmoTnrKwxN+eroOesrOS4gOiKgueahOWGheWuuVxuICAgIGBcbik7XG5cbmxldCBhcnJheUxpa2UgPSB7XG4gICAgJzAnOiAnYScsXG4gICAgJzEnOiAnYicsXG4gICAgJzInOiAnYycsXG4gICAgbGVuZ3RoOiAzXG59O1xuXG4vLyBFUzXnmoTlhpnms5VcbnZhciBhcnIxID0gW10uc2xpY2UuY2FsbChhcnJheUxpa2UpOyAvLyBbJ2EnLCAnYicsICdjJ11cbmNvbnNvbGUubG9nKGFycjEpO1xuXG4vLyBFUzbnmoTlhpnms5VcbmxldCBhcnIyID0gQXJyYXkuZnJvbShhcnJheUxpa2UpOyAvLyBbJ2EnLCAnYicsICdjJ11cbmNvbnNvbGUubG9nKGFycjIpO1xuXG5mdW5jdGlvbiBmb28oKSB7XG4gICAgdmFyIGFycjMgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG4gICAgY29uc29sZS5sb2coYXJyMyk7XG59XG5cbmZ1bmN0aW9uIGJhcigpIHtcbiAgICB2YXIgYXJyMyA9IFsgLi4uIGFyZ3VtZW50c107XG4gICAgY29uc29sZS5sb2coYXJyMyk7XG59XG5cbmZvbygxLDIsMyxbNCw1XSk7XG5cbmJhcigxLDIsMyxbNCw1XSk7XG5cbmNvbnNvbGUubG9nKGBcbkFycmF5Lm9mIOaWueazlVxuXG5BcnJheS5vZihpdGVtXzAsIGl0ZW1fMSwgwrfCt8K3KSDlj6/ku6XliJvlu7rkuIDkuKrnlLEgaXRlbV8w44CBaXRlbV8xIOetieWFg+e0oOe7hOaIkOeahOaVsOe7hOOAglxu5piv5byl6KGl5pWw57uE5p6E6YCg5Ye95pWwQXJyYXkoKeeahOS4jei2s1xuYClcblxuY29uc29sZS5sb2coQXJyYXkub2YoMSkpO1xuY29uc29sZS5sb2coQXJyYXkub2YoMSwyKSk7XG5cbi8v5pWw57uE55qE5a6e5L6L5pa55rOVXG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICDmlbDnu4Tlrp7kvovnmoRjb3B5V2l0aGlu5pa55rOV77yM5Zyo5b2T5YmN5pWw57uE5YaF6YOo77yM5bCG5oyH5a6a5L2N572u55qE5oiQ5ZGY5aSN5Yi25Yiw5YW25LuW5L2N572u77yI5Lya6KaG55uW5Y6f5pyJ5oiQ5ZGY77yJ77yM54S25ZCO6L+U5Zue5b2T5YmN5pWw57uE44CC5Lmf5bCx5piv6K+077yM5L2/55So6L+Z5Liq5pa55rOV77yM5Lya5L+u5pS55b2T5YmN5pWw57uE44CCXG4gICAgXG4gICAg5a6D5o6l5Y+X5LiJ5Liq5Y+C5pWwOlxuICAgIHRhcmdldO+8iOW/hemcgO+8ie+8muS7juivpeS9jee9ruW8gOWni+abv+aNouaVsOaNruOAglxuICAgIHN0YXJ077yI5Y+v6YCJ77yJ77ya5LuO6K+l5L2N572u5byA5aeL6K+75Y+W5pWw5o2u77yM6buY6K6k5Li6MOOAguWmguaenOS4uui0n+WAvO+8jOihqOekuuWAkuaVsOOAglxuICAgIGVuZO+8iOWPr+mAie+8ie+8muWIsOivpeS9jee9ruWJjeWBnOatouivu+WPluaVsOaNru+8jOm7mOiupOetieS6juaVsOe7hOmVv+W6puOAguWmguaenOS4uui0n+WAvO+8jOihqOekuuWAkuaVsOOAglxuICAgIGBcbik7XG5cblsxLCAyLCAzLCA0LCA1XS5jb3B5V2l0aGluKDAsIDMsIDQpXG5cbmNvbnNvbGUubG9nKGBcblxuICAgIOaVsOe7hOWunuS+i+eahGZpbmTmlrnms5XvvIznlKjkuo7mib7lh7rnrKzkuIDkuKrnrKblkIjmnaHku7bnmoTmlbDnu4TmiJDlkZjjgILlroPnmoTlj4LmlbDmmK/kuIDkuKrlm57osIPlh73mlbDvvIzmiYDmnInmlbDnu4TmiJDlkZjkvp3mrKHmiafooYzor6Xlm57osIPlh73mlbDvvIxcbiAgICDnm7TliLDmib7lh7rnrKzkuIDkuKrov5Tlm57lgLzkuLp0cnVl55qE5oiQ5ZGY77yM54S25ZCO6L+U5Zue6K+l5oiQ5ZGY44CC5aaC5p6c5rKh5pyJ56ym5ZCI5p2h5Lu255qE5oiQ5ZGY77yM5YiZ6L+U5ZuedW5kZWZpbmVkXG5cbmApO1xuXG5bMSwgNCwgLTUsIDEwXS5maW5kKChuKSA9PiBuIDwgMClcblxuY29uc29sZS5sb2coYFxuICAgIOaVsOe7hOWunuS+i+eahGZpbmRJbmRleOaWueazleeahOeUqOazleS4jmZpbmTmlrnms5XpnZ7luLjnsbvkvLzvvIzov5Tlm57nrKzkuIDkuKrnrKblkIjmnaHku7bnmoTmlbDnu4TmiJDlkZjnmoTkvY3nva7vvIzlpoLmnpzmiYDmnInmiJDlkZjpg73kuI3nrKblkIjmnaHku7bvvIzliJnov5Tlm54tMeOAglxuYCk7XG5cblsxLCA1LCAxMCwgMTVdLmZpbmRJbmRleChmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGFycikge1xuICAgIHJldHVybiB2YWx1ZSA+IDk7XG59KSAvLyAyXG5cbmNvbnNvbGUubG9nKGBcbiAgICBmaWxs5pa55rOV5L2/55So57uZ5a6a5YC877yM5aGr5YWF5LiA5Liq5pWw57uE44CCXG5gKTtcblxuWydhJywgJ2InLCAnYyddLmZpbGwoNylcbi8vIFs3LCA3LCA3XVxuXG5uZXcgQXJyYXkoMykuZmlsbCg3KVxuLy8gWzcsIDcsIDddXG5cbmNvbnNvbGUubG9nKGBcbiAgICBlbnRyaWVzKCnvvIxrZXlzKCnlkox2YWx1ZXMoKeKAlOKAlOeUqOS6jumBjeWOhuaVsOe7hOOAglxuYClcblxuZm9yIChsZXQgaW5kZXggb2YgWydhJywgJ2InXS5rZXlzKCkpIHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG59XG4vLyAwXG4vLyAxXG5cbi8vIGZvciAobGV0IGVsZW0gb2YgWydhJywgJ2InXS52YWx1ZXMoKSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGVsZW0pO1xuLy8gfVxuLy8gJ2EnXG4vLyAnYidcblxuZm9yIChsZXQgW2luZGV4LCBlbGVtXSBvZiBbJ2EnLCAnYiddLmVudHJpZXMoKSkge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCBlbGVtKTtcbn1cbi8vIDAgXCJhXCJcbi8vIDEgXCJiXCIiLCIvL+WHveaVsOeahOaJqeWxlVxuXG5jb25zb2xlLmxvZyhgXG4gICAg5Ye95pWw5Y+C5pWw55qE6buY6K6k5YC8XG5gKVxuXG5mdW5jdGlvbiBQb2ludCh4ID0gMCwgeSA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG59XG5cbnZhciBwID0gbmV3IFBvaW50KCk7XG5cbmZ1bmN0aW9uIGxvZyh4LCB5ID0gJ1dvcmxkJykge1xuICAgIGNvbnNvbGUubG9nKHgsIHkpO1xufVxuXG5sb2coJ0hlbGxvJykgLy8gSGVsbG8gV29ybGRcbmxvZygnSGVsbG8nLCAnQ2hpbmEnKSAvLyBIZWxsbyBDaGluYVxubG9nKCdIZWxsbycsICcnKSAvLyBIZWxsb1xuXG5jb25zb2xlLmxvZyhgXG7kuI7op6PmnoTotYvlgLzpu5jorqTlgLznu5PlkIjkvb/nlKhcbiAgICDlj4LmlbDpu5jorqTlgLzlj6/ku6XkuI7op6PmnoTotYvlgLznmoTpu5jorqTlgLzvvIznu5PlkIjotbfmnaXkvb/nlKjjgIJcbmApO1xuXG5mdW5jdGlvbiBmb28oe3gsIHkgPSA1fSkge1xuICAgIGNvbnNvbGUubG9nKHgsIHkpO1xufVxuXG5mb28oe30pIC8vIHVuZGVmaW5lZCwgNVxuZm9vKHt4OiAxfSkgLy8gMSwgNVxuZm9vKHt4OiAxLCB5OiAyfSkgLy8gMSwgMlxuLy9mb28oKSAvLyBUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnR5ICd4JyBvZiB1bmRlZmluZWRcblxuXG5mdW5jdGlvbiBmZXRjaCh1cmwsIHsgYm9keSA9ICcnLCBtZXRob2QgPSAnR0VUJywgaGVhZGVycyA9IHt9IH0gPSB7fSl7XG4gICAgY29uc29sZS5sb2cobWV0aG9kKTtcbn1cblxuZmV0Y2goJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHt9KVxuLy8gXCJHRVRcIlxuXG5mZXRjaCgnaHR0cDovL2V4YW1wbGUuY29tJylcbi8vIFwiR0VUXCJcblxuY29uc29sZS5sb2coYFxu5Ye95pWw55qEbGVuZ3Ro5bGe5oCnXG4gICAg5oyH5a6a5LqG6buY6K6k5YC85Lul5ZCO77yM5Ye95pWw55qEbGVuZ3Ro5bGe5oCn77yM5bCG6L+U5Zue5rKh5pyJ5oyH5a6a6buY6K6k5YC855qE5Y+C5pWw5Liq5pWw44CC5Lmf5bCx5piv6K+077yM5oyH5a6a5LqG6buY6K6k5YC85ZCO77yMbGVuZ3Ro5bGe5oCn5bCG5aSx55yfXG5gKTtcblxuKGZ1bmN0aW9uKGEpe30pLmxlbmd0aDsgLy8gMVxuKGZ1bmN0aW9uKGEgPSA1KXt9KS5sZW5ndGg7IC8vIDBcbihmdW5jdGlvbihhLCBiLCBjID0gNSl7fSkubGVuZ3RoOyAvLyAyXG5cbmNvbnNvbGUubG9nKGBcbiAgICDliKnnlKjlj4LmlbDpu5jorqTlgLzvvIzlj6/ku6XmjIflrprmn5DkuIDkuKrlj4LmlbDkuI3lvpfnnIHnlaXvvIzlpoLmnpznnIHnlaXlsLHmipvlh7rkuIDkuKrplJnor6/jgIJcbmApO1xuZnVuY3Rpb24gdGhyb3dJZk1pc3NpbmcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHBhcmFtZXRlcicpO1xufVxuXG5mdW5jdGlvbiBmb28obXVzdEJlUHJvdmlkZWQgPSB0aHJvd0lmTWlzc2luZygpKSB7XG4gICAgcmV0dXJuIG11c3RCZVByb3ZpZGVkO1xufVxuXG4vL2ZvbygpXG4vLyBFcnJvcjogTWlzc2luZyBwYXJhbWV0ZXJcblxuY29uc29sZS5sb2coYFxucmVzdOWPguaVsFxuICAgIEVTNuW8leWFpXJlc3Tlj4LmlbDvvIjlvaLlvI/kuLrigJwuLi7lj5jph4/lkI3igJ3vvInvvIznlKjkuo7ojrflj5blh73mlbDnmoTlpJrkvZnlj4LmlbDvvIzov5nmoLflsLHkuI3pnIDopoHkvb/nlKhhcmd1bWVudHPlr7nosaHkuobjgIJyZXN05Y+C5pWw5pCt6YWN55qE5Y+Y6YeP5piv5LiA5Liq5pWw57uE77yM6K+l5Y+Y6YeP5bCG5aSa5L2Z55qE5Y+C5pWw5pS+5YWl5pWw57uE5Lit44CCXG5gKTtcblxuXG5mdW5jdGlvbiBhZGQoLi4udmFsdWVzKSB7XG4gICAgbGV0IHN1bSA9IDA7XG5cbiAgICBmb3IgKHZhciB2YWwgb2YgdmFsdWVzKSB7XG4gICAgICAgIHN1bSArPSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bTtcbn1cblxuYWRkKDIsIDUsIDMpIC8vIDEwXG5cbi8vIGFyZ3VtZW50c+WPmOmHj+eahOWGmeazlVxuLy9jb25zdCBzb3J0TnVtYmVycyA9ICgpID0+XG4vLyAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLnNvcnQoKTtcblxuLy8gcmVzdOWPguaVsOeahOWGmeazlVxuY29uc3Qgc29ydE51bWJlcnMgPSAoLi4ubnVtYmVycykgPT4gbnVtYmVycy5zb3J0KCk7XG5cbi8v5rOo5oSP77yMcmVzdOWPguaVsOS5i+WQjuS4jeiDveWGjeacieWFtuS7luWPguaVsO+8iOWNs+WPquiDveaYr+acgOWQjuS4gOS4quWPguaVsO+8ie+8jOWQpuWImeS8muaKpemUmeOAglxuXG4vLyDmiqXplJlcbi8vIGZ1bmN0aW9uIGYoYSwgLi4uYiwgYykge1xuLy8gICAgIC8vIC4uLlxuLy8gfVxuXG4vL+WHveaVsOeahGxlbmd0aOWxnuaAp++8jOS4jeWMheaLrHJlc3Tlj4LmlbDjgIJcblxuLy8oZnVuY3Rpb24oYSkge30pLmxlbmd0aDsgIC8vIDFcbi8vKGZ1bmN0aW9uKC4uLmEpIHt9KS5sZW5ndGg7ICAvLyAwXG4vLyhmdW5jdGlvbihhLCAuLi5iKSB7fSkubGVuZ3RoOyAgLy8gMVxuXG5cbmNvbnNvbGUubG9nKGBcbuaJqeWxlei/kOeul+esplxuICAgIOaJqeWxlei/kOeul+espu+8iHNwcmVhZO+8ieaYr+S4ieS4queCue+8iC4uLu+8ieOAguWug+WlveavlHJlc3Tlj4LmlbDnmoTpgIbov5DnrpfvvIzlsIbkuIDkuKrmlbDnu4TovazkuLrnlKjpgJflj7fliIbpmpTnmoTlj4LmlbDluo/liJfjgIJcbmApO1xuXG5cbmNvbnNvbGUubG9nKC4uLlsxLCAyLCAzXSk7XG4vLyAxIDIgM1xuXG5jb25zb2xlLmxvZygxLCAuLi5bMiwgMywgNF0sIDUpO1xuLy8gMSAyIDMgNCA1XG5cblxuY29uc29sZS5sb2coYFxuICAgIOaJqeWxlei/kOeul+eahOW6lOeUqFxuICAgIOWQiOW5tuaVsOe7hFxuYCk7XG5cbnZhciBhcnIxID0gWydhJywgJ2InXTtcbnZhciBhcnIyID0gWydjJ107XG52YXIgYXJyMyA9IFsnZCcsICdlJ107XG5cbi8vIEVTNeeahOWQiOW5tuaVsOe7hFxuYXJyMS5jb25jYXQoYXJyMiwgYXJyMyk7XG4vLyBbICdhJywgJ2InLCAnYycsICdkJywgJ2UnIF1cblxuLy8gRVM255qE5ZCI5bm25pWw57uEXG5bLi4uYXJyMSwgLi4uYXJyMiwgLi4uYXJyM107XG5cbmNvbnNvbGUubG9nKGBcbueureWktOWHveaVsFxuXG7nrq3lpLTlh73mlbDmnInlh6DkuKrkvb/nlKjms6jmhI/ngrnjgIJcblxu77yIMe+8ieWHveaVsOS9k+WGheeahHRoaXPlr7nosaHvvIzlsLHmmK/lrprkuYnml7bmiYDlnKjnmoTlr7nosaHvvIzogIzkuI3mmK/kvb/nlKjml7bmiYDlnKjnmoTlr7nosaHjgIJcblxu77yIMu+8ieS4jeWPr+S7peW9k+S9nOaehOmAoOWHveaVsO+8jOS5n+WwseaYr+ivtO+8jOS4jeWPr+S7peS9v+eUqG5ld+WRveS7pO+8jOWQpuWImeS8muaKm+WHuuS4gOS4qumUmeivr+OAglxuXG7vvIgz77yJ5LiN5Y+v5Lul5L2/55SoYXJndW1lbnRz5a+56LGh77yM6K+l5a+56LGh5Zyo5Ye95pWw5L2T5YaF5LiN5a2Y5Zyo44CC5aaC5p6c6KaB55So77yM5Y+v5Lul55SoUmVzdOWPguaVsOS7o+abv+OAglxuXG7vvIg077yJ5LiN5Y+v5Lul5L2/55SoeWllbGTlkb3ku6TvvIzlm6DmraTnrq3lpLTlh73mlbDkuI3og73nlKjkvZxHZW5lcmF0b3Llh73mlbDjgIJcbmApO1xuXG5cbmNvbnN0IG51bWJlcnMgPSAoLi4ubnVtcykgPT4gbnVtcztcblxubnVtYmVycygxLCAyLCAzLCA0LCA1KTtcbiIsIi8v5a+56LGh55qE5omp5bGVXG5jb25zb2xlLmxvZyhgXG7lsZ7mgKfnmoTnroDmtIHooajnpLrms5VcbmApO1xuXG52YXIgZm9vID0gJ2Jhcic7XG52YXIgYmF6ID0ge2Zvb307XG5iYXogLy8ge2ZvbzogXCJiYXJcIn1cblxuLy8g562J5ZCM5LqOXG52YXIgYmF6ID0ge2ZvbzogZm9vfTtcblxuXG5mdW5jdGlvbiBmKHgsIHkpIHtcbiAgICByZXR1cm4ge3gsIHl9O1xufVxuXG4vLyDnrYnlkIzkuo5cblxuZnVuY3Rpb24gZih4LCB5KSB7XG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcbn1cblxuZigxLCAyKSAvLyBPYmplY3Qge3g6IDEsIHk6IDJ9XG5cbnZhciBvID0ge1xuICAgIG1ldGhvZCgpIHtcbiAgICAgICAgcmV0dXJuIFwiSGVsbG8hXCI7XG4gICAgfVxufTtcblxuLy8g562J5ZCM5LqOXG5cbnZhciBvID0ge1xuICAgIG1ldGhvZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIkhlbGxvIVwiO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGdldFBvaW50KCkge1xuICAgIHZhciB4ID0gMTtcbiAgICB2YXIgeSA9IDEwO1xuICAgIHJldHVybiB7eCwgeX07XG59XG5cbmdldFBvaW50KClcbi8vIHt4OjEsIHk6MTB9XG5cbmNvbnNvbGUubG9nKGBcbuWxnuaAp+WQjeeahOihqOi+vuW8j1xuYCk7XG5cbmxldCBwcm9wS2V5ID0gJ2Zvbyc7XG5cbmxldCBvYmogPSB7XG4gICAgW3Byb3BLZXldOiB0cnVlLFxuICAgIFsnYScgKyAnYmMnXTogMTIzXG59O1xuXG52YXIgbGFzdFdvcmQgPSAnbGFzdCB3b3JkJztcblxudmFyIGEgPSB7XG4gICAgJ2ZpcnN0IHdvcmQnOiAnaGVsbG8nLFxuICAgIFtsYXN0V29yZF06ICd3b3JsZCdcbn07XG5cbmFbJ2ZpcnN0IHdvcmQnXSAvLyBcImhlbGxvXCJcbmFbbGFzdFdvcmRdIC8vIFwid29ybGRcIlxuYVsnbGFzdCB3b3JkJ10gLy8gXCJ3b3JsZFwiXG5cbmNvbnNvbGUubG9nKGBcbiAgICDmlrnms5XnmoRuYW1l5bGe5oCnXG5gKTtcblxudmFyIHBlcnNvbiA9IHtcbiAgICBzYXlOYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xuICAgIH0sXG4gICAgZ2V0IGZpcnN0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIFwiTmljaG9sYXNcIlxuICAgIH1cbn1cblxucGVyc29uLnNheU5hbWUubmFtZSAgIC8vIFwic2F5TmFtZVwiXG5wZXJzb24uZmlyc3ROYW1lLm5hbWUgLy8gXCJnZXQgZmlyc3ROYW1lXCJcblxuY29uc29sZS5sb2coYFxuICAgIE9iamVjdC5pcygpXG4gICAgT2JqZWN0Lmlz5bCx5piv6YOo572y6L+Z5Liq566X5rOV55qE5paw5pa55rOV44CC5a6D55So5p2l5q+U6L6D5Lik5Liq5YC85piv5ZCm5Lil5qC855u4562J77yM5LiO5Lil5qC85q+U6L6D6L+Q566X56ym77yIPT0977yJ55qE6KGM5Li65Z+65pys5LiA6Ie044CCXG4gICAg5LiN5ZCM5LmL5aSE5Y+q5pyJ5Lik5Liq77ya5LiA5pivKzDkuI3nrYnkuo4tMO+8jOS6jOaYr05hTuetieS6juiHqui6q1xuYCk7XG5cbiswID09PSAtMCAvL3RydWVcbk5hTiA9PT0gTmFOIC8vIGZhbHNlXG5cbk9iamVjdC5pcygrMCwgLTApIC8vIGZhbHNlXG5PYmplY3QuaXMoTmFOLCBOYU4pIC8vIHRydWVcblxuY29uc29sZS5sb2coYFxuICAgIE9iamVjdC5hc3NpZ24oKVxuICAgIE9iamVjdC5hc3NpZ27mlrnms5XnlKjkuo7lr7nosaHnmoTlkIjlubbvvIzlsIbmupDlr7nosaHvvIhzb3VyY2XvvInnmoTmiYDmnInlj6/mnprkuL7lsZ7mgKfvvIzlpI3liLbliLDnm67moIflr7nosaHvvIh0YXJnZXTvvInjgIJcbmApO1xuXG52YXIgdGFyZ2V0ID0geyBhOiAxIH07XG5cbnZhciBzb3VyY2UxID0geyBiOiAyIH07XG52YXIgc291cmNlMiA9IHsgYzogMyB9O1xuXG5PYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlMSwgc291cmNlMik7XG50YXJnZXQgLy8ge2E6MSwgYjoyLCBjOjN9XG5cbmNvbnNvbGUubG9nKGBcbiAgICBPYmplY3QuYXNzaWdu5pa55rOV55qE55So6YCUXG4gICAgMS7kuLrlr7nosaHmt7vliqDlsZ7mgKdcbiAgICAyLuS4uuWvueixoea3u+WKoOaWueazlVxuICAgIDMu5YWL6ZqG5a+56LGhXG4gICAgNC7lkIjlubblr7nosaFcbiAgICA1LuS4uuWxnuaAp+aMh+Wumum7mOiupOWAvFxuYCk7XG5cbmNsYXNzIFBvaW50IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge3gsIHl9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNvbWVDbGFzcyB7XG5cbn1cblxuT2JqZWN0LmFzc2lnbihTb21lQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgc29tZU1ldGhvZChhcmcxLCBhcmcyKSB7XG4gICAgLy/Ct8K3wrdcbiAgICB9LFxuICAgIGFub3RoZXJNZXRob2QoKSB7XG4gICAgLy/Ct8K3wrdcbiAgICB9XG59KTtcblxuLy8g562J5ZCM5LqO5LiL6Z2i55qE5YaZ5rOVXG5Tb21lQ2xhc3MucHJvdG90eXBlLnNvbWVNZXRob2QgPSBmdW5jdGlvbiAoYXJnMSwgYXJnMikge1xuICAgIC8vwrfCt8K3XG59O1xuU29tZUNsYXNzLnByb3RvdHlwZS5hbm90aGVyTWV0aG9kID0gZnVuY3Rpb24gKCkge1xuICAgIC8vwrfCt8K3XG59O1xuXG5mdW5jdGlvbiBjbG9uZShvcmlnaW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luKTtcbn1cblxuLy8g5LiN6L+H77yM6YeH55So6L+Z56eN5pa55rOV5YWL6ZqG77yM5Y+q6IO95YWL6ZqG5Y6f5aeL5a+56LGh6Ieq6Lqr55qE5YC877yM5LiN6IO95YWL6ZqG5a6D57un5om/55qE5YC844CC5aaC5p6c5oOz6KaB5L+d5oyB57un5om/6ZO+77yM5Y+v5Lul6YeH55So5LiL6Z2i55qE5Luj56CB44CCXG5mdW5jdGlvbiBjbG9uZShvcmlnaW4pIHtcbiAgICBsZXQgb3JpZ2luUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG9yaWdpblByb3RvKSwgb3JpZ2luKTtcbn1cblxuY29uc3QgbWVyZ2UgPVxuICAgICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gICAgbG9nTGV2ZWw6IDAsXG4gICAgb3V0cHV0Rm9ybWF0OiAnaHRtbCdcbn07XG5cbmZ1bmN0aW9uIHByb2Nlc3NDb250ZW50KG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVFMsIG9wdGlvbnMpO1xufSIsIi8vcHJveHkgYW5kIFJlZmxlY3RcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgIFByb3h555So5LqO5L+u5pS55p+Q5Lqb5pON5L2c55qE6buY6K6k6KGM5Li6LOetieWQjOS6juivreiogOWxgumdouWBmuWHuuS/ruaUuSzmiYDku6XlsZ7kuo7kuIDnp41cIuWFg+e8lueoi1wiLCDml6Llr7nnvJbnqIvor63oqIDov5vooYznvJbnqIsuXG4gICAgYFxuKTtcblxudmFyIG9iaiA9IG5ldyBQcm94eSh7fSwge1xuICAgIGdldDogZnVuY3Rpb24odGFyZ2V0LCBrZXksIHJlY2VpdmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBnZXR0aW5nICR7a2V5fWApO1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoLi4uYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlLCByZWNldmllcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgc2V0dGluZyAke2tleX1gKTtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KC4uLmFyZ3VtZW50cyk7XG4gICAgfVxufSk7XG5cbm9iai5uYW1lID0gXCJoYXJyeVwiO1xub2JqLm5hbWU7XG5cbm9iai5jb3VudCA9IDE7XG4rK29iai5jb3VudDtcblxuY29uc29sZS5sb2coYFxuICAgIHByb3h5IOeahOeUqOazlVxuICAgIHZhciBwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xuICAgIFxuICAgIHRhcmdldOWPguaVsOihqOekuuaJgOimgeaLpuaIqueahOebruagh+WvueixoSwgaGFuZGxlcuWPguaVsOS5n+aYr+S4gOS4quWvueixoSwg55So5p2l5a6a5Yi25oum5oiq6KGM5Li6XG5gKTtcblxudmFyIHByb3h5ID0gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0OiBmdW5jdGlvbih0YXJnZXQsIGtleSwgcmVjZXZpZXIpe1xuICAgICAgICByZXR1cm4gMzU7XG4gICAgfVxufSk7XG5cbnByb3h5LnRpbWU7XG5wcm94eS5uYW1lO1xuY29uc29sZS5sb2cocHJveHkudGl0bGUpO1xuXG5jb25zb2xlLmxvZyhgXG4gICAg5aaC5p6cIGhhbmRsZXIg5piv5LiA5Liq56m65a+56LGhLCDmsqHmnInku7vkvZXmi6bmiKrmlYjmnpwsIOiuv+mXrmhhbmRsZXLlsLHnrYnlkIzkuo7orr/pl650YXJnZXRcbmApO1xuXG52YXIgdGFyZ2V0ID0ge307XG52YXIgaGFuZGxlciA9IHt9O1xudmFyIHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XG5wcm94eS5hID0gXCJ0ZXN0XCI7XG5jb25zb2xlLmxvZyh0YXJnZXQuYSk7XG5cbmNvbnNvbGUubG9nKGBcbiAgICDlj6/ku6XlsIZQcm94eeWvueixoSwg6K6+572u5Yiwb2JqZWN0LnByb3h55bGe5oCnLCDku47ogIzlj6/ku6XlnKhvYmplY3Tlr7nosaHkuIrosIPnlKhcbmApO1xuXG52YXIgb2JqZWN0ID0ge3Byb3h5OiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKX07XG5cbmNvbnNvbGUubG9nKGBcbiAgICBwcm94eeWvueixoeS5n+WPr+S7peS9nOS4uuWFtuS7luWvueixoeeahOWOn+Wei+WvueixoVxuYCk7XG5cbnZhciBvYmogPSBPYmplY3QuY3JlYXRlKHByb3h5KTtcblxuY29uc29sZS5sb2coYFxuICAgIOWQjOS4gOS4quaLpuaIquWZqCzlj6/ku6Xorr7nva7lpJrkuKrmi6bmiKrmk43kvZxcbmApO1xuXG52YXIgaGFuZGxlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYoa2V5ID09PSAncHJvdG90eXBlJykgcmV0dXJuIE9iamVjdC5wcm90b3R5cGU7XG4gICAgICAgIHJldHVybiBgSGVsbG8sICR7a2V5fWA7XG4gICAgfSxcbiAgICBhcHBseTogZnVuY3Rpb24odGFyZ2V0LCBjb250ZXh0LCBhcmdzKXtcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfSxcbiAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uICh0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbMV07XG4gICAgfVxufTtcblxudmFyIGZwcm94eSA9IG5ldyBQcm94eShmdW5jdGlvbih4LHkpeyByZXR1cm4geCt5O30sIGhhbmRsZXIpO1xuXG5cbmNvbnNvbGUubG9nKGZwcm94eSgxLDIpKTtcbmNvbnNvbGUubG9nKG5ldyBmcHJveHkoMSwgbmV3IE51bWJlcigyKSkpO1xuY29uc29sZS5sb2coZnByb3h5LmZvbyk7XG5jb25zb2xlLmxvZyhmcHJveHkucHJvdG90eXBlKTtcblxuY29uc29sZS5sb2coYFxucHJveHnlrp7kvovmlrnms5VcbiAgICBnZXTmlrnms5XnlKjkuo7mi6bmiKrmn5DkuKrlsZ7mgKfnmoTor7vlj5bmk43kvZzjgILkuIrmloflt7Lnu4/mnInkuIDkuKrkvovlrZDvvIzkuIvpnaLmmK/lj6bkuIDkuKrmi6bmiKror7vlj5bmk43kvZznmoTkvovlrZBcbmApO1xuXG52YXIgcGVyc29uID0ge1xuICAgIG5hbWU6IFwi5byg5LiJXCJcbn07XG5cbnZhciBwcm94eSA9IG5ldyBQcm94eShwZXJzb24sIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJQcm9wZXJ0eSBcXFwiXCIgKyBwcm9wZXJ0eSArIFwiXFxcIiBkb2VzIG5vdCBleGlzdC5cIik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxucHJveHkubmFtZSAvLyBcIuW8oOS4iVwiXG4vL3Byb3h5LmFnZSAvLyDmipvlh7rkuIDkuKrplJnor69cblxubGV0IHByb3RvID0gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcGVydHlLZXksIHJlY2VpdmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHRVQgJytwcm9wZXJ0eUtleSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICAgIH1cbn0pO1xuXG52YXIgb2JqID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG5vYmoueHh4IC8vIFwiR0VUIHh4eFwiXG5cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5KC4uLmVsZW1lbnRzKSB7XG4gICAgbGV0IGhhbmRsZXIgPSB7XG4gICAgICAgIGdldCh0YXJnZXQsIHByb3BLZXksIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIocHJvcEtleSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgcHJvcEtleSA9IFN0cmluZyh0YXJnZXQubGVuZ3RoICsgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcEtleSwgcmVjZWl2ZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxldCB0YXJnZXQgPSBbXTtcbiAgICB0YXJnZXQucHVzaCguLi5lbGVtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xufVxuXG5sZXQgYXJyID0gY3JlYXRlQXJyYXkoJ2EnLCAnYicsICdjJyk7XG5jb25zb2xlLmxvZyhhcnJbLTFdKTsgLy8gY1xuXG52YXIgcGlwZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBpcGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBwaXBlID0gW107XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoe30sIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHBpcGVPYmplY3QsIGZuTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChmbk5hbWUgPT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGlwZS5yZWR1Y2UoZnVuY3Rpb24gKHZhbCwgZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmbih2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBpcGUucHVzaCh3aW5kb3dbZm5OYW1lXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcGVPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0oKSk7XG5cbnZhciBkb3VibGUgPSBuID0+IG4gKiAyO1xudmFyIHBvdyA9IG4gPT4gbiAqIG47XG52YXIgcmV2ZXJzZUludCA9IG4gPT4gbi50b1N0cmluZygpLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykgfCAwO1xuXG4vL3BpcGUoMykuZG91YmxlLnBvdy5yZXZlcnNlSW50LmdldFxuLy8gNjM7IGl0IGNhbiBub3Qgd29yayBvbiBiYWJlbDsgY2hyb21lIGlzIGdvb2RcblxuLy8gY29uc3QgZG9tID0gbmV3IFByb3h5KHt9LCB7XG4vLyAgICAgZ2V0KHRhcmdldCwgcHJvcGVydHkpIHtcbi8vICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGF0dHJzID0ge30sIC4uLmNoaWxkcmVuKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocHJvcGVydHkpO1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBPYmplY3Qua2V5cyhhdHRycykpIHtcbi8vICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cnNbcHJvcF0pO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbi8vICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuLy8gICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIGVsO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSk7XG4vL1xuLy8gY29uc3QgZWwgPSBkb20uZGl2KHt9LFxuLy8gICAgICdIZWxsbywgbXkgbmFtZSBpcyAnLFxuLy8gICAgIGRvbS5hKHtocmVmOiAnLy9leGFtcGxlLmNvbSd9LCAnTWFyaycpLFxuLy8gICAgICcuIEkgbGlrZTonLFxuLy8gICAgIGRvbS51bCh7fSxcbi8vICAgICAgICAgZG9tLmxpKHt9LCAnVGhlIHdlYicpLFxuLy8gICAgICAgICBkb20ubGkoe30sICdGb29kJyksXG4vLyAgICAgICAgIGRvbS5saSh7fSwgJ+KApmFjdHVhbGx5IHRoYXRcXCdzIGl0Jylcbi8vICAgICApXG4vLyApO1xuLy9cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuXG4vLyBTbyBmYXIgaXQgaXMgbm90IHdvcmsgb24gYmFiZWwsIGJ1dCBjaHJvbWUgaXMgZ29vZFxuXG5cbmNvbnNvbGUubG9nKGBcbiAgICBzZXQg5pa55rOV55So5p2l5oum5oiq5p+Q5Liq5bGe5oCn55qE6LWL5YC85pON5L2cXG5gKTtcbi8vXG4vLyBsZXQgdmFsaWRhdG9yID0ge1xuLy8gICAgIHNldDogZnVuY3Rpb24ob2JqLCBwcm9wLCB2YWx1ZSkge1xuLy8gICAgICAgICBpZiAocHJvcCA9PT0gJ2FnZScpIHtcbi8vICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcbi8vICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgYWdlIGlzIG5vdCBhbiBpbnRlZ2VyJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBpZiAodmFsdWUgPiAyMDApIHtcbi8vICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIGFnZSBzZWVtcyBpbnZhbGlkJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIC8vIOWvueS6jmFnZeS7peWklueahOWxnuaAp++8jOebtOaOpeS/neWtmFxuLy8gICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcbi8vICAgICB9XG4vLyB9O1xuLy9cbi8vIHZhciBwZXJzb24gPSBuZXcgUHJveHkoe30sIHZhbGlkYXRvcik7XG4vL1xuLy8gcGVyc29uLmFnZSA9IDEwMDtcbi8vXG4vLyBwZXJzb24uYWdlIC8vIDEwMFxuLy8gcGVyc29uLmFnZSA9ICd5b3VuZycgLy8g5oql6ZSZXG4vLyBwZXJzb24uYWdlID0gMzAwIC8vIOaKpemUmVxuXG4vLyBiYWJlbCDlr7kgUHJveHkg55qE5pSv5oyB55qE5LiN5piv5b6I5aW9XG5cblxudmFyIGhhbmRsZXIgPSB7XG4gICAgZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgICBpbnZhcmlhbnQoa2V5LCAnZ2V0Jyk7XG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICB9LFxuICAgIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGludmFyaWFudChrZXksICdzZXQnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuZnVuY3Rpb24gaW52YXJpYW50IChrZXksIGFjdGlvbikge1xuICAgIGlmIChrZXlbMF0gPT09ICdfJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYXR0ZW1wdCB0byAke2FjdGlvbn0gcHJpdmF0ZSBcIiR7a2V5fVwiIHByb3BlcnR5YCk7XG4gICAgfVxufVxudmFyIHRhcmdldCA9IHt9O1xudmFyIHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XG4vL3Byb3h5Ll9wcm9wXG4vLyBFcnJvcjogSW52YWxpZCBhdHRlbXB0IHRvIGdldCBwcml2YXRlIFwiX3Byb3BcIiBwcm9wZXJ0eVxuLy9wcm94eS5fcHJvcCA9ICdjJ1xuLy8gRXJyb3I6IEludmFsaWQgYXR0ZW1wdCB0byBzZXQgcHJpdmF0ZSBcIl9wcm9wXCIgcHJvcGVydHlcblxuLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1MDI1MjA0L2phdmFzY3JpcHQtcHJveHktc3VwcG9ydC1pbi1iYWJlbFxuLy9wcm94eSBzdXBwb3J0IGRlcGVuZCBvbiBicm93c2VyXG5cbmNvbnNvbGUubG9nKGBcbiAgICBhcHBseeaWueazleaLpuaIquWHveaVsOeahOiwg+eUqCwgY2FsbCDlkowgYXBwbHkg5pON5L2cXG5gKTtcblxuLy8gdmFyIHRhcmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdJIGFtIHRoZSB0YXJnZXQnOyB9O1xuLy8gdmFyIGhhbmRsZXIgPSB7XG4vLyAgICAgYXBwbHk6IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgcmV0dXJuICdJIGFtIHRoZSBwcm94eSc7XG4vLyAgICAgfVxuLy8gfTtcbi8vXG4vLyB2YXIgcCA9IG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xuLy9cbi8vIHAoKTtcblxudmFyIHR3aWNlID0ge1xuICAgIGFwcGx5ICh0YXJnZXQsIGN0eCwgYXJncykge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5hcHBseSguLi5hcmd1bWVudHMpICogMjtcbiAgICB9XG59O1xuZnVuY3Rpb24gc3VtIChsZWZ0LCByaWdodCkge1xuICAgIHJldHVybiBsZWZ0ICsgcmlnaHQ7XG59O1xudmFyIHByb3h5ID0gbmV3IFByb3h5KHN1bSwgdHdpY2UpO1xucHJveHkoMSwgMikgLy8gNlxucHJveHkuY2FsbChudWxsLCA1LCA2KSAvLyAyMlxucHJveHkuYXBwbHkobnVsbCwgWzcsIDhdKSAvLyAzMFxuXG5jb25zb2xlLmxvZyhgXG4gICAgaGFz5pa55rOV5Y+v5Lul6ZqQ6JeP5p+Q5Lqb5bGe5oCnLCDkuI3ooqtpbuaTjeS9nOespuWPkeeOsC5cbmApO1xuXG52YXIgaGFuZGxlciA9IHtcbiAgICBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICAgIGlmIChrZXlbMF0gPT09ICdfJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXkgaW4gdGFyZ2V0O1xuICAgIH1cbn07XG52YXIgdGFyZ2V0ID0geyBfcHJvcDogJ2ZvbycsIHByb3A6ICdmb28nIH07XG52YXIgcHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbidfcHJvcCcgaW4gcHJveHkgLy8gZmFsc2VcblxuY29uc29sZS5sb2coYFxuICAgIOWmguaenOWOn+WvueixoeS4jeWPr+mFjee9ruaIluiAheemgeatouaJqeWxle+8jOi/meaXtmhhc+aLpuaIquS8muaKpemUmeOAglxuYCk7XG4vL1xuLy8gdmFyIG9iaiA9IHsgYTogMTAgfTtcbi8vIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhvYmopO1xuLy8gdmFyIHAgPSBuZXcgUHJveHkob2JqLCB7XG4vLyAgICAgaGFzOiBmdW5jdGlvbih0YXJnZXQsIHByb3ApIHtcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH1cbi8vIH0pO1xuLy9cbi8vIFwiYVwiIGluIHA7IC8vIFR5cGVFcnJvciBpcyB0aHJvd25cblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgIGNvbnN0cnVjdCDnlKjkuo7mi6bmiKpuZXflkb3ku6RcbiAgICBgXG4pO1xuXG52YXIgcCA9IG5ldyBQcm94eShmdW5jdGlvbigpIHt9LCB7XG4gICAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbGxlZDogJyArIGFyZ3Muam9pbignLCAnKSk7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBhcmdzWzBdICogMTAgfTtcbiAgICB9XG59KTtcblxubmV3IHAoMSkudmFsdWVcbi8vIFwiY2FsbGVkOiAxXCJcbi8vIDEwXG5cbi8v5aaC5p6cIGNvbnN0cnVjdCDov5Tlm57nmoTkuI3mmK/lr7nosaEsIOWwhuS8muaKpemUmVxudmFyIHAgPSBuZXcgUHJveHkoZnVuY3Rpb24oKSB7fSwge1xuICAgIGNvbnN0cnVjdDogZnVuY3Rpb24odGFyZ2V0LCBhcmd1bWVudHNMaXN0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbn0pO1xuXG4vL25ldyBwKCkgLy8g5oql6ZSZXG5cbmNvbnNvbGUubG9nKGBcbiAgICBQcm94eS5yZXZvY2FibGXmlrnms5Xov5Tlm57kuIDkuKrlj6/lj5bmtojnmoRQcm94eeWunuS+i+OAglxuYCk7XG5cbnZhciB0YXJnZXQgPSB7fTtcbnZhciBoYW5kbGVyID0ge307XG5cbnZhciB7cHJveHksIHJldm9rZX0gPSBQcm94eS5yZXZvY2FibGUodGFyZ2V0LCBoYW5kbGVyKTtcblxucHJveHkuZm9vID0gMTIzO1xucHJveHkuZm9vIC8vIDEyM1xuXG5yZXZva2UoKTtcbi8vcHJveHkuZm9vIC8vIFR5cGVFcnJvcjogUmV2b2tlZFxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgUmVmbGVjdFxuICAgIGBcbik7XG5cblxuLy8gUmVmbGVjdOWvueixoeeahOaWueazlea4heWNleWmguS4i++8jOWFsTE05Liq44CCXG4vL1xuLy8gUmVmbGVjdC5hcHBseSh0YXJnZXQsdGhpc0FyZyxhcmdzKVxuLy8gUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LGFyZ3MpXG4vLyBSZWZsZWN0LmdldCh0YXJnZXQsbmFtZSxyZWNlaXZlcilcbi8vIFJlZmxlY3Quc2V0KHRhcmdldCxuYW1lLHZhbHVlLHJlY2VpdmVyKVxuLy8gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsbmFtZSxkZXNjKVxuLy8gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsbmFtZSlcbi8vIFJlZmxlY3QuaGFzKHRhcmdldCxuYW1lKVxuLy8gUmVmbGVjdC5vd25LZXlzKHRhcmdldClcbi8vIFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcbi8vIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcbi8vIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxuLy8gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKVxuLy8gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpXG4vLyBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG90eXBlKVxuXG4iLCIvL3NldCDlkowgbWFwXG5jb25zb2xlLmxvZyhgXG4gICAgU2V0XG4gICAgU2V05pys6Lqr5piv5LiA5Liq5p6E6YCg5Ye95pWwLCDnlKjmnaXnlJ/miJBTZXTnmoTmlbDmja7nu5PmnoRcbmApO1xuXG52YXIgcyA9IG5ldyBTZXQoKTtcblsyLDMsNCw1LDZdLm1hcCh4ID0+IHMuYWRkKHgpKTtcblxuZm9yKGxldCBpIG9mIHMpIHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbn1cblxuY29uc29sZS5sb2coYFxuICAgIFNldCDlh73mlbDlj6/ku6XmjqXlj5fkuIDkuKrmlbDnu4Qo5oiW57G75Ly85pWw57uE5a+56LGhKeS9nOS4uuWPguaVsCwg55So5p2l5Yid5aeL5YyWXG5gKTtcblxudmFyIHNldCA9IG5ldyBTZXQoWzEsMiwzLDQsNV0pO1xuWy4uLnNldF07XG5cbnZhciBpdGVtcyA9IG5ldyBTZXQoWzEsMiwzXSk7XG5pdGVtcy5zaXplO1xuXG5mdW5jdGlvbiBkaXZzKCkge1xuICAgIHJldHVybiBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpXTtcbn1cblxudmFyIHNldCA9IG5ldyBTZXQoZGl2cygpKTtcbnNldC5zaXplO1xuXG5kaXZzKCkuZm9yRWFjaChkaXYgPT4gc2V0LmFkZChkaXYpKTtcbnNldC5zaXplO1xuXG5jb25zb2xlLmxvZyhgXG4gICAg5b6Ac2V05Yqg5YWl5YC85b6X5pe25YCZLCDkuI3kvJrlj5HnlJ/nsbvlnovovazmjaIsIOaJgOS7pSA1IOWSjCBcIjVcIiDmmK/kuKTkuKrkuI3lkIznmoTlgLwuIHNldCDlhoXpg6jliKTlrprkuKTkuKrlgLzmmK/lkKbnm7jnrYlcbiAgICDkvb/nlKjnmoTmmK8gPT09IOS4u+imgeWMuuWIq+aYryBOYU4g562J5LqO6Ieq6LqrLCDogIznsr7noa7nm7jnrYnov5DnrpfnrKborqTkuLogTmFOIOS4jeetieS6juiHqui6q1xuICAgIOS4jiBPYmplY3QuaXMg5LiN5ZCMXG5gKTtcblxuY29uc29sZS5sb2coYFxuICAgIFNldOeahOWunuS+i+WxnuaAp+WSjOaWueazlVxuICAgIC0gU2V0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcjog5p6E6YCg5Ye95pWwLCDpu5jorqTlsLHmmK9TZXTlh73mlbBcbiAgICAtIFNldC5wcm90b3R5cGUuc2l6ZTog6L+U5ZueU2V05a6e5L6L55qE5oiQ5ZGY5oC75pWwXG5gKTtcblxuLy9TZXTlrp7kvovnmoTmlrnms5XliIbkuLrkuKTnsbs6IOaTjeS9nOaWueazleWSjOmBjeWOhuaWueazlVxuLy9hZGQoKSBkZWxldGUoKSBoYXMoKSBjbGVhcigpXG5cbnZhciBzZXQgPSBuZXcgU2V0KCk7XG5cbnNldC5hZGQoMSkuYWRkKDIpLmFkZCgzKTtcblxuY29uc29sZS5sb2coc2V0LnNpemUpO1xuXG5jb25zb2xlLmxvZyhzZXQuaGFzKDIpKTtcbmNvbnNvbGUubG9nKHNldC5oYXMoMSkpO1xuXG5cbmNvbnNvbGUubG9nKHNldC5kZWxldGUoMSkpO1xuY29uc29sZS5sb2coc2V0LmhhcygxKSk7XG5cblxuXG4vL+aVsOe7hOWOu+mHjVxuZnVuY3Rpb24gZGVkdXBlKGFycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xufVxuXG5jb25zb2xlLmxvZyguLi5kZWR1cGUoWzEsMSwyLDNdKSkgLy8gMSAyIDNcblxuXG4vL+mBjeWOhuaTjeS9nFxuXG4vL1NldOeahOe7k+aehOeahOWbm+enjemBjeWOhuaTjeS9nFxuXG52YXIgc2V0ID0gbmV3IFNldChbJ3JlZCcsICdncmVlbicsICdibHVlJ10pO1xuXG5mb3IgKCBsZXQgaXRlbSBvZiBzZXQua2V5cygpICl7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG59XG4vLyByZWRcbi8vIGdyZWVuXG4vLyBibHVlXG5cbmZvciAoIGxldCBpdGVtIG9mIHNldC52YWx1ZXMoKSApe1xuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xufVxuLy8gcmVkXG4vLyBncmVlblxuLy8gYmx1ZVxuXG5mb3IgKCBsZXQgaXRlbSBvZiBzZXQuZW50cmllcygpICl7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG59XG4vLyBbXCJyZWRcIiwgXCJyZWRcIl1cbi8vIFtcImdyZWVuXCIsIFwiZ3JlZW5cIl1cbi8vIFtcImJsdWVcIiwgXCJibHVlXCJdXG5cbmZvciAobGV0IHggb2Ygc2V0KSB7XG4gICAgY29uc29sZS5sb2coeCk7XG59XG5cbmxldCBhcnIgPSBbLi4uc2V0XTtcbmNvbnNvbGUubG9nKGFycik7XG5cbi8v5pWw57uE5Y676YeNXG5sZXQgYXJyMSA9IFszLCA1LCAyLCAyLCA1LCA1XTtcbmxldCB1bmlxdWUgPSBbLi4ubmV3IFNldChhcnIxKV07XG5jb25zb2xlLmxvZyh1bmlxdWUpO1xuXG5sZXQgc2V0MiA9IG5ldyBTZXQoWzEsIDIsIDNdKTtcbnNldDIgPSBuZXcgU2V0KFsuLi5zZXQyXS5tYXAoeCA9PiB4ICogMikpO1xuLy8g6L+U5ZueU2V057uT5p6E77yaezIsIDQsIDZ9XG5cbmxldCBzZXQzID0gbmV3IFNldChbMSwgMiwgMywgNCwgNV0pO1xuc2V0MyA9IG5ldyBTZXQoWy4uLnNldDNdLmZpbHRlcih4ID0+ICh4ICUgMikgPT0gMCkpO1xuLy8g6L+U5ZueU2V057uT5p6E77yaezIsIDR9XG5cbmxldCBhID0gbmV3IFNldChbMSwgMiwgM10pO1xubGV0IGIgPSBuZXcgU2V0KFs0LCAzLCAyXSk7XG5cbi8vIOW5tumbhlxubGV0IHVuaW9uID0gbmV3IFNldChbLi4uYSwgLi4uYl0pO1xuLy8gWzEsIDIsIDMsIDRdXG5cbi8vIOS6pOmbhlxubGV0IGludGVyc2VjdCA9IG5ldyBTZXQoWy4uLmFdLmZpbHRlcih4ID0+IGIuaGFzKHgpKSk7XG4vLyBbMiwgM11cblxuLy8g5beu6ZuGXG5sZXQgZGlmZmVyZW5jZSA9IG5ldyBTZXQoWy4uLmFdLmZpbHRlcih4ID0+ICFiLmhhcyh4KSkpO1xuXG5cbmNvbnNvbGUubG9nKGBcbiAgICBXZWFrU2V0IOecgeeVpVxuYCk7XG5cbmNvbnNvbGUubG9nKGBcbiAgICBNYXAgXG4gICAgRVM25o+Q5L6b5LqGTWFw5pWw5o2u57uT5p6E44CC5a6D57G75Ly85LqO5a+56LGh77yM5Lmf5piv6ZSu5YC85a+555qE6ZuG5ZCI77yM5L2G5piv4oCc6ZSu4oCd55qE6IyD5Zu05LiN6ZmQ5LqO5a2X56ym5Liy77yM5ZCE56eN57G75Z6L55qE5YC877yI5YyF5ous5a+56LGh77yJ6YO95Y+v5Lul5b2T5L2c6ZSu44CCXG4gICAg5Lmf5bCx5piv6K+077yMT2JqZWN057uT5p6E5o+Q5L6b5LqG4oCc5a2X56ym5Liy4oCU5YC84oCd55qE5a+55bqU77yMTWFw57uT5p6E5o+Q5L6b5LqG4oCc5YC84oCU5YC84oCd55qE5a+55bqU77yM5piv5LiA56eN5pu05a6M5ZaE55qESGFzaOe7k+aehOWunueOsOOAguWmguaenOS9oOmcgOimgeKAnOmUruWAvOWvueKAneeahOaVsOaNrue7k+aehO+8jE1hcOavlE9iamVjdOabtOWQiOmAguOAglxuYCk7XG5cblxudmFyIG0gPSBuZXcgTWFwKCk7XG52YXIgbyA9IHtwOiBcIkhlbGxvIFdvcmxkXCJ9O1xuXG5tLnNldChvLCBcImNvbnRlbnRcIilcbm0uZ2V0KG8pIC8vIFwiY29udGVudFwiXG5cbm0uaGFzKG8pIC8vIHRydWVcbm0uZGVsZXRlKG8pIC8vIHRydWVcbm0uaGFzKG8pIC8vIGZhbHNlXG5cbmNvbnNvbGUubG9nKGBcbiAgICDkvZzkuLrmnoTpgKDlh73mlbAgTWFw5Lmf5Y+v5Lul5o6l5Y+X5LiA5Liq5pWw57uE5L2c5Li65Y+C5pWwLCDnhLblkI4gZ2V0IOaWueazleivu+WPlui/meS4qumUriwg5o6l552A5L2/55SoZGV0ZWN05pa55rOV5Yig6Zmk6L+Z5Liq6ZSuXG5gKVxuXG5cbnZhciBtYXAgPSBuZXcgTWFwKFtbXCJuYW1lXCIsIFwi5byg5LiJXCJdLCBbXCJ0aXRsZVwiLCBcIkF1dGhvclwiXV0pO1xuXG5tYXAuc2l6ZSAvLyAyXG5tYXAuaGFzKFwibmFtZVwiKSAvLyB0cnVlXG5tYXAuZ2V0KFwibmFtZVwiKSAvLyBcIuW8oOS4iVwiXG5tYXAuaGFzKFwidGl0bGVcIikgLy8gdHJ1ZVxubWFwLmdldChcInRpdGxlXCIpIC8vIFwiQXV0aG9yXCJcblxuLy/ms6jmhI/vvIzlj6rmnInlr7nlkIzkuIDkuKrlr7nosaHnmoTlvJXnlKjvvIxNYXDnu5PmnoTmiY3lsIblhbbop4bkuLrlkIzkuIDkuKrplK7jgILov5nkuIDngrnopoHpnZ7luLjlsI/lv4PjgIJcblxudmFyIG1hcCA9IG5ldyBNYXAoKTtcblxubWFwLnNldChbJ2EnXSwgNTU1KTtcbmNvbnNvbGUubG9nKG1hcC5nZXQoWydhJ10pKSAvLyB1bmRlZmluZWRcblxuLy/lkIznkIbvvIzlkIzmoLfnmoTlgLznmoTkuKTkuKrlrp7kvovvvIzlnKhNYXDnu5PmnoTkuK3ooqvop4bkuLrkuKTkuKrplK7jgIJcblxudmFyIG1hcCA9IG5ldyBNYXAoKTtcblxudmFyIGsxID0gWydhJ107XG52YXIgazIgPSBbJ2EnXTtcblxubWFwXG4gICAgLnNldChrMSwgMTExKVxuICAgIC5zZXQoazIsIDIyMik7XG5cbm1hcC5nZXQoazEpIC8vIDExMVxubWFwLmdldChrMikgLy8gMjIyXG5cblxuLy/lpoLmnpxNYXDnmoTplK7mmK/kuIDkuKrnroDljZXnsbvlnovnmoTlgLzvvIjmlbDlrZfjgIHlrZfnrKbkuLLjgIHluIPlsJTlgLzvvInvvIzliJnlj6ropoHkuKTkuKrlgLzkuKXmoLznm7jnrYnvvIxNYXDlsIblhbbop4bkuLrkuIDkuKrplK7vvIzljIXmi6ww5ZKMLTDjgIJcbi8vIOWPpuWklu+8jOiZveeEtk5hTuS4jeS4peagvOebuOetieS6juiHqui6q++8jOS9hk1hcOWwhuWFtuinhuS4uuWQjOS4gOS4qumUruOAglxuXG5jb25zb2xlLmxvZyhgXG4gICAgTWFw55qE5a6e5L6L5bGe5oCn5ZKM5pON5L2c5pa55rOVXG4gICAgXG4gICAgc2l6ZeWxnuaApyAgc2V0KGtleSwgdmFsdWUp5pa55rOVIGdldChrZXkp5pa55rOVIGhhcyhrZXkp5pa55rOVIGRlbGV0ZShrZXkpIGNsZWFyKCnmlrnms5VcbmApO1xuXG5jb25zb2xlLmxvZyhgXG4gICAgTWFw5Y6f55Sf5o+Q5L6b5LiJ5Liq6YGN5Y6G5Zmo55Sf5oiQ5Ye95pWw5ZKM5LiA5Liq6YGN5Y6G5pa55rOV44CCXG5cbiAgICBrZXlzKCnvvJrov5Tlm57plK7lkI3nmoTpgY3ljoblmajjgIJcbiAgICB2YWx1ZXMoKe+8mui/lOWbnumUruWAvOeahOmBjeWOhuWZqOOAglxuICAgIGVudHJpZXMoKe+8mui/lOWbnuaJgOacieaIkOWRmOeahOmBjeWOhuWZqOOAglxuICAgIGZvckVhY2goKe+8mumBjeWOhk1hcOeahOaJgOacieaIkOWRmOOAglxuYCk7XG5cblxudmFyIG1hcCA9IG5ldyBNYXAoW1xuICAgIFsnRicsICdubyddLFxuICAgIFsnVCcsICAneWVzJ10sXG5dKTtcblxuZm9yIChsZXQga2V5IG9mIG1hcC5rZXlzKCkpIHtcbiAgICBjb25zb2xlLmxvZyhrZXkpO1xufVxuLy8gXCJGXCJcbi8vIFwiVFwiXG5cbmZvciAobGV0IHZhbHVlIG9mIG1hcC52YWx1ZXMoKSkge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbn1cbi8vIFwibm9cIlxuLy8gXCJ5ZXNcIlxuXG5mb3IgKGxldCBpdGVtIG9mIG1hcC5lbnRyaWVzKCkpIHtcbiAgICBjb25zb2xlLmxvZyhpdGVtWzBdLCBpdGVtWzFdKTtcbn1cbi8vIFwiRlwiIFwibm9cIlxuLy8gXCJUXCIgXCJ5ZXNcIlxuXG4vLyDmiJbogIVcbmZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBtYXAuZW50cmllcygpKSB7XG4gICAgY29uc29sZS5sb2coa2V5LCB2YWx1ZSk7XG59XG5cbi8vIOetieWQjOS6juS9v+eUqG1hcC5lbnRyaWVzKClcbmZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBtYXApIHtcbiAgICBjb25zb2xlLmxvZyhrZXksIHZhbHVlKTtcbn1cblxuXG5jb25zb2xlLmxvZyhg5LiO5YW25LuW5pWw57uE57uT5p6E55qE6L2s5o2iYClcblxuLy9NYXDovazmiJDmlbDnu4RcblxuY29uc29sZS5sb2coWy4uLm1hcF0pO1xuXG4vL+aVsOe7hOi9rE1hcFxudmFyIG1hcCA9IG5ldyBNYXAoWy4uLm1hcF0pO1xuXG5cbi8vTWFw6L2s5a+56LGhXG4vL+WmguaenOaJgOacieeahE1hcOmUrumDveaYr+Wtl+espuS4siwg5a6D5Y+v5Lul6L2s5Li65a+56LGhXG5cbmZ1bmN0aW9uIHN0ck1hcFRvT2JqKHN0ck1hcCkge1xuICAgIGxldCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGZvciAobGV0IFtrLHZdIG9mIHN0ck1hcCkge1xuICAgICAgICBvYmpba10gPSB2O1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG5sZXQgbXlNYXAgPSBuZXcgTWFwKCkuc2V0KCd5ZXMnLCB0cnVlKS5zZXQoJ25vJywgZmFsc2UpO1xuc3RyTWFwVG9PYmoobXlNYXApO1xuXG4vL+Wvueixoei9rE1hcFxuZnVuY3Rpb24gb2JqVG9TdHJNYXAob2JqKSB7XG4gICAgbGV0IHN0ck1hcCA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgICAgICAgc3RyTWFwLnNldChrLCBvYmpba10pO1xuICAgIH1cbiAgICByZXR1cm4gc3RyTWFwO1xufVxuXG5vYmpUb1N0ck1hcCh7eWVzOiB0cnVlLCBubzogZmFsc2V9KTtcblxuXG4vL01hcCDkuI4gSlNPTiDkupLnm7jovazljJZcblxuY29uc29sZS5sb2coYFxuICAgIFdlYWtNYXAg55yB55WlXG5gKTtcbiIsIi8vUHJvbWlzZVxuLy/ln7rmnKznlKjms5VcbmNvbnNvbGUubG9nKGBcbiAgICBFUzbop4TlrpouIFByb21pc2Xlr7nosaHmmK/kuIDkuKrmnoTpgKDlh73mlbAsIOeUqOadpeeUn+aIkFByb21pc2Xlrp7kvotcbmApO1xuXG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcywgJ2RvbmUnKTtcbiAgICB9KTtcbn1cblxudGltZW91dCgxMDApLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xufSk7XG5cbmxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgY29uc29sZS5sb2coJ1Byb21pc2UnKTtcbiAgICByZXNvbHZlKCk7XG59KTtcblxucHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdSZXNvbHZlZC4nKTtcbn0pO1xuXG5jb25zb2xlLmxvZygnSGkhJyk7XG4iXX0=
