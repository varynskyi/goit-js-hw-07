const amountCategories = document.querySelectorAll('li.item');
console.log(`В списке ${amountCategories.length} категории`);

const firstTitle = amountCategories[0].querySelector('h2');
console.log(`Категория: ${firstTitle.textContent}`);

const firstItem = amountCategories[0].querySelectorAll('li');
console.log(`Колличество элементов: ${firstItem.length}`);

const secondTitle = amountCategories[1].querySelector('h2');
console.log(`Категория: ${secondTitle.textContent}`);

const secondItem = amountCategories[1].querySelectorAll('li');
console.log(`Колличество элементов: ${secondItem.length}`);

const theThirdTitle = amountCategories[2].querySelector('h2');
console.log(`Категория: ${theThirdTitle.textContent}`);

const theThirdItem = amountCategories[2].querySelectorAll('li');
console.log(`Колличество элементов: ${theThirdItem.length}`);


