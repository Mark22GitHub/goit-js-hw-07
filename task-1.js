let list = document.querySelectorAll("#categories li.item");
let categoriesCount = list.length;
console.log(`В списке ${categoriesCount} категории.`);
list.forEach((elem, index) => {
  let h2 = document.querySelectorAll("li.item h2");
  let li = document.querySelectorAll("li.item ul");
  console.log(`Категория: ${h2[index].textContent}`);
  console.log(`Количество элементов:  ${li[index].children.length}`);
});

// ====================================================
// const list = document.querySelector('#categories');
// const items = list.querySelectorAll('.item');
// console.log(`В списке ${items.length} категории`);

// items.forEach(list => {
//     const h2 = list.querySelector('h2');
//     const nodeItems = list.querySelectorAll('li');
//     console.log(`Rатегория: ${h2.textContent}. Количество элементов: ${nodeItems.length})`);
// });
// ====================================================
