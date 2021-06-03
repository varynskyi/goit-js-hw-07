const amountCategories = document.querySelectorAll('li.item');
console.log(`В списке ${amountCategories.length} категории`);

for (let i = 0; i < amountCategories.length; i += 1) {
    const theThirdTitle = amountCategories[i].querySelector('h2');
console.log(`Категория: ${theThirdTitle.textContent}`);

const theThirdItem = amountCategories[i].querySelectorAll('li');
    console.log(`Колличество элементов: ${theThirdItem.length}`);
    
}



