//停更了半个多月，之前的疯狂加班结果身体有点吃不消了
//有点眩晕，现在身体已经恢复，继续记录点东西吧
//在做项目时候遇到的一个问题，场景描述如下
//结合vue项目结合element需要进行批量删除一些东西
//后台需要传递的数据格式是一个list基本的格式如下
//list = {procodeList: {"123","456","789"}}
//但是前端而言是无法组装这样的数据的(没想到es6的set数据格式)，于是在当时的解决方式是以字符串的方式
//set即可实现这样的数据方式 so young so native
//将他们连接起来，中间以横杠-进行分割
let list = new Set();
list.add("1");
list.add("2");
list.add("3");
console.log(list);   
let params = {};
params.procodeList = list;
console.log(params);  //{procodeList: {"1", "2", "3"}}

//ssh测试 3 3