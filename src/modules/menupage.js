import food1ImgSrc from "../assets/images/jollof.jpg";
import food2ImgSrc from "../assets/images/waakye.jpg";
import food3ImgSrc from "../assets/images/banku.jpg";
import food4ImgSrc from "../assets/images/fufu.jpg";
import food5ImgSrc from "../assets/images/gob3.jpg";
import food6ImgSrc from "../assets/images/kenkey.jpg";
import food7ImgSrc from "../assets/images/tilapia.jpg";
import food8ImgSrc from "../assets/images/omotuo.jpg";
import food9ImgSrc from "../assets/images/kelewele.jpg";

export function loadMenuPageContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const headlineDiv = document.createElement("div");
  const headline = document.createElement("h2");
  headline.textContent = "Our Menu";
  headlineDiv.appendChild(headline);

  const foodsDiv = document.createElement("div");
  foodsDiv.classList.add("foods");

  const food1Div = document.createElement("div");
  const food1Img = document.createElement("img");
  food1Img.alt = "Jollof Rice";
  food1Img.src = food1ImgSrc;
  food1Div.appendChild(food1Img);

  const food1Name = document.createElement("h3");
  food1Name.textContent = "Jollof Rice";
  food1Div.appendChild(food1Name);

  const food1Price = document.createElement("p");
  food1Price.textContent = "Price: GH₵134";
  food1Div.appendChild(food1Price);
  foodsDiv.appendChild(food1Div);

  const food2Div = document.createElement("div");
  const food2Img = document.createElement("img");
  food2Img.alt = "Waakye";
  food2Img.src = food2ImgSrc;
  food2Div.appendChild(food2Img);

  const food2Name = document.createElement("h3");
  food2Name.textContent = "Waakye";
  food2Div.appendChild(food2Name);

  const food2Price = document.createElement("p");
  food2Price.textContent = "Price: GH₵107";
  food2Div.appendChild(food2Price);
  foodsDiv.appendChild(food2Div);

  const food3Div = document.createElement("div");
  const food3Img = document.createElement("img");
  food3Img.alt = "Banku with Tilapia";
  food3Img.src = food3ImgSrc;
  food3Div.appendChild(food3Img);

  const food3Name = document.createElement("h3");
  food3Name.textContent = "Banku with Tilapia";
  food3Div.appendChild(food3Name);

  const food3Price = document.createElement("p");
  food3Price.textContent = "Price: GH₵161";
  food3Div.appendChild(food3Price);
  foodsDiv.appendChild(food3Div);

  const food4Div = document.createElement("div");
  const food4Img = document.createElement("img");
  food4Img.alt = "Fufu with Light Soup";
  food4Img.src = food4ImgSrc;
  food4Div.appendChild(food4Img);

  const food4Name = document.createElement("h3");
  food4Name.textContent = "Fufu with Light Soup";
  food4Div.appendChild(food4Name);

  const food4Price = document.createElement("p");
  food4Price.textContent = "Price: GH₵148";
  food4Div.appendChild(food4Price);
  foodsDiv.appendChild(food4Div);

  const food5Div = document.createElement("div");
  const food5Img = document.createElement("img");
  food5Img.alt = "Gobɛ";
  food5Img.src = food5ImgSrc;
  food5Div.appendChild(food5Img);

  const food5Name = document.createElement("h3");
  food5Name.textContent = "Gobɛ";
  food5Div.appendChild(food5Name);

  const food5Price = document.createElement("p");
  food5Price.textContent = "Price: GH₵121";
  food5Div.appendChild(food5Price);
  foodsDiv.appendChild(food5Div);

  const food6Div = document.createElement("div");
  const food6Img = document.createElement("img");
  food6Img.alt = "Kenkey with Fish and Pepper";
  food6Img.src = food6ImgSrc;
  food6Div.appendChild(food6Img);

  const food6Name = document.createElement("h3");
  food6Name.textContent = "Kenkey with Fish and Pepper";
  food6Div.appendChild(food6Name);

  const food6Price = document.createElement("p");
  food6Price.textContent = "Price: GH₵174";
  food6Div.appendChild(food6Price);
  foodsDiv.appendChild(food6Div);

  const food7Div = document.createElement("div");
  const food7Img = document.createElement("img");
  food7Img.alt = "Grilled Tilapia";
  food7Img.src = food7ImgSrc;
  food7Div.appendChild(food7Img);

  const food7Name = document.createElement("h3");
  food7Name.textContent = "Grilled Tilapia";
  food7Div.appendChild(food7Name);

  const food7Price = document.createElement("p");
  food7Price.textContent = "Price: GH₵201";
  food7Div.appendChild(food7Price);
  foodsDiv.appendChild(food7Div);

  const food8Div = document.createElement("div");
  const food8Img = document.createElement("img");
  food8Img.alt = "Omotuo with Groundnut Soup";
  food8Img.src = food8ImgSrc;
  food8Div.appendChild(food8Img);

  const food8Name = document.createElement("h3");
  food8Name.textContent = "Omotuo with Groundnut Soup";
  food8Div.appendChild(food8Name);

  const food8Price = document.createElement("p");
  food8Price.textContent = "Price: GH₵188";
  food8Div.appendChild(food8Price);
  foodsDiv.appendChild(food8Div);

  const food9Div = document.createElement("div");
  const food9Img = document.createElement("img");
  food9Img.alt = "Kelewele";
  food9Img.src = food9ImgSrc;
  food9Div.appendChild(food9Img);

  const food9Name = document.createElement("h3");
  food9Name.textContent = "Kelewele";
  food9Div.appendChild(food9Name);

  const food9Price = document.createElement("p");
  food9Price.textContent = "Price: GH₵67";
  food9Div.appendChild(food9Price);
  foodsDiv.appendChild(food9Div);

  menuDiv.appendChild(headlineDiv);
  menuDiv.appendChild(foodsDiv);

  content.appendChild(menuDiv);
}
