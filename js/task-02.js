const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navItemEl = document.querySelector(".item");
const navItems = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = ingredients[i];
  navItems.push(navItemEl);
  console.log(navItemEl);
}

const navEl = document.querySelector("#ingredients");

console.log(navEl);
navEl.append(...navItems);
