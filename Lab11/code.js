// функция 
function sumOfDigits(number) {
    // преобразуем число в строку
    var numberStr = number.toString();
    var sum = 0;
    for (var i = 0; i < numberStr.length; i++) {
        // преобразуем каждый символ обратно в число и добавляем его к сумме
        sum += parseInt(numberStr[i]);
    }
    return sum;
}

// обработка отправки формы
document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault(); // предотвращаем отправку формы

    // получаем значение числа из формы
    var number = parseInt(document.getElementById("numberInput").value);

    // проверка формы
    if (isNaN(number)) {
        // если число не было введено, выводим сообщение и прерываем выполнение
        document.getElementById("result").textContent = "Пожалуйста, введите число.";
        return;
    }

    var result = sumOfDigits(number);
    document.getElementById("result").textContent = "Сумма цифр числа " + number + " равна " + result;
});

