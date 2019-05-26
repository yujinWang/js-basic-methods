var canvas = document.querySelector("#canvas");
var gc = canvas.getContext("2d");
gc.fillStyle = "red"; //填充颜色-先填充颜色，后创建方块
gc.fillRect(100,100,200,200); //创建方块