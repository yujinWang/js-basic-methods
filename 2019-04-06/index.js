// 我们会传递给你一个包含两个数字的数组，返回这两个数字和他们之间所有数字的和
// 小的那个数字并非都排在最前面的
// 首先需要知道的一个数组方法是reduce()他里面接受一个函数 函数带有两个参数a b
// 最后返回的是a+b 返回的就是这个数组的和 
// 那么首先就需要得到这个完整的数组根据这个数组的最大值和最小值
// 之后通过循环得到这个数组中的所有元素然后通过push方法添加到一个新空数组中
// 之后通过reduce()方法求和即可 最后返回
function sumAll(arr) {
	var min = Math.min.apply(Math, arr);
	var max = Math.max.apply(Math, arr);
	var arr1 = [];
	for (var i = min; i <= max; i++) {
		arr1.push(i);
	}
	var sum = arr1.reduce(function (a, b) {
		return a + b;
	})
	return sum;
}
console.log(sumAll([1, 4]));   // 10
console.log(sumAll([4, 1]));   // 10
console.log(sumAll([0, 4]));   // 10
console.log(sumAll([3, 4]));   // 7
