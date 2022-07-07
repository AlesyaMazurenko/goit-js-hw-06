const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientsListContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {

  const listElement = document.createElement('li'); 
  listElement.textContent = ingredient;
  listElement.classList.add('item');
  return listElement;
});

ingredientsListContainerEl.append(...elements);
