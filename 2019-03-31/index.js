  // 删除数组中的所有假值 有false null 0 "" undefined NaN
	// 下面第一种方法有点百转千回的感觉 首先判断出排除NaN的情况
	// 实际情况是开始认为直接通过num排除那些不符合的情况即可 但是
	// 后来发现是不能通过num!=NaN的方式来判断一个值是否是NaN的……
	// 于是又增加了一层的for循环来排除这个假值 那个其实就是下面的第二种方式
	var arr = [10, 11, 12, 13, 14, undefined, false, null, 0, "", NaN];
		var arr1 = arr.filter(function (num) {
			return num != undefined & num != false & num != null & num != 0 & num != "";  // &num!=NaN
	});
	var arr3 = [];
			for (var i = 0; i < arr1.length; i++) {
				if (arr[i]) {
			arr3.push(arr[i]);
		}
	}
console.log(arr3);
// 下面的这种方法更加易于理解 通过遍历数组当这个数组的元素存在的时候将这一项
// 添加到新数组中最后返回即可
		function select(arr) {
			var arr2 = [];
			for (var i = 0; i < arr.length; i++) {
				if (arr[i]) {
					arr2.push(arr[i]);
				}
			}
		return arr2;
		}
console.log(select([10, 11, 12, 13, 14, undefined, false, null, 0, "", NaN]));

//关于数组的filter方法
//传入的是一个函数，对数组进行条件过滤
console.log([1, 2, 3, 4, 5, 6].filter(item=>item>3)); //4,5,6

