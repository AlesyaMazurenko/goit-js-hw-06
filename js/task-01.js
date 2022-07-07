// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет 
// в консоль текст заголовка элемента (тега <h2>) и количество элементов в
// категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const listCategories = document.querySelector("#categories");

const categories = listCategories.children.length;
console.log(`Number of categories: ` + categories);

const childItems = listCategories.children;
// console.log(childItems);

for (let i = 0; i < categories; i += 1) {
    const itemName = childItems[i].firstElementChild.textContent;
    const countItems = childItems[i].lastElementChild.children.length;

    console.log(`Category: ` + itemName); 
    console.log(`Elements: ` + countItems);
};
















