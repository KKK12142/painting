const API_KEY = "69d13854645e68f12c6b678488436edb";

function onGeoOk(e) {
    const lat = e.coords.latitude;
    const lon = e.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temp = document.querySelector("#weather span:first-child");
            const where = document.querySelector("#weather span:nth-child(2)");
            const icon = document.querySelector("#weather span:last-child");
            temp.innerHTML = `${data.main.temp}°C`;
            where.innerHTML = `${data.name}`;
            icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" />`;
        });
}
function ongeoError() {
    alert("현재위치를 찾을수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, ongeoError);
