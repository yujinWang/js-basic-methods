var canvas = document.querySelector("#canvas");
var gc = canvas.getContext("2d");
// gc.fillStyle = "red"; //填充颜色-先填充颜色，后创建方块
// gc.fillRect(100, 100, 200, 200); //创建方块
var data = initMap(12, 12);
var param = 0; //用于方块向下位置移动的初始变量
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
//定义在外面确保每次调用的时候方块的形状不会发生变化
var moldArr = mold();
//更新数据-生成第一次方块
function update(y) { //y控制方块位置
  //若放在此处每次调用update时候都会重新生成一个方块
  //解决方式就是将此变量放在函数外面确保每次调用的时候方块形状不会发生变化
  // var moldArr = mold(); 
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
    // 抽取出里面的东西到另一个函数中
    // 抽取1
    // if(param > data.length - 2) {
    //   param = 0;
    //   moldArr = mold();
    // }
    //此处的++导致的结果就是方块的起始位置会从距顶部1格的位置开始
    //解决方法-将它放在函数调用后面即可
    // param++;  
    //好奇试了下将这里的参数修改下看是否执行了，想当然的参数不是可以随便定义什么的么？
    //结果是报错，4未定义，很奇怪觉得无从查起，目前想到的解释是上面定义的变量是要在这里
    //进行++的，从而无法将这个变化传递到函数调用中了，于是将上面的y修改为param，同时将
    //y++修改为param++解决此问题，得出结论，当调用和定义无外部干扰时候可以，若外部的
    //操作会影响到这个参数的话是需要注意此处的坑？
    // 抽取2
    // update(param);
    //关于函数调用前后的问题，这里需要等上面的方块生成之后再在下面将上面上一次生成的清除，否则无效
    // 抽取3
    // clearPre(param);
    // param++;
    fall();
  }, 200)
  //继续-如何清除下落过程中上一次生成的方块？该从哪个角度入手？
  //答案是参考生成方块函数，它创造了一个方块，那么我们在它里面删除那个之前的
function clearPre(y) {
  for(var i = 0; i < moldArr.length; i++) {
    for(var j = 0; j < moldArr[i].length; j++) {
      data[i + y][j + 4] = 0;
    }
  }
}
//下一步，当方块到底部的时候从上面重新生成一个新的方块
//==，程序的书写过程到底是怎样的，因为代码到这里以上部分的结果是
//当它到底部的时候方块就不动了，同时也报错了
//是立即需要去解决这个bug还是怎样？怎么看待这个问题，值得思考
//先解决方块到底部之后重新生成的问题-在setInt函数中添加方块位置条件判断
//考虑到在setInt函数中东西较多，将它里面东西抽取出来
function fall() {
  //判断条件的修改，由于每个方块的高度是不一致的，所以需要单独的对每种方块进行控制
  //param(y轴距离)加每种方块各自的高度和data.length+1比较，+1刚好方块可以在最底部消失
  //判断当方块走到底部的时候重新生成一个方块从顶部开始往下走
  //调用时候不可直接mold()这样调用，需要moldArr = mold()这样才行，相当于重新赋值
  if(param + moldArr.length >= data.length + 1) {
    param = 0;
    moldArr = mold();
  }
  //调用下面碰撞检测函数，当撞上之后再生成方块更新什么的
  // if(collideTest()) {
  //   param = 0;
  //   moldArr = mold();
  // }
  clearPre(param);
  update(param);
  param++;
}
//下一步，当新生成的方块碰到下面的方块的时候就需要停下来
//可以借鉴检测方块到底部之后的方法-返回true/false
function collideTest() {
  //条件1-当到达底部的时候
  if(param + moldArr.length >= data.length + 1) {
    return true;
  }
  //条件2-当上面的方块碰到下面的方块的时候-当从数据中检测到下面的有1的时候
  // for(var i = 0; i < moldArr.length; i++) {
  //   for(var j = 0; j < moldArr[i].length; j++) {
  //     if(data[i + param][j + 4] === 1) {
  //       return true;
  //     }
  //   }
  // }
  return false;
}