// 回文指的是一个字符串忽略标点符号，大小写和空格之后正着读和反着读一模一样
function RaceCar(str) {
	str = str.replace(/\s/g, "").toLowerCase();
	return str === str.split("").reverse().join("");
}
// 下面的书写错误的写法
// 错误的原因在于return左边的str是未进行处理的"e ye"而右边的是处理完成的"eye"
// 要进行后面的处理首先第一件需要做的事情是首先将str处理为去除空格和大小写转换再后续操作
function racecar(str) {
	return str === str.replace(/\s/g, "").split("").reverse().join("");
}
console.log(RaceCar("e yE"));          // true
console.log(RaceCar("123"));           // false
console.log(RaceCar("121"));           // true
console.log(RaceCar("12 1"));          // true
console.log(RaceCar("中国"));          // false
console.log(RaceCar("中国中"));         // true
console.log(RaceCar("中国 中"));        // true

//去除字符串末尾的特殊字符-例如"-"等 
//想到此方法的缘故-在做项目时的一个传参数时候将参数组装为一个字符串各个参数以"-"分割
//由于组装的过程是进行字符串的累加的所以末尾会多一个"-"于是有下面的一点简单处理
let str1 = "name-name1-name2--";
//方法一-使用字符串substring()方法
console.log(str1.substring(0,str1.length - 1));
//方法二-使用正则匹配末尾的字符并替换为空-使用的到是字符串的replace方法
console.log(str1.replace(/-*$/,"")); //可以删除末尾的任意多个相同的字符

