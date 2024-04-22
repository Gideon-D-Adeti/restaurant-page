export function loadContactPageContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("menu");

  const headlineDiv = document.createElement("div");
  const headline = document.createElement("h2");
  headline.textContent = "Contact Us";
  headlineDiv.appendChild(headline);

  const contactInfoDiv = document.createElement("div");
  const contactInfo = document.createElement("p");
  contactInfo.textContent =
    "We'd love to hear from you! Reach out to us through the following contact information:";

  const email = document.createElement("p");
  email.innerHTML = "<strong>Email:</strong> info@restaurant.com";
  const phone = document.createElement("p");
  phone.innerHTML = "<strong>Phone:</strong> +1 234 567 890";
  const address = document.createElement("p");
  address.innerHTML =
    "<strong>Address:</strong> 123 Main Street, City, Country";

  contactInfoDiv.appendChild(contactInfo);
  contactInfoDiv.appendChild(email);
  contactInfoDiv.appendChild(phone);
  contactInfoDiv.appendChild(address);

  contactDiv.appendChild(headlineDiv);
  contactDiv.appendChild(contactInfoDiv);

  content.appendChild(contactDiv);
}
