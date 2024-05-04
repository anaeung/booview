// функция формы службы поддержки
        function validateForm() {
            var email = document.getElementById("email").value;
            var subject = document.getElementById("subject").value;
            var description = document.getElementById("description").value;

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
                alert("Описание привышает 500 символов, пожалуйста, сократите свое обращение");
                return false;
            }

            // Если форма прошла все проверки, вызываем функцию для отображения данных
            displayUserData();

            return true; 
        }

	function displayUserData() {
		var email = document.getElementById("email").value;
		var subject = document.getElementById("subject").value;
		var type = document.getElementById("type").value;
		var section = document.getElementById("section").value;
	var platform = document.querySelector('input[name="platform"]:checked').nextSibling.textContent.trim();
		var description = document.getElementById("description").value;

		var userDataString =
			"Email: " + email + "\n" +
			"Заголовок: " + subject + "\n" +
			"Тип обращения: " + type + "\n" +
			"Раздел: " + section + "\n" +
			"Платформа: " + platform + "\n" +
			"Описание: " + description;
			

		alert(userDataString);
	}
	document.getElementById("userDataContainer").innerHTML = userDataString;



