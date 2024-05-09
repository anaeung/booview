function validateForm() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;
    var name = document.getElementById("name").value; // Добавлено получение имени

    if (!email.includes("@")) {
        alert("Пожалуйста, введите корректный адрес почты");
        return false;
    }

    if (subject.trim() === "") {
        alert("Поле заголовка не должно быть пустым, пожалуйста, введите данные");
        return false;
    }

    if (description.trim() === "") {
        alert("Поле описания не должно быть пустым, пожалуйста, введите данные");
        return false;
    }

    if (description.length > 500) {
        alert("Описание превышает 500 символов, пожалуйста, сократите своё обращение");
        return false;
    }

    // Если форма прошла все проверки, вызываем функцию для отображения данных
    displayUserData(name); 

    return true;
}

function displayUserData(name) {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var type = document.getElementById("type").value;
    var section = document.getElementById("section").value;
    var platform = document.querySelector('input[name="platform"]:checked').nextSibling.textContent.trim();
    var description = document.getElementById("description").value;

    var userDataString =
        "Имя пользователя: " + name + "\n" +
        "Email: " + email + "\n" +
        "Заголовок: " + subject + "\n" +
        "Тип обращения: " + type + "\n" +
        "Раздел: " + section + "\n" +
        "Платформа: " + platform + "\n" +
        "Описание: " + description;

    alert(userDataString);
}
// Изменение стиля css
window.onload = function() {
    var storedStyle = localStorage.getItem("currentStyle");
    var stylesheet = document.getElementById("mainStylesheet");

    if (storedStyle && stylesheet.getAttribute("href") !== storedStyle) {
        stylesheet.setAttribute("href", storedStyle);
    }
}

function changeStylesheet() {
    var stylesheet = document.getElementById("mainStylesheet");

    if (stylesheet.getAttribute("href") === "files/styles.css") {
        stylesheet.setAttribute("href", "files/dark_styles.css");
        document.getElementById("logoImg").src = "img/logoD.png"; 
        localStorage.setItem("currentStyle", "files/dark_styles.css"); 
    } else {
        stylesheet.setAttribute("href", "files/styles.css");
        document.getElementById("logoImg").src = "img/logo.png"; 
        localStorage.setItem("currentStyle", "files/styles.css"); 
    }
}
