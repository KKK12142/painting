const login_form = document.getElementById("login_form");
const h1 = document.getElementById("greeting");
login_form.addEventListener("submit", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let data = {};
    data.id = username;
    data.pw = password;
    localStorage.setItem(`${username}`, JSON.stringify(data));
});
