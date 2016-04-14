//字符串的扩展和数字的扩展
console.log(
    `
includes(), startsWith(), endsWith()
    
    includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
    `
);

var str1 = 'Hello world!';

str1.startsWith('Hello') // true
str1.endsWith('!') // true
str1.includes('o') // true

var str2 = 'Hello world!';

str2.startsWith('world', 6) // true
str2.endsWith('Hello', 5) // true
str2.includes('Hello', 6) // false

/**
 * 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
 */

console.log(`
    repeat()
    repeat方法返回一个新字符串，表示将原字符串重复n次。
`)


'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) //

//字符串模板

//数字的扩展, 具体增加了一些新方法, 具体请翻书查阅