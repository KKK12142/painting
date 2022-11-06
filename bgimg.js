const body = document.querySelector("body");

function rndNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function paintImage(n) {
    const image = new Image();
    image.src = `img/${rndNum(1, n)}.png`;
    image.classList.add("bgImage");
    body.appendChild(image);
}
paintImage(4);
