const shoppingList = Array.from(
  document.getElementById("shopping-list").children
);

function incrementCompleted() {
  const numCompleted = document.getElementById("num-completed");
  const current = +numCompleted.innerText;
  numCompleted.innerText = current + 1;
}

shoppingList.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    listItem.style.textDecoration = "line-through";
    incrementCompleted();
  });
});
