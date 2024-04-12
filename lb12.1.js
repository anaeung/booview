document.addEventListener("DOMContentLoaded", function() {
    var link = document.getElementById("imageLink");

    // обработчик события клика по ссылке
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // открываем новое окно с заданным текстом
        var newWindow = window.open("", "_blank");
        newWindow.document.write("Данный логотип был сгенерирован с помощью нейросети Davinchi AI");
    });
});
