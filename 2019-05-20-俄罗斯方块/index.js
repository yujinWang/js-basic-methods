var canvas = document.querySelector("#canvas");
var gc = canvas.getContext("2d");
// gc.fillStyle = "red"; //填充颜色-先填充颜色，后创建方块
// gc.fillRect(100, 100, 200, 200); //创建方块

var data = initMap(12, 12);
render(data, gc);

//创建游戏地图方法-便于后面复用
function initMap(row, col) {
    var map = [];
    for (var i = 0; i < row; i++) {
        map.push([]);
        for (var j = 0; j < col; j++) {
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
    for (var i = 0; i < rowLen; i++) {
        for (var j = 0; j < colLen; j++) {
            gc.fillStyle = "#3385ff";
            // gc.fillRect(j * 40 + 15, i * 40 + 15, 30, 30);
            gc.fillRect(j * (w + 10) + 5, i * (h + 10) + 5, w, h);
        }
    }
}