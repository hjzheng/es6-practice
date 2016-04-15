//函数的扩展

console.log(`
    函数参数的默认值
`)

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

var p = new Point();

function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

console.log(`
与解构赋值默认值结合使用
    参数默认值可以与解构赋值的默认值，结合起来使用。
`);

function foo({x, y = 5}) {
    console.log(x, y);
}

foo({}) // undefined, 5
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) // 1, 2
//foo() // TypeError: Cannot read property 'x' of undefined


function fetch(url, { body = '', method = 'GET', headers = {} } = {}){
    console.log(method);
}

fetch('http://example.com', {})
// "GET"

fetch('http://example.com')
// "GET"

console.log(`
函数的length属性
    指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真
`);

(function(a){}).length; // 1
(function(a = 5){}).length; // 0
(function(a, b, c = 5){}).length; // 2

console.log(`
    利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
`);
function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}

//foo()
// Error: Missing parameter

console.log(`
rest参数
    ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
`);


function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

add(2, 5, 3) // 10

// arguments变量的写法
//const sortNumbers = () =>
//    Array.prototype.slice.call(arguments).sort();

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();

//注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

// 报错
// function f(a, ...b, c) {
//     // ...
// }

//函数的length属性，不包括rest参数。

//(function(a) {}).length;  // 1
//(function(...a) {}).length;  // 0
//(function(a, ...b) {}).length;  // 1


console.log(`
扩展运算符
    扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
`);


console.log(...[1, 2, 3]);
// 1 2 3

console.log(1, ...[2, 3, 4], 5);
// 1 2 3 4 5


console.log(`
    扩展运算的应用
    合并数组
`);

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
[...arr1, ...arr2, ...arr3];

console.log(`
箭头函数

箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
`);


const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5);
