//数组的扩展
console.log(
    `
Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。

下面是一个类似数组的对象，Array.from将它转为真正的数组。

关于 Array.from 更多细节,可以参考 哥 翻译的第17章第一节的内容
    `
);

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
console.log(arr1);

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);

function foo() {
    var arr3 = Array.from(arguments);
    console.log(arr3);
}

function bar() {
    var arr3 = [ ... arguments];
    console.log(arr3);
}

foo(1,2,3,[4,5]);

bar(1,2,3,[4,5]);

console.log(`
Array.of 方法

Array.of(item_0, item_1, ···) 可以创建一个由 item_0、item_1 等元素组成的数组。
是弥补数组构造函数Array()的不足
`)

console.log(Array.of(1));
console.log(Array.of(1,2));

//数组的实例方法

console.log(
    `
    数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
    
    它接受三个参数:
    target（必需）：从该位置开始替换数据。
    start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
    end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
    `
);

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)

console.log(`

    数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，
    直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined

`);

[1, 4, -5, 10].find((n) => n < 0)

console.log(`
    数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
`);

[1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
}) // 2

console.log(`
    fill方法使用给定值，填充一个数组。
`);

['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]

console.log(`
    entries()，keys()和values()——用于遍历数组。
`)

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"