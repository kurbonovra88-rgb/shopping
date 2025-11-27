// Переключение страниц
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

// Авторизация
function login() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    const msg = document.getElementById("loginMsg");

    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.innerText = "Успешный вход!";
    } else {
        msg.style.color = "red";
        msg.innerText = "Неверный логин или пароль.";
    }
}
