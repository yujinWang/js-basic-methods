//forEach如果数组在迭代的时候被修改，则其他元素会被跳过
//因为forEach不会在迭代之前创建数组的副本
var words = ["one","two","three","four"];
words.forEach(function(item){
	console.log(item);  //one two four
	if(item === "two"){
		words.shift();
	}
})
//一个笔试题 ['1','2','3'].map(parseInt) //[1,NaN,NaN]
//若果想得到[1,2,3]正确的方式如下
function returnInt(element){
	return parseInt(element,10);
}
console.log(["1","2","3"].map(returnInt));
