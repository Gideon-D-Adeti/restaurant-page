import ImageSrc from "../assets/images/restaurant-image.jpg";

export function loadHomePageContent() {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const headlineDiv = document.createElement("div");
  const headline = document.createElement("h2");
  headline.textContent = "Welcome to Strange World Restaurant";
  headlineDiv.appendChild(headline);

  const restaurantImageDiv = document.createElement("div");
  const restaurantImage = document.createElement("img");
  restaurantImage.id = "restaurant-image";
  restaurantImage.src = ImageSrc;
  restaurantImage.alt = "Restaurant Image";
  restaurantImageDiv.appendChild(restaurantImage);

  const restaurantInfoDiv = document.createElement("div");
  const restaurantInfo = document.createElement("p");
  restaurantInfo.textContent =
    "Experience the finest dining experience at our restaurant. We take pride in offering a diverse menu of high-quality dishes prepared with fresh, locally-sourced ingredients. Whether you're looking for a romantic dinner, a family gathering, or a casual meal with friends, we have something for everyone.";
  restaurantInfoDiv.appendChild(restaurantInfo);

  homeDiv.appendChild(headlineDiv);
  homeDiv.appendChild(restaurantImageDiv);
  homeDiv.appendChild(restaurantInfoDiv);

  content.append(homeDiv);
}
