container = document.querySelector("#container");
list_container = document.querySelector("#list_container");
item1 = document.querySelector("#item1");
item2 = document.querySelector("#item2");
item3 = document.querySelector("#item3");

container.addEventListener("click", () => {
  console.log("container(red) clicked!");
});
list_container.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("list container(green) clicked");
});
item1.addEventListener("click", () => {
  console.log("item 1 clicked!");
});
item2.addEventListener("click", () => {
  console.log("item 2 clicked!");
});
item3.addEventListener("click", () => {
  console.log("item  3 clicked!");
});
