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
//const boxControls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const amountInput = document.querySelector('input'); //.value;
let startWidth = 20;
let amountNum = 0;
// console.log(amount);



 let fragment = new DocumentFragment();


function onAmount() {
    let amountNum = amountInput.value;
    console.log(amountNum);
};

console.log(amountNum);
  
function createBoxes() {
  let boxElements = [];//массив для div
    for (let i = 0; i < amountNum; i += 1) {
        console.log(i);
        const boxEl = document.createElement('div');
        let newWidth = startWidth + 10;
        startWidth = newWidth;

        console.log(newWidth);
        boxEl.style.width = newWidth + 'px'; //'${newWidth}px';
        boxEl.style.height = newWidth + 'px';
        boxEl.style.backgroundColor = getRandomHexColor();
        console.log(boxEl);

        boxElements.push(boxEl);
  
        // return startWidth; 
    };

      boxBoxes.append(...boxElements);
      console.log(boxElements);
   };

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
};

function onDestroyBtn() {
  let startWidth = 20;
  // document.querySelector('input').value = '';
  // const amountNum = 0; 
  boxBoxes.innerHTML = '';
  amountInput.value = '';
  // boxBoxes.remove(childNodes);
  return startWidth;
} ;

amountInput.addEventListener('blur', onAmount);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', onDestroyBtn);