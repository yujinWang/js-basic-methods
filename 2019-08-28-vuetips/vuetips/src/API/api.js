function getDataTest(res) {
	let result = res.map(item=>{
		return {
			createTime: item.date,
			username: item.name,
			deptName: item.city
		}
	})
	return result;
}

export {
	getDataTest
}