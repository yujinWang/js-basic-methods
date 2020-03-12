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

Mock.mock('/user', 'get', simulateData);

// 登录模拟数据
// 引入处理文件
const loginApi = require("../API/login");
// console.log(123, loginApi.loginByEmail);
const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: 'Super Admin',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    name: 'Normal Editor',
    uid: '002'


  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    name: '工程师小王',
    uid: '003'
  }
}

export default {
  loginByEmail: config => {
    const { email } = JSON.parse(config.body);
    return userMap[email.split('@')[0]];
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('a');
    }
  },
  logout: () => 'success'
};

Mock.mock(/\/login\/loginbyemail/, 'post', loginApi.loginByEmail);

// mock测试数据
const testMock = function () {
  return "mock返回的数据"
}

Mock.mock(/\/login\/loginbyemail/, 'post', testMock);