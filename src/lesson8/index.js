//set 和 map
console.log(`
    Set
    Set本身是一个构造函数, 用来生成Set的数据结构
`);

var s = new Set();
[2,3,4,5,6].map(x => s.add(x));

for(let i of s) {
    console.log(i);
}

console.log(`
    Set 函数可以接受一个数组(或类似数组对象)作为参数, 用来初始化
`);

var set = new Set([1,2,3,4,5]);
[...set];

var items = new Set([1,2,3]);
items.size;

function divs() {
    return [... document.querySelectorAll('div')];
}

var set = new Set(divs());
set.size;

divs().forEach(div => set.add(div));
set.size;

console.log(`
    往set加入值得时候, 不会发生类型转换, 所以 5 和 "5" 是两个不同的值. set 内部判定两个值是否相等
    使用的是 === 主要区别是 NaN 等于自身, 而精确相等运算符认为 NaN 不等于自身
    与 Object.is 不同
`);

console.log(`
    Set的实例属性和方法
    - Set.prototype.constructor: 构造函数, 默认就是Set函数
    - Set.prototype.size: 返回Set实例的成员总数
`);

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

console.log(...dedupe([1,1,2,3])) // 1 2 3


//遍历操作

//Set的结构的四种遍历操作

var set = new Set(['red', 'green', 'blue']);

for ( let item of set.keys() ){
    console.log(item);
}
// red
// green
// blue

for ( let item of set.values() ){
    console.log(item);
}
// red
// green
// blue

for ( let item of set.entries() ){
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

for (let x of set) {
    console.log(x);
}

let arr = [...set];
console.log(arr);

//数组去重
let arr1 = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr1)];
console.log(unique);

let set2 = new Set([1, 2, 3]);
set2 = new Set([...set2].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set3 = new Set([1, 2, 3, 4, 5]);
set3 = new Set([...set3].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// [1, 2, 3, 4]

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// [2, 3]

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));


console.log(`
    WeakSet 省略
`);

console.log(`
    Map 
    ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
    也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。
`);


var m = new Map();
var o = {p: "Hello World"};

m.set(o, "content")
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false

console.log(`
    作为构造函数 Map也可以接受一个数组作为参数, 然后 get 方法读取这个键, 接着使用detect方法删除这个键
`)


var map = new Map([["name", "张三"], ["title", "Author"]]);

map.size // 2
map.has("name") // true
map.get("name") // "张三"
map.has("title") // true
map.get("title") // "Author"

//注意，只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心。

var map = new Map();

map.set(['a'], 555);
console.log(map.get(['a'])) // undefined

//同理，同样的值的两个实例，在Map结构中被视为两个键。

var map = new Map();

var k1 = ['a'];
var k2 = ['a'];

map
    .set(k1, 111)
    .set(k2, 222);

map.get(k1) // 111
map.get(k2) // 222


//如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键，包括0和-0。
// 另外，虽然NaN不严格相等于自身，但Map将其视为同一个键。

console.log(`
    Map的实例属性和操作方法
    
    size属性  set(key, value)方法 get(key)方法 has(key)方法 delete(key) clear()方法
`);

console.log(`
    Map原生提供三个遍历器生成函数和一个遍历方法。

    keys()：返回键名的遍历器。
    values()：返回键值的遍历器。
    entries()：返回所有成员的遍历器。
    forEach()：遍历Map的所有成员。
`);


var map = new Map([
    ['F', 'no'],
    ['T',  'yes'],
]);

for (let key of map.keys()) {
    console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
    console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
    console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
    console.log(key, value);
}

// 等同于使用map.entries()
for (let [key, value] of map) {
    console.log(key, value);
}


console.log(`与其他数组结构的转换`)

//Map转成数组

console.log([...map]);

//数组转Map
var map = new Map([...map]);


//Map转对象
//如果所有的Map键都是字符串, 它可以转为对象

function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap);

//对象转Map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

objToStrMap({yes: true, no: false});


//Map 与 JSON 互相转化

console.log(`
    WeakMap 省略
`);
