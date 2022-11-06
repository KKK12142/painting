const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `지금 시간은 ${hours}시${minutes}분${seconds}초 입니다.`;
}
window.onload = function () {
    getClock();
};

setInterval(getClock, 1000);
