//Promise
//基本用法
console.log(`
    ES6规定. Promise对象是一个构造函数, 用来生成Promise实例
`);

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});

let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('Resolved.');
});

console.log('Hi!');
