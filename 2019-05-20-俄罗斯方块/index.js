var canvas = document.querySelector("#canvas");
var gc = canvas.getContext("2d");
// gc.fillStyle = "red"; //填充颜色-先填充颜色，后创建方块
// gc.fillRect(100, 100, 200, 200); //创建方块
var data = initMap(12, 12);
var y = 0; //用于方块向下位置移动的初始变量
// render(data, gc); //初始由这里进行调用，后面需要放在更新数据，生成方块那个函数中进行调用
//因为涉及到需要变化第一个生成的方块的形状改变什么的
//创建游戏地图方法-便于后面复用
function initMap(row, col) {
  var map = [];
  for(var i = 0; i < row; i++) {
    map.push([]);
    for(var j = 0; j < col; j++) {
      map[i].push(0);
    }
  }
  return map;
}
//创建方块
//行数取自创建的地图(二维数组的长度),列数取自二维数组的某一项的长度(取第一个数组长度)
//canvas中的fillRect方法接受四个参数分别是起始点的x坐标、y坐标、方块长度、方块宽度
//fillRect中起始点坐标的设置
//横坐标起始点可利用列数j乘40实现-40比方块宽度多10可生成间隔效果
//纵坐标起始点利用行数i乘40实现-生成10的间隔效果
//初始给一合适的偏移值(15)使方块在canvas中居中
function render(data, gc) { //data创建的地图二维数组，gc创建的每一个方块
  var rowLen = data.length;
  var colLen = data[0].length;
  var w = 500 / 12 - 10;
  var h = 500 / 12 - 10;
  // update(); //里面调用了render函数，将它的调用放在定时器中
  for(var i = 0; i < rowLen; i++) {
    for(var j = 0; j < colLen; j++) {
      // 给方块不同的颜色-判断data[i][j]区分0和1添加不同的颜色
      gc.fillStyle = data[i][j] === 0 ? "#3385ff" : "#ff0000";
      // gc.fillStyle = "#3385ff";
      // gc.fillRect(j * 40 + 15, i * 40 + 15, 30, 30);
      gc.fillRect(j * (w + 10) + 5, i * (h + 10) + 5, w, h);
    }
  }
}
//生成方块函数
//基本的组成有七种从上至下分别为田、横、正L、倒L、正S、倒S、T形
//那么他们是如何变换成其他的形状的呢，留待后面答复~~~
//需要在此函数中随机返回出一个方块
function mold() {
  var randomMold = Math.floor(Math.random() * 7);
  var arr = [
    [
      [1, 1],
      [1, 1]
    ],
    [
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1],
      [1, 0, 0]
    ],
    [
      [1, 1, 1],
      [0, 0, 1]
    ],
    [
      [0, 1, 1],
      [1, 1, 0]
    ],
    [
      [1, 1, 0],
      [0, 1, 1]
    ],
    [
      [1, 1, 1],
      [0, 1, 0]
    ]
  ]
  return arr[randomMold];
}
//更新数据-生成第一次方块
var moldArr = mold();
// var moldArr = mold();
function update(moldArr) {
  //由此规律推导出方块的数据格式及方块的实现是需要思考一下的
  // data[0][0] = 1;
  // data[1][0] = 1;
  // data[2][0] = 1;
  // data[3][0] = 1;
  for(var i = 0; i < moldArr.length; i++) {
    for(var j = 0; j < moldArr[i].length; j++) {
      //j+4修改方块从上面出现的位置，也就是把data中值为1的列的位置进行修改
      data[i + y][j + 4] = moldArr[i][j];
    }
  }
  render(data, gc);
}
//下一步-如何让方块动起来
//从刚才的初始化方块的水平位置的时候可以发现只要改变列的位置即可
//那么让方块竖直移动的方法也是相同的
//关键在于要想到第一次的时候 如何水平移动 以及第二次的竖直移动能都想到解决的方法...
//之后要连续的动起来会想到定时器的-如何使用？
//下面的方式-随机生成一个方块，但是没有将上一次生成的清除-如何处理？
//下落解决，但是有两个问题1、每次出现的方块都是随机的；2、没有将上一次的方块清除
var setInter = setInterval(function() {
  // y++;
  update(arr);
}, 1000)