const itemsArr = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsArr.length}`);

itemsArr.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
