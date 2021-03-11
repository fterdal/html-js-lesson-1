// 1. Find the DOM elements
const numCompleted = document.getElementById("num-completed");
const shoppingList = document.getElementById("shopping-list");

console.log(numCompleted, shoppingList);

function incrementCompleted() {
  const current = Number(numCompleted.innerText);
  console.log(typeof current);
  numCompleted.innerText = current + 1;
}
