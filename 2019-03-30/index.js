//将字符串修改为驼峰式命名-需要有特定符号的字符串，只是为了测试其方法，现实可能没有这样的东西
//使用到的方法有字符串的split-将字符串以特定的符号分割成数组
let str = "miao-wei-ke-tang";
function toTuoFeng(str){
	var arrStr=str.split('-');
	for(var i=1;i<arrStr.length;i++){
		arrStr[i]=arrStr[i].substr(0,1).toUpperCase()+arrStr[i].substr(1);
	}	
	return arrStr.join('');
}
console.log(toTuoFeng(str)); //miaoWeiKeTang

//map和forEach的区别
//forEach的返回值是undefined不可以链式调用
//map返回一个新的数组，原数组并不会改变-待更新-今日加班有点累