(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _lesson = require("./lesson1");

var _lesson2 = require("./lesson2");

var _lesson3 = require("./lesson3");

var _lesson4 = require("./lesson4");

var _lesson5 = require("./lesson5");

},{"./lesson1":2,"./lesson2":3,"./lesson3":4,"./lesson4":5,"./lesson5":6}],2:[function(require,module,exports){
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
    for (var _iterator2 = ['a', 'b'].values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var elem = _step2.value;

        console.log(elem);
    }
    // 'a'
    // 'b'
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
    for (var _iterator3 = ['a', 'b'].entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2);

        var _index = _step3$value[0];
        var _elem = _step3$value[1];

        console.log(_index, _elem);
    }
    // 0 "a"
    // 1 "b"
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

},{}],6:[function(require,module,exports){
'use strict';

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvbGVzc29uMS9pbmRleC5qcyIsInNyYy9sZXNzb24yL2luZGV4LmpzIiwic3JjL2xlc3NvbjMvaW5kZXguanMiLCJzcmMvbGVzc29uNC9pbmRleC5qcyIsInNyYy9sZXNzb241L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7O0FDSkE7OztBQUdBLFFBQVEsR0FBUjs7QUFLQSxRQUFRLEdBQVI7O0FBUUE7QUFDSSxRQUFJLEtBQUksRUFBSixDQURSO0FBRUksUUFBSSxJQUFJLENBQUosQ0FGUjs7OztBQU1BLElBQUk7QUFDQTtBQURBLEtBRUE7QUFGQSxDQUFKLENBR0UsT0FBTyxLQUFQLEVBQWM7QUFDWixZQUFRLEdBQVIsQ0FBWSxLQUFaLEVBRFk7Q0FBZDs7QUFJRixRQUFRLEdBQVI7O0FBYUEsSUFBSTtBQUNBLFlBQVEsR0FBUixDQUFZLEdBQVo7QUFEQSxXQUVBLENBQVEsR0FBUixDQUFZLEdBQVo7O0FBRkEsUUFJSSxNQUFNLENBQU4sQ0FKSjtBQUtBLFFBQUksTUFBTSxDQUFOLENBTEo7Q0FBSixDQU1FLE9BQU8sS0FBUCxFQUFjO0FBQ1osWUFBUSxHQUFSLENBQVksS0FBWjtBQURZLENBQWQ7O0FBSUYsUUFBUSxHQUFSOztBQU1BLElBQUk7QUFDQSxRQUFJLE1BQU0sR0FBTixDQURKOztBQUdBLFFBQUksSUFBSixFQUFVO0FBQ04sZUFBTSxLQUFOO0FBRE0sWUFFRixhQUFKLENBRk07S0FBVjtDQUhKLENBT0UsT0FBTyxLQUFQLEVBQWM7QUFDWixZQUFRLEdBQVIsQ0FBWSxLQUFaO0FBRFksQ0FBZDs7QUFJRixRQUFRLEdBQVI7O0FBT0EsU0FBUyxHQUFULEdBQWU7QUFDWCxRQUFJLElBQUksRUFBSjs7QUFETyxDQUFmOztBQUtBLFNBQVMsR0FBVCxHQUFlO0FB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SUFBYixDQUFrQixDQUFsQjs7O0FBR0EsUUFBUSxHQUFSOzs7Ozs7O0FBSUEseUJBQWtCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxJQUFYLDRCQUFsQixvR0FBcUM7WUFBNUIsb0JBQTRCOztBQUNqQyxnQkFBUSxHQUFSLENBQVksS0FBWixFQURpQztLQUFyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSwwQkFBaUIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLE1BQVgsNkJBQWpCLHdHQUFzQztZQUE3QixvQkFBNkI7O0FBQ2xDLGdCQUFRLEdBQVIsQ0FBWSxJQUFaLEVBRGtDO0tBQXRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLDBCQUEwQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsT0FBWCw2QkFBMUIsd0dBQWdEOzs7WUFBdEMseUJBQXNDO1lBQS9CLHdCQUErQjs7QUFDNUMsZ0JBQVEsR0FBUixDQUFZLE1BQVosRUFBbUIsS0FBbkIsRUFENEM7S0FBaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBLFFBQVEsR0FBUjs7QUFJQSxTQUFTLEtBQVQsR0FBNkI7UUFBZCwwREFBSSxpQkFBVTtRQUFQLDBEQUFJLGlCQUFHOztBQUN6QixTQUFLLENBQUwsR0FBUyxDQUFULENBRHlCO0FBRXpCLFNBQUssQ0FBTCxHQUFTLENBQVQsQ0FGeUI7Q0FBN0I7O0FBS0EsSUFBSSxJQUFJLElBQUksS0FBSixFQUFKOztBQUVKLFNBQVMsR0FBVCxDQUFhLENBQWIsRUFBNkI7UUFBYiwwREFBSSx1QkFBUzs7QUFDekIsWUFBUSxHQUFSLENBQVksQ0FBWixFQUFlLENBQWYsRUFEeUI7Q0FBN0I7O0FBSUEsSUFBSSxPQUFKO0FBQ0EsSUFBSSxPQUFKLEVBQWEsT0FBYjtBQUNBLElBQUksT0FBSixFQUFhLEVBQWI7O0FBRUEsUUFBUSxHQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7bGVzc29uMX0gZnJvbSBcIi4vbGVzc29uMVwiO1xuaW1wb3J0IHtsZXNzb24yfSBmcm9tIFwiLi9sZXNzb24yXCI7XG5pbXBvcnQge2xlc3NvbjN9IGZyb20gXCIuL2xlc3NvbjNcIjtcbmltcG9ydCB7bGVzc29uNH0gZnJvbSBcIi4vbGVzc29uNFwiO1xuaW1wb3J0IHtsZXNzb241fSBmcm9tIFwiLi9sZXNzb241XCI7XG4iLCIndXNlIHN0cmljdCdcbi8vbGV05ZKMY29uc3Tlkb3ku6RcblxuY29uc29sZS5sb2coXG4gICAgYOmYruS4gOWzsCBFQ01BU2NyaXB0NiDlhaXpl6gg5a2m5LmgIFxuICAgICDov5nph4zlj6rliJflh7rpobnnm67kuK3nlKjnmoTop4TliJnlkoznn6Xor4bngrksIOabtOWkmuWGheWuuSwg6Ieq5bex55yL5LmmYFxuKTtcblxuY29uc29sZS5sb2coXG4gICAgYExlc3NvbiAxIExldOWSjGNvbnN05ZG95LukXG5cbkxldFxu5Z+65pys55So5rOVXG4gICAgIEVTNuaWsOWinuS6hmxldOWRveS7pO+8jOeUqOadpeWjsOaYjuWPmOmHj+OAguWug+eahOeUqOazleexu+S8vOS6jnZhcu+8jOS9huaYr+aJgOWjsOaYjueahOWPmOmHj++8jOWPquWcqGxldOWRveS7pOaJgOWcqOeahOS7o+eggeWdl+WGheacieaViGBcbik7XG5cbntcbiAgICBsZXQgYSA9IDEwO1xuICAgIHZhciBiID0gMTtcbn1cblxuLy/kuLrkuobkv53or4Hku6PnoIHmraPluLjov5DooYwsIOWKoOWFpXRyeSBjYXRjaCDkvYbmmK/kvp3nhLblsIbplJnor6/miZPljbDlh7rmnaVcbnRyeSB7XG4gICAgYSAvLyBSZWZlcmVuY2VFcnJvcjogYSBpcyBub3QgZGVmaW5lZC5cbiAgICBiIC8vIDFcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7kuI3lrZjlnKjlj5jph4/mj5DljYdcbiAgICBsZXTkuI3lg492YXLpgqPmoLfkvJrlj5HnlJ/igJzlj5jph4/mj5DljYfigJ3njrDosaHjgILmiYDku6XvvIzlj5jph4/kuIDlrpropoHlnKjlo7DmmI7lkI7kvb/nlKjvvIzlkKbliJnmiqXplJnjgIJcbiAgICBcbiAgICDms6jmhI86IOacieW+hemqjOivgSwg55uu5YmN5Zyo5oiR55qE546v5aKD5LiLLCDmsqHmnInmiqXplJksIOWPquaYr+i/lOWbnnVuZGVmaW5lZCwg5LiOYmFiZWzovazmiJBFUzXmnInlhbMsIFxuICAgIFxuICAgIOWunumZheWcqCBjaHJvbWUg5LiL6L+Q6KGMLCDnu5PmnpzmmK/miJHku6zmnJ/mnJvnmoQuIFxuICAgIFxuICAgIOaJgOS7peWcqOWunumZhea1i+ivleS4rSwg6K+355So5rWP6KeI5ZmoLOebtOaOpei/kOihjCwg5L2G5piv6L+Z5piv5YeG5YiZ5Lmf5piv5Zyo5Lul5ZCO5YaZRVM25omA5bqU6K+l5rOo5oSP55qEXG4gICAgYFxuKTtcblxudHJ5IHtcbiAgICBjb25zb2xlLmxvZyhmb28pOyAvLyDovpPlh7p1bmRlZmluZWRcbiAgICBjb25zb2xlLmxvZyhiYXIpOyAvLyDmiqXplJlSZWZlcmVuY2VFcnJvciDmnInlvoXpqozor4EsIOebruWJjeWcqOaIkeeahOeOr+Wig+S4iywg5rKh5pyJ5oql6ZSZLCDlj6rmmK/ov5Tlm551bmRlZmluZWRcblxuICAgIHZhciBmb28gPSAyO1xuICAgIGxldCBiYXIgPSAyO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8v5bqU6K+l6L6T5Ye6IFJlZmVyZW5jZUVycm9yXG59XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbuaaguaXtuaAp+atu+WMuihURFopXG4gICAg5Y+q6KaB5Z2X57qn5L2c55So5Z+f5YaF5a2Y5ZyobGV05ZG95Luk77yM5a6D5omA5aOw5piO55qE5Y+Y6YeP5bCx4oCc57uR5a6a4oCd77yIYmluZGluZ++8iei/meS4quWMuuWfn++8jOS4jeWGjeWPl+WklumDqOeahOW9seWTjeOAgmBcbik7XG5cbnRyeSB7XG4gICAgdmFyIHRtcCA9IDEyMztcblxuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIHRtcCA9ICdhYmMnOyAvLyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBsZXQgdG1wO1xuICAgIH1cbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpOyAvL+W6lOivpei+k+WHuiBSZWZlcmVuY2VFcnJvclxufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7kuI3lhYHorrjph43lpI3lo7DmmI5cbiAgICBsZXTkuI3lhYHorrjlnKjnm7jlkIzkvZznlKjln5/lhoXvvIzph43lpI3lo7DmmI7lkIzkuIDkuKrlj5jph49gXG4pO1xuXG5cbmZ1bmN0aW9uIEZvbygpIHtcbiAgICBsZXQgYSA9IDEwO1xuICAgIC8vdmFyIGEgPSAxOyAvL+S4uuS6humYsuatouaKpSDph43lpI3lo7DmmI7nmoTplJnor68g5omA5Lul5rOo6YeK5o6JXG59XG5cbmZ1bmN0aW9uIEJhcigpIHtcbiAgICBsZXQgYSA9IDEwO1xuICAgIC8vbGV0IGEgPSAxOyAgLy/kuLrkuobpmLLmraLmiqUg6YeN5aSN5aOw5piO55qE6ZSZ6K+vIOaJgOS7peazqOmHiuaOiVxufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG5jb25zdFxuICAgIGNvbnN05Lmf55So5p2l5aOw5piO5Y+Y6YeP77yM5YW25LuW54m55oCn5ZKMbGV05LiA5qC3LCDkvYbmmK/lo7DmmI7nmoTmmK/luLjph4/jgILkuIDml6blo7DmmI7vvIzluLjph4/nmoTlgLzlsLHkuI3og73mlLnlj5jjgIJgXG4pO1xuXG5jb25zdCBQSSA9IDMuMTQxNTtcblBJIC8vIDMuMTQxNVxuXG4vL1BJID0gMzsgICAvLyBUeXBlRXJyb3I6IFwiUElcIiBpcyByZWFkLW9ubHksIOS4uuS6humYsuatouaKpemUmSwg5omA5Lul5rOo6YeKXG5cbmNvbnNvbGUubG9nKGBcbiAgICBjb25zdOWjsOaYjueahOWPmOmHj+S4jeW+l+aUueWPmOWAvO+8jOi/meaEj+WRs+edgO+8jGNvbnN05LiA5pem5aOw5piO5Y+Y6YeP77yM5bCx5b+F6aG756uL5Y2z5Yid5aeL5YyW77yM5LiN6IO955WZ5Yiw5Lul5ZCO6LWL5YC844CCYFxuKTsiLCIvL+WPmOmHj+eahOino+aehOi1i+WAvFxuY29uc29sZS5sb2coXG4gICAgYExlc3NvbiAyIOWPmOmHj+eahOino+aekOi1i+WAvFxuXG7mlbDnu4TnmoTnu5PmnoTotYvlgLxcbuWfuuacrOeUqOazlVxuICAgIEVTNuWFgeiuuOaMieeFp+S4gOWumuaooeW8j++8jOS7juaVsOe7hOWSjOWvueixoeS4reaPkOWPluWAvO+8jOWvueWPmOmHj+i/m+ihjOi1i+WAvO+8jOi/meiiq+ensOS4uuino+aehGBcbik7XG5cbmxldCBbZm9vLCBbW2Jhcl0sIGJhel1dID0gWzEsIFtbMl0sIDNdXTtcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICAke2Zvb30gLy8gMVxuICAgICAke2Jhcn0gLy8gMlxuICAgICAke2Jhen0gLy8gM2BcbilcblxuXG5cbmxldCBbICwgLCB0aGlyZF0gPSBbXCJmb29cIiwgXCJiYXJcIiwgXCJiYXpcIl07XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICAke3RoaXJkfSAvL2JhelxuICAgIGBcbik7XG5cbmxldCBbeCwgLCB5XSA9IFsxLCAyLCAzXTtcblxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHt4fSAvLyAxXG4gICAgJHt5fSAvLyAzXG4gICAgYFxuKTtcblxuXG5sZXQgW2hlYWQsIC4uLnRhaWxdID0gWzEsIDIsIDMsIDRdO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHtoZWFkfSAvLyAxXG4gICAgJHt0YWlsfSAvLyBbMiwgMywgNF1cbiAgICBgXG4pO1xuXG5sZXQgW2EsIGIsIC4uLmNdID0gWydhJ107XG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHthfSAvLyBcImFcIlxuICAgICR7Yn0gLy8gdW5kZWZpbmVkXG4gICAgJHtjfSAvLyBbXVxuICAgIGBcbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbum7mOiupOWAvFxuICAgIOino+aehOi1i+WAvOWFgeiuuOaMh+Wumum7mOiupOWAvFxuICAgIGBcbik7XG5cbnZhciBbYm9vbCA9IHRydWVdID0gW107XG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHtib29sfSAvLyB0cnVlXG4gICAgYFxuKVxuXG5sZXQgW2QsIGUgPSAnYiddID0gWydhJ10gLy8gZD0nYScsIGU9J2InXG5sZXQgW2YsIGcgPSAnYiddID0gWydhJywgdW5kZWZpbmVkXSAvLyBmPSdhJywgZz0nYidcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7ZH0gXG4gICAgJHtlfVxuICAgICR7Zn1cbiAgICAke2d9XG4gICAgYFxuKVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAg5rOo5oSP77yMRVM25YaF6YOo5L2/55So5Lil5qC855u4562J6L+Q566X56ym77yIPT0977yJ77yM5Yik5pat5LiA5Liq5L2N572u5piv5ZCm5pyJ5YC844CC5omA5Lul77yM5aaC5p6c5LiA5Liq5pWw57uE5oiQ5ZGY5LiN5Lil5qC8562J5LqOdW5kZWZpbmVk77yM6buY6K6k5YC85piv5LiN5Lya55Sf5pWI55qE44CCXG4gICAgYFxuKTtcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgIOWmguaenOm7mOiupOWAvOaYr+S4gOS4quihqOi+vuW8j++8jOmCo+S5iOi/meS4quihqOi+vuW8j+aYr+aDsOaAp+axguWAvOeahO+8jOWNs+WPquacieWcqOeUqOWIsOeahOaXtuWAme+8jOaJjeS8muaxguWAvOOAgiAgICBcbiAgICBgXG4pXG5cbmZ1bmN0aW9uIGZhYWEoKXtcbiAgICBjb25zb2xlLmxvZygnYWFhJyk7XG59XG5cbmxldCBbZmEgPSBmYWFhKCldID0gWzFdO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAg5LiK6Z2i5Luj56CB5Lit77yM5Zug5Li6ZmHog73lj5bliLDlgLzvvIzmiYDku6Xlh73mlbBmYWFh5qC55pys5LiN5Lya5omn6KGM44CCXG4gICAgYFxuKTtcblxuY29uc29sZS5sb2coXG4gICAgYFxu5a+56LGh55qE6Kej5p6E6LWL5YC8XG4gICAg6Kej5p6E5LiN5LuF5Y+v5Lul55So5LqO5pWw57uE77yM6L+Y5Y+v5Lul55So5LqO5a+56LGh44CCXG4gICAgYFxuKTtcblxudmFyIHsgZm9vMSwgYmFyMSB9ID0geyBmb28xOiBcImFhYVwiLCBiYXIxOiBcImJiYlwiIH07XG5mb28xIC8vIFwiYWFhXCJcbmJhcjEgLy8gXCJiYmJcIlxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAgJHtmb28xfVxuICAgICR7YmFyMX1cbiAgICBcbiAgICDlr7nosaHnmoTop6PmnoTkuI7mlbDnu4TmnInkuIDkuKrph43opoHnmoTkuI3lkIzjgILmlbDnu4TnmoTlhYPntKDmmK/mjInmrKHluo/mjpLliJfnmoTvvIzlj5jph4/nmoTlj5blgLznlLHlroPnmoTkvY3nva7lhrPlrprvvJvogIzlr7nosaHnmoTlsZ7mgKfmsqHmnInmrKHluo/vvIzlj5jph4/lv4XpobvkuI7lsZ7mgKflkIzlkI3vvIzmiY3og73lj5bliLDmraPnoa7nmoTlgLzjgIJcbiAgICBgXG4pO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7lrZfnrKbkuLLkuZ/lj6/ku6Xop6PmnoTotYvlgLzjgIJcbiAgICDov5nmmK/lm6DkuLrmraTml7bvvIzlrZfnrKbkuLLooqvovazmjaLmiJDkuobkuIDkuKrnsbvkvLzmlbDnu4TnmoTlr7nosaHjgIJcbiAgICDnsbvkvLzmlbDnu4TnmoTlr7nosaHpg73mnInkuIDkuKpsZW5ndGjlsZ7mgKfvvIzlm6DmraTov5jlj6/ku6Xlr7nov5nkuKrlsZ7mgKfop6PmnoTotYvlgLzjgIJcbiAgICBgXG4pO1xuXG5jb25zdCBbbCxtLG4sbyxwLHFdID0gJ2hlbGxvJztcblxuY29uc29sZS5sb2coXG4gICAgYFxuICAgICR7bH1cbiAgICAke219XG4gICAgJHtufVxuICAgICR7b31cbiAgICAke3B9XG4gICAgJHtxfVxuICAgIGBcbik7XG5cbmxldCB7bGVuZ3RoIDogbGVufSA9ICdoZWxsbyc7XG5cbmNvbnNvbGUubG9nKGxlbik7XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbuaVsOWAvOWSjOW4g+WwlOWAvOeahOino+aehOi1i+WAvFxuICAgIOino+aehOi1i+WAvOaXtu+8jOWmguaenOetieWPt+WPs+i+ueaYr+aVsOWAvOWSjOW4g+WwlOWAvO+8jOWImeS8muWFiOi9rOS4uuWvueixoeOAgmBcbik7XG5cbmxldCB7dG9TdHJpbmc6IG51bX0gPSAxMjM7XG5udW0gPT09IE51bWJlci5wcm90b3R5cGUudG9TdHJpbmcgLy8gdHJ1ZVxuXG5sZXQge3RvU3RyaW5nOiBib299ID0gdHJ1ZTtcbmJvbyA9PT0gQm9vbGVhbi5wcm90b3R5cGUudG9TdHJpbmcgLy8gdHJ1ZVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG4gICAg5LiK6Z2i5Luj56CB5Lit77yM5pWw5YC85ZKM5biD5bCU5YC855qE5YyF6KOF5a+56LGh6YO95pyJdG9TdHJpbmflsZ7mgKfvvIzlm6DmraTlj5jph4/pg73og73lj5bliLDlgLzjgIJcbiAgICDop6PmnoTotYvlgLznmoTop4TliJnmmK/vvIzlj6ropoHnrYnlj7flj7PovrnnmoTlgLzkuI3mmK/lr7nosaHvvIzlsLHlhYjlsIblhbbovazkuLrlr7nosaHjgILnlLHkuo51bmRlZmluZWTlkoxudWxs5peg5rOV6L2s5Li65a+56LGh77yM5omA5Lul5a+55a6D5Lus6L+b6KGM6Kej5p6E6LWL5YC877yM6YO95Lya5oql6ZSZ44CCXG4gICAgYFxuKTtcblxuXG5cbiIsIi8v5a2X56ym5Liy55qE5omp5bGV5ZKM5pWw5a2X55qE5omp5bGVXG5jb25zb2xlLmxvZyhcbiAgICBgXG5pbmNsdWRlcygpLCBzdGFydHNXaXRoKCksIGVuZHNXaXRoKClcbiAgICBcbiAgICBpbmNsdWRlcygp77ya6L+U5Zue5biD5bCU5YC877yM6KGo56S65piv5ZCm5om+5Yiw5LqG5Y+C5pWw5a2X56ym5Liy44CCXG4gICAgc3RhcnRzV2l0aCgp77ya6L+U5Zue5biD5bCU5YC877yM6KGo56S65Y+C5pWw5a2X56ym5Liy5piv5ZCm5Zyo5rqQ5a2X56ym5Liy55qE5aS06YOo44CCXG4gICAgZW5kc1dpdGgoKe+8mui/lOWbnuW4g+WwlOWAvO+8jOihqOekuuWPguaVsOWtl+espuS4suaYr+WQpuWcqOa6kOWtl+espuS4sueahOWwvumDqOOAglxuICAgIGBcbik7XG5cbnZhciBzdHIxID0gJ0hlbGxvIHdvcmxkISc7XG5cbnN0cjEuc3RhcnRzV2l0aCgnSGVsbG8nKSAvLyB0cnVlXG5zdHIxLmVuZHNXaXRoKCchJykgLy8gdHJ1ZVxuc3RyMS5pbmNsdWRlcygnbycpIC8vIHRydWVcblxudmFyIHN0cjIgPSAnSGVsbG8gd29ybGQhJztcblxuc3RyMi5zdGFydHNXaXRoKCd3b3JsZCcsIDYpIC8vIHRydWVcbnN0cjIuZW5kc1dpdGgoJ0hlbGxvJywgNSkgLy8gdHJ1ZVxuc3RyMi5pbmNsdWRlcygnSGVsbG8nLCA2KSAvLyBmYWxzZVxuXG4vKipcbiAqIOS4iumdouS7o+eggeihqOekuu+8jOS9v+eUqOesrOS6jOS4quWPguaVsG7ml7bvvIxlbmRzV2l0aOeahOihjOS4uuS4juWFtuS7luS4pOS4quaWueazleacieaJgOS4jeWQjOOAguWug+mSiOWvueWJjW7kuKrlrZfnrKbvvIzogIzlhbbku5bkuKTkuKrmlrnms5Xpkojlr7nku47nrKxu5Liq5L2N572u55u05Yiw5a2X56ym5Liy57uT5p2f44CCXG4gKi9cblxuY29uc29sZS5sb2coYFxuICAgIHJlcGVhdCgpXG4gICAgcmVwZWF05pa55rOV6L+U5Zue5LiA5Liq5paw5a2X56ym5Liy77yM6KGo56S65bCG5Y6f5a2X56ym5Liy6YeN5aSNbuasoeOAglxuYClcblxuXG4neCcucmVwZWF0KDMpIC8vIFwieHh4XCJcbidoZWxsbycucmVwZWF0KDIpIC8vIFwiaGVsbG9oZWxsb1wiXG4nbmEnLnJlcGVhdCgwKSAvL1xuXG4vL+Wtl+espuS4suaooeadv1xuXG4vL+aVsOWtl+eahOaJqeWxlSwg5YW35L2T5aKe5Yqg5LqG5LiA5Lqb5paw5pa55rOVLCDlhbfkvZPor7fnv7vkuabmn6XpmIUiLCIvL+aVsOe7hOeahOaJqeWxlVxuY29uc29sZS5sb2coXG4gICAgYFxuQXJyYXkuZnJvbeaWueazleeUqOS6juWwhuS4pOexu+Wvueixoei9rOS4uuecn+ato+eahOaVsOe7hO+8muexu+S8vOaVsOe7hOeahOWvueixoe+8iGFycmF5LWxpa2Ugb2JqZWN077yJ5ZKM5Y+v6YGN5Y6G77yIaXRlcmFibGXvvInnmoTlr7nosaHvvIjljIXmi6xFUzbmlrDlop7nmoTmlbDmja7nu5PmnoRTZXTlkoxNYXDvvInjgIJcblxu5LiL6Z2i5piv5LiA5Liq57G75Ly85pWw57uE55qE5a+56LGh77yMQXJyYXkuZnJvbeWwhuWug+i9rOS4uuecn+ato+eahOaVsOe7hOOAglxuXG7lhbPkuo4gQXJyYXkuZnJvbSDmm7TlpJrnu4boioIs5Y+v5Lul5Y+C6ICDIOWTpSDnv7vor5HnmoTnrKwxN+eroOesrOS4gOiKgueahOWGheWuuVxuICAgIGBcbik7XG5cbmxldCBhcnJheUxpa2UgPSB7XG4gICAgJzAnOiAnYScsXG4gICAgJzEnOiAnYicsXG4gICAgJzInOiAnYycsXG4gICAgbGVuZ3RoOiAzXG59O1xuXG4vLyBFUzXnmoTlhpnms5VcbnZhciBhcnIxID0gW10uc2xpY2UuY2FsbChhcnJheUxpa2UpOyAvLyBbJ2EnLCAnYicsICdjJ11cbmNvbnNvbGUubG9nKGFycjEpO1xuXG4vLyBFUzbnmoTlhpnms5VcbmxldCBhcnIyID0gQXJyYXkuZnJvbShhcnJheUxpa2UpOyAvLyBbJ2EnLCAnYicsICdjJ11cbmNvbnNvbGUubG9nKGFycjIpO1xuXG5mdW5jdGlvbiBmb28oKSB7XG4gICAgdmFyIGFycjMgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG4gICAgY29uc29sZS5sb2coYXJyMyk7XG59XG5cbmZ1bmN0aW9uIGJhcigpIHtcbiAgICB2YXIgYXJyMyA9IFsgLi4uIGFyZ3VtZW50c107XG4gICAgY29uc29sZS5sb2coYXJyMyk7XG59XG5cbmZvbygxLDIsMyxbNCw1XSk7XG5cbmJhcigxLDIsMyxbNCw1XSk7XG5cbmNvbnNvbGUubG9nKGBcbkFycmF5Lm9mIOaWueazlVxuXG5BcnJheS5vZihpdGVtXzAsIGl0ZW1fMSwgwrfCt8K3KSDlj6/ku6XliJvlu7rkuIDkuKrnlLEgaXRlbV8w44CBaXRlbV8xIOetieWFg+e0oOe7hOaIkOeahOaVsOe7hOOAglxu5piv5byl6KGl5pWw57uE5p6E6YCg5Ye95pWwQXJyYXkoKeeahOS4jei2s1xuYClcblxuY29uc29sZS5sb2coQXJyYXkub2YoMSkpO1xuY29uc29sZS5sb2coQXJyYXkub2YoMSwyKSk7XG5cbi8v5pWw57uE55qE5a6e5L6L5pa55rOVXG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbiAgICDmlbDnu4Tlrp7kvovnmoRjb3B5V2l0aGlu5pa55rOV77yM5Zyo5b2T5YmN5pWw57uE5YaF6YOo77yM5bCG5oyH5a6a5L2N572u55qE5oiQ5ZGY5aSN5Yi25Yiw5YW25LuW5L2N572u77yI5Lya6KaG55uW5Y6f5pyJ5oiQ5ZGY77yJ77yM54S25ZCO6L+U5Zue5b2T5YmN5pWw57uE44CC5Lmf5bCx5piv6K+077yM5L2/55So6L+Z5Liq5pa55rOV77yM5Lya5L+u5pS55b2T5YmN5pWw57uE44CCXG4gICAgXG4gICAg5a6D5o6l5Y+X5LiJ5Liq5Y+C5pWwOlxuICAgIHRhcmdldO+8iOW/hemcgO+8ie+8muS7juivpeS9jee9ruW8gOWni+abv+aNouaVsOaNruOAglxuICAgIHN0YXJ077yI5Y+v6YCJ77yJ77ya5LuO6K+l5L2N572u5byA5aeL6K+75Y+W5pWw5o2u77yM6buY6K6k5Li6MOOAguWmguaenOS4uui0n+WAvO+8jOihqOekuuWAkuaVsOOAglxuICAgIGVuZO+8iOWPr+mAie+8ie+8muWIsOivpeS9jee9ruWJjeWBnOatouivu+WPluaVsOaNru+8jOm7mOiupOetieS6juaVsOe7hOmVv+W6puOAguWmguaenOS4uui0n+WAvO+8jOihqOekuuWAkuaVsOOAglxuICAgIGBcbik7XG5cblsxLCAyLCAzLCA0LCA1XS5jb3B5V2l0aGluKDAsIDMsIDQpXG5cbmNvbnNvbGUubG9nKGBcblxuICAgIOaVsOe7hOWunuS+i+eahGZpbmTmlrnms5XvvIznlKjkuo7mib7lh7rnrKzkuIDkuKrnrKblkIjmnaHku7bnmoTmlbDnu4TmiJDlkZjjgILlroPnmoTlj4LmlbDmmK/kuIDkuKrlm57osIPlh73mlbDvvIzmiYDmnInmlbDnu4TmiJDlkZjkvp3mrKHmiafooYzor6Xlm57osIPlh73mlbDvvIxcbiAgICDnm7TliLDmib7lh7rnrKzkuIDkuKrov5Tlm57lgLzkuLp0cnVl55qE5oiQ5ZGY77yM54S25ZCO6L+U5Zue6K+l5oiQ5ZGY44CC5aaC5p6c5rKh5pyJ56ym5ZCI5p2h5Lu255qE5oiQ5ZGY77yM5YiZ6L+U5ZuedW5kZWZpbmVkXG5cbmApO1xuXG5bMSwgNCwgLTUsIDEwXS5maW5kKChuKSA9PiBuIDwgMClcblxuY29uc29sZS5sb2coYFxuICAgIOaVsOe7hOWunuS+i+eahGZpbmRJbmRleOaWueazleeahOeUqOazleS4jmZpbmTmlrnms5XpnZ7luLjnsbvkvLzvvIzov5Tlm57nrKzkuIDkuKrnrKblkIjmnaHku7bnmoTmlbDnu4TmiJDlkZjnmoTkvY3nva7vvIzlpoLmnpzmiYDmnInmiJDlkZjpg73kuI3nrKblkIjmnaHku7bvvIzliJnov5Tlm54tMeOAglxuYCk7XG5cblsxLCA1LCAxMCwgMTVdLmZpbmRJbmRleChmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGFycikge1xuICAgIHJldHVybiB2YWx1ZSA+IDk7XG59KSAvLyAyXG5cbmNvbnNvbGUubG9nKGBcbiAgICBmaWxs5pa55rOV5L2/55So57uZ5a6a5YC877yM5aGr5YWF5LiA5Liq5pWw57uE44CCXG5gKTtcblxuWydhJywgJ2InLCAnYyddLmZpbGwoNylcbi8vIFs3LCA3LCA3XVxuXG5uZXcgQXJyYXkoMykuZmlsbCg3KVxuLy8gWzcsIDcsIDddXG5cbmNvbnNvbGUubG9nKGBcbiAgICBlbnRyaWVzKCnvvIxrZXlzKCnlkox2YWx1ZXMoKeKAlOKAlOeUqOS6jumBjeWOhuaVsOe7hOOAglxuYClcblxuZm9yIChsZXQgaW5kZXggb2YgWydhJywgJ2InXS5rZXlzKCkpIHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG59XG4vLyAwXG4vLyAxXG5cbmZvciAobGV0IGVsZW0gb2YgWydhJywgJ2InXS52YWx1ZXMoKSkge1xuICAgIGNvbnNvbGUubG9nKGVsZW0pO1xufVxuLy8gJ2EnXG4vLyAnYidcblxuZm9yIChsZXQgW2luZGV4LCBlbGVtXSBvZiBbJ2EnLCAnYiddLmVudHJpZXMoKSkge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCBlbGVtKTtcbn1cbi8vIDAgXCJhXCJcbi8vIDEgXCJiXCIiLCIvL+WHveaVsOeahOaJqeWxlVxuXG5jb25zb2xlLmxvZyhgXG4gICAg5Ye95pWw5Y+C5pWw55qE6buY6K6k5YC8XG5gKVxuXG5mdW5jdGlvbiBQb2ludCh4ID0gMCwgeSA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG59XG5cbnZhciBwID0gbmV3IFBvaW50KCk7XG5cbmZ1bmN0aW9uIGxvZyh4LCB5ID0gJ1dvcmxkJykge1xuICAgIGNvbnNvbGUubG9nKHgsIHkpO1xufVxuXG5sb2coJ0hlbGxvJykgLy8gSGVsbG8gV29ybGRcbmxvZygnSGVsbG8nLCAnQ2hpbmEnKSAvLyBIZWxsbyBDaGluYVxubG9nKCdIZWxsbycsICcnKSAvLyBIZWxsb1xuXG5jb25zb2xlLmxvZyhgXG7kuI7op6PmnoTotYvlgLzpu5jorqTlgLznu5PlkIjkvb/nlKhcbiAgICDlj4LmlbDpu5jorqTlgLzlj6/ku6XkuI7op6PmnoTotYvlgLznmoTpu5jorqTlgLzvvIznu5PlkIjotbfmnaXkvb/nlKjjgIJcbmApOyJdfQ==
