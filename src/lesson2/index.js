//变量的解构赋值
console.log(
    `Lesson 2 变量的解析赋值

数组的结构赋值
基本用法
    ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构`
);

let [foo, [[bar], baz]] = [1, [[2], 3]];

console.log(
    `
     ${foo} // 1
     ${bar} // 2
     ${baz} // 3`
)



let [ , , third] = ["foo", "bar", "baz"];

console.log(
    `
    ${third} //baz
    `
);

let [x, , y] = [1, 2, 3];


console.log(
    `
    ${x} // 1
    ${y} // 3
    `
);


let [head, ...tail] = [1, 2, 3, 4];

console.log(
    `
    ${head} // 1
    ${tail} // [2, 3, 4]
    `
);

let [a, b, ...c] = ['a'];
console.log(
    `
    ${a} // "a"
    ${b} // undefined
    ${c} // []
    `
);

console.log(
    `
默认值
    解构赋值允许指定默认值
    `
);

var [bool = true] = [];
console.log(
    `
    ${bool} // true
    `
)

let [d, e = 'b'] = ['a'] // d='a', e='b'
let [f, g = 'b'] = ['a', undefined] // f='a', g='b'

console.log(
    `
    ${d} 
    ${e}
    ${f}
    ${g}
    `
)

console.log(
    `
    注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
    `
);

console.log(
    `
    如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。    
    `
)

function faaa(){
    console.log('aaa');
}

let [fa = faaa()] = [1];

console.log(
    `
    上面代码中，因为fa能取到值，所以函数faaa根本不会执行。
    `
);

console.log(
    `
对象的解构赋值
    解构不仅可以用于数组，还可以用于对象。
    `
);

var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
foo1 // "aaa"
bar1 // "bbb"

console.log(
    `
    ${foo1}
    ${bar1}
    
    对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
    `
);

console.log(
    `
字符串也可以解构赋值。
    这是因为此时，字符串被转换成了一个类似数组的对象。
    类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
    `
);

const [l,m,n,o,p,q] = 'hello';

console.log(
    `
    ${l}
    ${m}
    ${n}
    ${o}
    ${p}
    ${q}
    `
);

let {length : len} = 'hello';

console.log(len);

console.log(
    `
数值和布尔值的解构赋值
    解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。`
);

let {toString: num} = 123;
num === Number.prototype.toString // true

let {toString: boo} = true;
boo === Boolean.prototype.toString // true

console.log(
    `
    上面代码中，数值和布尔值的包装对象都有toString属性，因此变量都能取到值。
    解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
    `
);



