const color_picker = document.getElementById("color_picker");
const clear_btn = document.getElementById("clear_btn");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
const fill_btn = document.getElementById("fill_btn");
const eraser_btn = document.getElementById("eraser_btn");
const save_btn = document.getElementById("save_btn");
const select = document.getElementById("select");
const select_slot = document.getElementById("select_slot");
const capture_btn = document.getElementById("capture_btn");
const load_img = document.getElementById("load_img");
const logout = document.getElementById("logout");
let eraser_mode = false;
let temp_background_color = "white";

function colorChange(e) {
    const color_value = e.target.value;
    ctx.strokeStyle = color_value;
    ctx.fillStyle = color_value;
    color_picker.style.backgroundColor = color_value;
}
function colorClick(e) {
    if (eraser_mode) {
        eraserModeClick();
    }
    let color_value = e.target.dataset.color;
    ctx.strokeStyle = color_value;
    ctx.fillStyle = color_value;
    color_picker.value = color_value;
    color_picker.style.backgroundColor = color_value;
}
function clear() {
    if (eraser_mode) {
        eraserModeClick();
    }
    canvas.style.background = "white";
    temp_background_color = "white";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function fillModeClick() {
    if (eraser_mode) {
        eraserModeClick();
    }
    temp_background_color = ctx.fillStyle;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function eraserModeClick() {
    if (eraser_mode) {
        ctx.strokeStyle = color_picker.value;
        ctx.fillStyle = color_picker.value;
        eraser_btn.innerText = "⬜️ 지우개 : off";
        console.log("지우개 꺼져있음");
        eraser_mode = false;
    } else {
        ctx.strokeStyle = temp_background_color;
        ctx.fillStyle = temp_background_color;
        eraser_btn.innerText = "⬜️ 지우개 : on";
        console.log("지우개 켜져있음");
        eraser_mode = true;
    }
}
function capturebtnClick() {
    select.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    let slot = select_slot.value;
    let image = canvas.toDataURL("image/png", 1);
    localStorage.setItem(slot, image);
    const capture = document.getElementById(`${slot}`);
    capture.style.backgroundImage =
        "url(" + localStorage.getItem(`${slot}`) + ")";
    capture.style.backgroundSize = "cover";
}
function savebtnClick() {
    const url = canvas.toDataURL("image/png", 1);
    const link = document.createElement("a");
    link.href = url;
    link.download = "내그림";
    link.click();
}
function drawfillText(e) {
    const input_text = document.getElementById("input_text");
    ctx.font = `${lineWidth.value * 5}px sans-serif`;
    ctx.fillText(input_text.value, e.offsetX, e.offsetY);
}

function handleImage(e) {
    const image = new Image();
    const url = URL.createObjectURL(e.target.files[0]);
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
}
color_picker.addEventListener("input", colorChange);
colorOptions.forEach((color) => color.addEventListener("click", colorClick));
clear_btn.addEventListener("click", clear);
fill_btn.addEventListener("click", fillModeClick);
eraser_btn.addEventListener("click", eraserModeClick);
capture_btn.addEventListener("click", capturebtnClick);
save_btn.addEventListener("click", savebtnClick);
canvas.addEventListener("dblclick", drawfillText);
load_img.addEventListener("change", handleImage);
logout.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
});
