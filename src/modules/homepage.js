import ImageSrc from "../assets/images/restaurant-image.jpg";

export function loadHomePageContent() {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const restaurantImage = document.createElement("img");
  restaurantImage.id = "restaurant-image";
  restaurantImage.src = ImageSrc;
  restaurantImage.alt = "Restaurant Image";

  const restaurantInfo = document.createElement("div");
  restaurantInfo.id = "restaurant-info";

  const headline = document.createElement("h2");
  headline.textContent = "Welcome to Our Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Experience the finest dining experience at our restaurant. We take pride in offering a diverse menu of high-quality dishes prepared with fresh, locally-sourced ingredients. Whether you're looking for a romantic dinner, a family gathering, or a casual meal with friends, we have something for everyone.";

  restaurantInfo.appendChild(headline);
  restaurantInfo.appendChild(paragraph);

  content.appendChild(restaurantImage);
  content.appendChild(restaurantInfo);
}
