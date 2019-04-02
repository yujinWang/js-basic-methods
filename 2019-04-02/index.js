// 字符串截取算法挑战 根据指定的num截取指定长度的字符数量然后多余的部分
// 使用...来表示 切记插入到字符串末尾的三个点号也会计入字符串的长度
// 但是当指定的num小于或者等于3的时候则加入的三个点号不会计入字符串的长度
// 使用的方法应该有slice截取字符串片段
// 大体实现步骤--先用num和字符串的长度进行比较然后再在里面进行其他的和3的比较
// 注意去除截取到的字符串的末尾的空格-用正则匹配末尾空格替换实现
//正则表达式中的\s匹配空格-匹配后面的空格并将空格替换为空字符串
function truncate(str, num) {
	if (num < str.length) {
		return str.slice(0, num).replace(/\s$/g, "") + "...";
	} else {
		// if(num>3){ //若字符串的长度小于截取长度会带省略号
		//     return str;
		// }else{
		//     return str+"...";
		// }
		return str; //字符串长度小于截取长度不会带省略号，直接返回本身
	}
}
console.log(truncate("this is a beautiful girl", 5));  // this...
console.log(truncate("this is a beautiful girl", 1));  // t...
console.log(truncate("this is a beautiful girl", 8));  // this is...
console.log(truncate("this is a beautiful girl", "this is a beautiful girl".length));  // this is...
console.log(truncate("t", 1));  // t...
console.log(truncate("t", 3));  // t...