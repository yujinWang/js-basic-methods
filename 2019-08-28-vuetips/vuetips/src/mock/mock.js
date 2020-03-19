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

Mock.mock('/user', simulateData);

// 登录信息
const tokens = {
  admin: {
    token: "admin-token"
  },
  editor: {
    token: "editor-token"
  }
}

// Mock.mock('/user/login222', 'post', loginData);
// http://mockjs.com/examples.html mock官网
// console.log(Mock.mock({
//   "string|1-10": "★"
// }))

Mock.mock('/user/login', function (config) {
  const username = JSON.parse(config.body).username;
  const token = tokens[username];
  // 之前未返回data值导致在store/modules/user中调用此接口无返回数据 WTF
  if (!token) {
    return {
      code: 66666,
      message: "无权限"
    }
  }
  return {
    code: 20000,
    data: token
  }
});

Mock.mock('/user/info', function (config) {
  console.log(config);
  // return "hello world";
  // const username = config.body.split("&")[0].split("=")[1];
  // const token = tokens[username];
  // if (!token) {
  //   return {
  //     code: 66666,
  //     message: "无权限"
  //   }
  // }
  // return {
  //   code: 20000,
  //   data: token
  // }
});