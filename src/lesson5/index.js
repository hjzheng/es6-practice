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