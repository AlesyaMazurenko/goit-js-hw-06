// Задание 10 (выполнять не обязательно)​

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - 
// число. Функция создает столько <div>, сколько указано в amount и добавляет
// их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Скопировать
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


const boxBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const amountInput = document.querySelector('input'); //.value;
let startWidth = 20;

let amount = amountInput.valueAsNumber;

  
const onCreateBoxes = () => {
    for (let i = 0; i < amountInput.valueAsNumber; i += 1) {
        const boxEl = document.createElement('div');
        startWidth += 10;
        boxEl.style.width = startWidth + 'px'; 
        boxEl.style.height = startWidth + 'px';
        boxEl.style.backgroundColor = getRandomHexColor();
        boxBoxes.append(boxEl);
    };
   };

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
};

const onDestroyBtn = () => {
  startWidth = 20; 
  boxBoxes.innerHTML = '';
} 

createBtn.addEventListener('click', onCreateBoxes);
destroyBtn.addEventListener('click', onDestroyBtn);