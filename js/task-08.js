// Задание 8​

// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, собери значения полей в 
// обьект, где имя поля будет именем свойства, а значение поля - значением 
// свойства. Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const targetBtn = document.querySelector("submit");

const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formLogin.email.value;
    const password = formLogin.password.value;

    if (email === "" || password === "") {
        alert('Bсе поля должны быть заполнены!');
    } else {   
        const formData = {
        email,
        password,
    };
    console.log(formData);
    return formLogin.reset();
};
}
