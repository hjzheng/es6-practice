(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _lesson = require("./lesson1");

},{"./lesson1":2}],2:[function(require,module,exports){
'use strict';
//let和const命令

console.log('阮一峰 ECMAScript6 入门 学习 \n     这里只列出项目中用的规则和知识点, 更多内容, 自己看书');

console.log('Lesson 1 Let和const命令\n\n基本用法\n     ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效');

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

console.log('\nconst命令\n    const也用来声明变量，其他特性和let一样, 但是声明的是常量。一旦声明，常量的值就不能改变。');

var PI = 3.1415;
PI; // 3.1415

//PI = 3;   // TypeError: "PI" is read-only, 为了防止报错, 所以注释

console.log('\n    const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。');

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvbGVzc29uMS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7OztBQ0FBOzs7QUFHQSxRQUFRLEdBQVI7O0FBS0EsUUFBUSxHQUFSOztBQU9BO0FBQ0ksUUFBSSxLQUFJLEVBQUosQ0FEUjtBQUVJLFFBQUksSUFBSSxDQUFKLENBRlI7Ozs7QUFNQSxJQUFJO0FBQ0E7QUFEQSxLQUVBO0FBRkEsQ0FBSixDQUdFLE9BQU8sS0FBUCxFQUFjO0FBQ1osWUFBUSxHQUFSLENBQVksS0FBWixFQURZO0NBQWQ7O0FBSUYsUUFBUSxHQUFSOztBQWFBLElBQUk7QUFDQSxZQUFRLEdBQVIsQ0FBWSxHQUFaO0FBREEsV0FFQSxDQUFRLEdBQVIsQ0FBWSxHQUFaOztBQUZBLFFBSUksTUFBTSxDQUFOLENBSko7QUFLQSxRQUFJLE1BQU0sQ0FBTixDQUxKO0NBQUosQ0FNRSxPQUFPLEtBQVAsRUFBYztBQUNaLFlBQVEsR0FBUixDQUFZLEtBQVo7QUFEWSxDQUFkOztBQUlGLFFBQVEsR0FBUjs7QUFNQSxJQUFJO0FBQ0EsUUFBSSxNQUFNLEdBQU4sQ0FESjs7QUFHQSxRQUFJLElBQUosRUFBVTtBQUNOLGVBQU0sS0FBTjtBQURNLFlBRUYsYUFBSixDQUZNO0tBQVY7Q0FISixDQU9FLE9BQU8sS0FBUCxFQUFjO0FBQ1osWUFBUSxHQUFSLENBQVksS0FBWjtBQURZLENBQWQ7O0FBSUYsUUFBUSxHQUFSOztBQU9BLFNBQVMsR0FBVCxHQUFlO0FBQ1gsUUFBSSxJQUFJLEVBQUo7O0FBRE8sQ0FBZjs7QUFLQSxTQUFTLEdBQVQsR0FBZTtBQUNYLFFBQUksSUFBSSxFQUFKOztBQURPLENBQWY7O0FBS0EsUUFBUSxHQUFSOztBQU1BLElBQU0sS0FBSyxNQUFMO0FBQ047Ozs7QUFJQSxRQUFRLEdBQVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtsZXNzb24xfSBmcm9tIFwiLi9sZXNzb24xXCJcbiIsIid1c2Ugc3RyaWN0J1xuLy9sZXTlkoxjb25zdOWRveS7pFxuXG5jb25zb2xlLmxvZyhcbiAgICBg6Ziu5LiA5bOwIEVDTUFTY3JpcHQ2IOWFpemXqCDlrabkuaAgXG4gICAgIOi/memHjOWPquWIl+WHuumhueebruS4reeUqOeahOinhOWImeWSjOefpeivhueCuSwg5pu05aSa5YaF5a65LCDoh6rlt7HnnIvkuaZgXG4pO1xuXG5jb25zb2xlLmxvZyhcbiAgICBgTGVzc29uIDEgTGV05ZKMY29uc3Tlkb3ku6Rcblxu5Z+65pys55So5rOVXG4gICAgIEVTNuaWsOWinuS6hmxldOWRveS7pO+8jOeUqOadpeWjsOaYjuWPmOmHj+OAguWug+eahOeUqOazleexu+S8vOS6jnZhcu+8jOS9huaYr+aJgOWjsOaYjueahOWPmOmHj++8jOWPquWcqGxldOWRveS7pOaJgOWcqOeahOS7o+eggeWdl+WGheacieaViGBcbik7XG5cbntcbiAgICBsZXQgYSA9IDEwO1xuICAgIHZhciBiID0gMTtcbn1cblxuLy/kuLrkuobkv53or4Hku6PnoIHmraPluLjov5DooYwsIOWKoOWFpXRyeSBjYXRjaCDkvYbmmK/kvp3nhLblsIbplJnor6/miZPljbDlh7rmnaVcbnRyeSB7XG4gICAgYSAvLyBSZWZlcmVuY2VFcnJvcjogYSBpcyBub3QgZGVmaW5lZC5cbiAgICBiIC8vIDFcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7kuI3lrZjlnKjlj5jph4/mj5DljYdcbiAgICBsZXTkuI3lg492YXLpgqPmoLfkvJrlj5HnlJ/igJzlj5jph4/mj5DljYfigJ3njrDosaHjgILmiYDku6XvvIzlj5jph4/kuIDlrpropoHlnKjlo7DmmI7lkI7kvb/nlKjvvIzlkKbliJnmiqXplJnjgIJcbiAgICBcbiAgICDms6jmhI86IOacieW+hemqjOivgSwg55uu5YmN5Zyo5oiR55qE546v5aKD5LiLLCDmsqHmnInmiqXplJksIOWPquaYr+i/lOWbnnVuZGVmaW5lZCwg5LiOYmFiZWzovazmiJBFUzXmnInlhbMsIFxuICAgIFxuICAgIOWunumZheWcqCBjaHJvbWUg5LiL6L+Q6KGMLCDnu5PmnpzmmK/miJHku6zmnJ/mnJvnmoQuIFxuICAgIFxuICAgIOaJgOS7peWcqOWunumZhea1i+ivleS4rSwg6K+355So5rWP6KeI5ZmoLOebtOaOpei/kOihjCwg5L2G5piv6L+Z5piv5YeG5YiZ5Lmf5piv5Zyo5Lul5ZCO5YaZRVM25omA5bqU6K+l5rOo5oSP55qEXG4gICAgYFxuKTtcblxudHJ5IHtcbiAgICBjb25zb2xlLmxvZyhmb28pOyAvLyDovpPlh7p1bmRlZmluZWRcbiAgICBjb25zb2xlLmxvZyhiYXIpOyAvLyDmiqXplJlSZWZlcmVuY2VFcnJvciDmnInlvoXpqozor4EsIOebruWJjeWcqOaIkeeahOeOr+Wig+S4iywg5rKh5pyJ5oql6ZSZLCDlj6rmmK/ov5Tlm551bmRlZmluZWRcblxuICAgIHZhciBmb28gPSAyO1xuICAgIGxldCBiYXIgPSAyO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8v5bqU6K+l6L6T5Ye6IFJlZmVyZW5jZUVycm9yXG59XG5cbmNvbnNvbGUubG9nKFxuICAgIGBcbuaaguaXtuaAp+atu+WMuihURFopXG4gICAg5Y+q6KaB5Z2X57qn5L2c55So5Z+f5YaF5a2Y5ZyobGV05ZG95Luk77yM5a6D5omA5aOw5piO55qE5Y+Y6YeP5bCx4oCc57uR5a6a4oCd77yIYmluZGluZ++8iei/meS4quWMuuWfn++8jOS4jeWGjeWPl+WklumDqOeahOW9seWTjeOAgmBcbik7XG5cbnRyeSB7XG4gICAgdmFyIHRtcCA9IDEyMztcblxuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIHRtcCA9ICdhYmMnOyAvLyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBsZXQgdG1wO1xuICAgIH1cbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpOyAvL+W6lOivpei+k+WHuiBSZWZlcmVuY2VFcnJvclxufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG7kuI3lhYHorrjph43lpI3lo7DmmI5cbiAgICBsZXTkuI3lhYHorrjlnKjnm7jlkIzkvZznlKjln5/lhoXvvIzph43lpI3lo7DmmI7lkIzkuIDkuKrlj5jph49gXG4pO1xuXG5cbmZ1bmN0aW9uIEZvbygpIHtcbiAgICBsZXQgYSA9IDEwO1xuICAgIC8vdmFyIGEgPSAxOyAvL+S4uuS6humYsuatouaKpSDph43lpI3lo7DmmI7nmoTplJnor68g5omA5Lul5rOo6YeK5o6JXG59XG5cbmZ1bmN0aW9uIEJhcigpIHtcbiAgICBsZXQgYSA9IDEwO1xuICAgIC8vbGV0IGEgPSAxOyAgLy/kuLrkuobpmLLmraLmiqUg6YeN5aSN5aOw5piO55qE6ZSZ6K+vIOaJgOS7peazqOmHiuaOiVxufVxuXG5jb25zb2xlLmxvZyhcbiAgICBgXG5jb25zdOWRveS7pFxuICAgIGNvbnN05Lmf55So5p2l5aOw5piO5Y+Y6YeP77yM5YW25LuW54m55oCn5ZKMbGV05LiA5qC3LCDkvYbmmK/lo7DmmI7nmoTmmK/luLjph4/jgILkuIDml6blo7DmmI7vvIzluLjph4/nmoTlgLzlsLHkuI3og73mlLnlj5jjgIJgXG4pO1xuXG5jb25zdCBQSSA9IDMuMTQxNTtcblBJIC8vIDMuMTQxNVxuXG4vL1BJID0gMzsgICAvLyBUeXBlRXJyb3I6IFwiUElcIiBpcyByZWFkLW9ubHksIOS4uuS6humYsuatouaKpemUmSwg5omA5Lul5rOo6YeKXG5cbmNvbnNvbGUubG9nKGBcbiAgICBjb25zdOWjsOaYjueahOWPmOmHj+S4jeW+l+aUueWPmOWAvO+8jOi/meaEj+WRs+edgO+8jGNvbnN05LiA5pem5aOw5piO5Y+Y6YeP77yM5bCx5b+F6aG756uL5Y2z5Yid5aeL5YyW77yM5LiN6IO955WZ5Yiw5Lul5ZCO6LWL5YC844CCYFxuKTsiXX0=
