export function loadMenuPageContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuInfo = document.createElement("div");
  menuInfo.id = "menu-info";

  const headline = document.createElement("h2");
  headline.textContent = "Our Menu";

  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  const item1Name = document.createElement("h3");
  item1Name.textContent = "Specialty Dish";
  const item1Description = document.createElement("p");
  item1Description.textContent =
    "A delicious specialty dish made with the finest ingredients.";
  menuItem1.appendChild(item1Name);
  menuItem1.appendChild(item1Description);

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  const item2Name = document.createElement("h3");
  item2Name.textContent = "Chef's Special";
  const item2Description = document.createElement("p");
  item2Description.textContent =
    "An exquisite dish crafted by our talented chef.";
  menuItem2.appendChild(item2Name);
  menuItem2.appendChild(item2Description);

  menuInfo.appendChild(headline);
  menuInfo.appendChild(menuItem1);
  menuInfo.appendChild(menuItem2);

  content.appendChild(menuInfo);
}
