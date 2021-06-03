const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsS = document.querySelector('#ingredients');
const item = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  return element;
});
ingredientsS.append(...item);
