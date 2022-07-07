// Задание 9​

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн 
// стиль при клике на button.change-color и выводит значение цвета в span.color.

const widgetDiv = document.querySelector('.widget');
const textSpan = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
const bodyElem = widgetDiv.parentNode;
console.log(bodyElem);

function changeBgColor () {
  const newColor = getRandomHexColor();
    console.log(newColor);
    bodyElem.style.backgroundColor = newColor;
    textSpan.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColor.addEventListener("click", changeBgColor);
