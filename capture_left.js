const capturedImg = Array.from(document.getElementsByClassName("sidebar"));
const deleteBtn = Array.from(document.getElementsByClassName("delete"));
window.onload = function () {
    for (let i = 0; i <= localStorage.length; i++) {
        if (
            localStorage.key(i) !== null &&
            localStorage.key(i).startsWith("sidebar")
        ) {
            let capture = document.getElementById(`${localStorage.key(i)}`);
            capture.style.backgroundImage =
                "url(" + localStorage.getItem(`${localStorage.key(i)}`) + ")";
            capture.style.backgroundSize = "cover";
        } else if (localStorage.key(i).startsWith("sidebar") == false) {
            h1.innerText = `어서오세요 ${localStorage.key(i)}님`;
        }
    }
};

function capturedimgClick(e) {
    const image = new Image();
    image.src = localStorage.getItem(e.target.id);
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
    };
}

function deletebtnClick(e) {
    if (
        localStorage.getItem(e.target.parentNode.id) !== null &&
        confirm("정말 삭제하시겠습니까?")
    ) {
        e.target.parentNode.style.backgroundImage = "none";
        localStorage.removeItem(e.target.parentNode.id);
    }
}
deleteBtn.forEach((btn) => btn.addEventListener("click", deletebtnClick));
capturedImg.forEach((slot) => slot.addEventListener("click", capturedimgClick));
