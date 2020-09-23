const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.style.listStyle = "none";

ingredients.forEach((elem) => {
  //create elements
  const ingredientItem = document.createElement("li");

  // добавление свойств
  ingredientItem.textContent = elem;
  console.log(ingredientItem);

  //встраиваем элемент в html - документ
  ingredientsList.append(ingredientItem);
});
