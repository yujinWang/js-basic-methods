//根据对象中的id对对象进行排序
let arr1 = [{name: "zhangsan",age: 35},{name: "lisi",age: 30},{name: "wangwu",age: 40}];
function compare(parm) {
	return function (obj1,obj2) {
		let val1 = obj1[parm];
		let val2 = obj2[parm];
		return val1 - val2; //升序
		// return val2 - val1; //降序
	}
}
let resultArr = arr1.sort(compare("age"));
console.log(resultArr);