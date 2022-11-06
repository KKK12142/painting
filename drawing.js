const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mode = document.getElementById("mode");
const lineWidth = document.getElementById("line_width");

let canvasWidth = canvas.offsetWidth;
let canvasHeight = canvas.offsetHeight;
let drawing_mode = false; //연필모드
let painting_mode = false; // 도형 채기 모드

canvas.width = canvasWidth;
canvas.height = canvasHeight;

ctx.lineCap = "round";
ctx.lineWidth = lineWidth.value;
ctx.save();
function resiezed() {
    //화면 크기 변했을때 캔버스 크기 재설정
    // canvas.width = canvas.offsetWidth;
    // canvas.height = canvas.offsetHeight;
    ctx.restore();
}
function onMove(e) {
    if (drawing_mode) {
        if (painting_mode) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.fill();
        }
        if (drawing_mode) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
        return;
    }
    ctx.beginPath();
}
function modeChange(e) {
    if (e.target.value == "painting_mode") {
        painting_mode = true;
        // drawing_mode = false;
    }
    if (e.target.value == "drawing_mode") {
        painting_mode = false;
    }
}
function onMouseDown() {
    drawing_mode = true;
}
function onMouseUp() {
    drawing_mode = false;
}
function lineWidthChange(e) {
    ctx.lineWidth = e.target.value;
}
window.addEventListener("resize", resiezed);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
mode.addEventListener("input", modeChange);
lineWidth.addEventListener("change", lineWidthChange);
