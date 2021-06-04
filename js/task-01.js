//1
const amountCategories = document.querySelectorAll('li.item');
console.log(`В списке ${amountCategories.length} категории`);

for (let i = 0; i < amountCategories.length; i += 1) {
    const title = amountCategories[i].querySelector('h2');
    const item = amountCategories[i].querySelectorAll('li');
    console.log(`Категория: ${title.textContent}
Колличество элементов: ${item.length}`);
 
}

//2
const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
    .map(
        categories => {
            console.log(`Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
    )});
