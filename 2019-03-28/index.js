//拷贝就是把父对象的属性全部拷贝给子对象
//浅拷贝-例如对象属性的复制操作，这样存在的问题是当属性
//是复杂类型的时候一个修改的话另一个也会被修改的
var father = {
  "name":"张三",
  "age":20,
  "list":[1,2,3]
};
function copy(para){
	var son = {
	  "home":"西安"
	};
	for(var k in para){
	  son[k] = para[k];
	}
	console.log(son);   //{home: "西安", name: "张三", age: 20, list: [1, 2, 3]}
}                     //测试结果进行了对象的合并，将father中的所有属性都进行了复制
var result = copy(father);

var father1 = {
	"name":"张三",
  "age":20
};
var copy1 = Object.assign({},father1); //进行简单的复制操作，拷贝了一份副本
console.log(father1);

//浅拷贝--基本类型和引用类型的浅拷贝
//基本类型的保存在栈内存中，保存的只是值，修改之后并不会将之前的修改
let a=1;      
let b=a;
console.log(b)           //1
b=2;
console.log(b)          //2
console.log(a)          //1

//引用类型-复杂数据类型，在js中一般是数组或者对象等，保存的是引用关系，一个修改引起另一个的改变
let arr1 = [1,2,3];
let arr2 = arr1;
console.log(arr2)       //[1,2,3]
arr2.push(4);
console.log(arr2)        //[1,2,3,4]
console.log(arr1)        //[1,2,3,4]

//引用类型-对象-同上面数组
let obj1={count:1,name:'grace',age:1};
let obj2 = obj1;
console.log(obj2)       //{count:1,name:'grace',age:1}
obj2.count=2;
console.log(obj1)       //{count:2,name:'grace',age:1}
console.log(obj2)      //{count:2,name:'grace',age:1}

//深拷贝-深拷贝不仅将原对象的各个属性逐个复制出去，而且将原对象
//各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上,所以
//对一个对象的修改并不会影响另一个对象。

//方法一for循环-数组
let arr11 = [1,2,3];
let arr22 = copyArr(arr11);
function copyArr(arr){
	let res=[];
	for(let i=0,length=arr11.length;i<length;i++){
	    res.push(arr11[i]);
	}
	return res;
}
console.log(arr11);  //123
console.log(arr22);  //123
arr11.push(4);
console.log(arr11);  //1234
console.log(arr22);  //123
arr22.push(5);
console.log(arr11);  //1234
console.log(arr22);  //1235

//for循环-对象
let obj11={count:1,name:'grace',age:1};
let obj22 = {};
for(let key in obj11){
  obj22[key]=obj11[key];
}
console.log(obj11); //{count:1,name:'grace',age:1}
console.log(obj22); //{count:1,name:'grace',age:1}
obj11.count = 10;
console.log(obj11); //{count:10,name:'grace',age:1}
console.log(obj22); //{count:1,name:'grace',age:1}

//es6 Object.assign 
var obj3 = {count:1,name:'grace',age:1};
var obj4 = Object.assign({},obj3);
console.log(obj3); //{count:1,name:'grace',age:1}
console.log(obj4); //{count:1,name:'grace',age:1}
obj3.count = 10;
console.log(obj3); //{count:10,name:'grace',age:1}
console.log(obj4); //{count:1,name:'grace',age:1}
obj4.name = "john";
console.log(obj3); //{count:10,name:'grace',age:1}
console.log(obj4); //{count:1,name:'john',age:1}
