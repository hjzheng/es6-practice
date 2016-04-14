'use strict'
//let和const命令

console.log(
    `阮一峰 ECMAScript6 入门 学习 
     这里只列出项目中用的规则和知识点, 更多内容, 自己看书`
);

console.log(
    `Lesson 1 Let和const命令

Let
基本用法
     ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效`
);

{
    let a = 10;
    var b = 1;
}

//为了保证代码正常运行, 加入try catch 但是依然将错误打印出来
try {
    a // ReferenceError: a is not defined.
    b // 1
} catch (error) {
    console.log(error);
}

console.log(
    `
不存在变量提升
    let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
    
    注意: 有待验证, 目前在我的环境下, 没有报错, 只是返回undefined, 与babel转成ES5有关, 
    
    实际在 chrome 下运行, 结果是我们期望的. 
    
    所以在实际测试中, 请用浏览器,直接运行, 但是这是准则也是在以后写ES6所应该注意的
    `
);

try {
    console.log(foo); // 输出undefined
    console.log(bar); // 报错ReferenceError 有待验证, 目前在我的环境下, 没有报错, 只是返回undefined

    var foo = 2;
    let bar = 2;
} catch (error) {
    console.log(error); //应该输出 ReferenceError
}

console.log(
    `
暂时性死区(TDZ)
    只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。`
);

try {
    var tmp = 123;

    if (true) {
        tmp = 'abc'; // ReferenceError
        let tmp;
    }
} catch (error) {
    console.log(error); //应该输出 ReferenceError
}

console.log(
    `
不允许重复声明
    let不允许在相同作用域内，重复声明同一个变量`
);


function Foo() {
    let a = 10;
    //var a = 1; //为了防止报 重复声明的错误 所以注释掉
}

function Bar() {
    let a = 10;
    //let a = 1;  //为了防止报 重复声明的错误 所以注释掉
}

console.log(
    `
const
    const也用来声明变量，其他特性和let一样, 但是声明的是常量。一旦声明，常量的值就不能改变。`
);

const PI = 3.1415;
PI // 3.1415

//PI = 3;   // TypeError: "PI" is read-only, 为了防止报错, 所以注释

console.log(`
    const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。`
);