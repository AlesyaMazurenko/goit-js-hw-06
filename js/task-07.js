// Задание 7​

// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль 
// span#text обновляя свойство font-size. 
//В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputFontSize = document.querySelector('#font-size-control');
const spanFontSize = document.querySelector('#text');

inputFontSize.addEventListener("change", onSubjectEvent);

function onSubjectEvent() {
    const newFontSize = inputFontSize.valueAsNumber;
    spanFontSize.style.fontSize = `${newFontSize}px`;

    console.log(newFontSize);
}
