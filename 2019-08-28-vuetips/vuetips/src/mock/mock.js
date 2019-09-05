// 引入mockjs
const Mock = require("mockjs");

// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
const simulateData = function () {
	let data = []
	for (let i = 0; i < 8; i++) {
		let data1 = {  //此处定义再不能定义data，否则data.push(data)就会报错
			name: Random.cname(),
			date: Random.date(),
			city: Random.city()
		}
		data.push(data1) 
	}

	return {
		data: data
	}
}

export default Mock.mock('/user', 'get', simulateData);