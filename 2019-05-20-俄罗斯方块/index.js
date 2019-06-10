var canvas = document.querySelector("#canvas");
var gc = canvas.getContext("2d");
gc.fillStyle = "red"; //填充颜色-先填充颜色，后创建方块
// gc.fillRect(100, 100, 200, 200); //创建方块

var data = initMap(12, 12);

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