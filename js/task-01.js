const amountCategories = document.querySelectorAll('li.item');
console.log(`В списке ${amountCategories.length} категории`);

for (let i = 0; i < amountCategories.length; i += 1) {
    const title = amountCategories[i].querySelector('h2');
console.log(`Категория: ${title.textContent}`);

const item = amountCategories[i].querySelectorAll('li');
    console.log(`Колличество элементов: ${item.length}`);
    
}



