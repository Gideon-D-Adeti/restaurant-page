export function loadContactPageContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";

  const headline = document.createElement("h2");
  headline.textContent = "Contact Us";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "We'd love to hear from you! Reach out to us through the following contact information:";

  const email = document.createElement("p");
  email.innerHTML = "<strong>Email:</strong> info@restaurant.com";
  const phone = document.createElement("p");
  phone.innerHTML = "<strong>Phone:</strong> +1 234 567 890";
  const address = document.createElement("p");
  address.innerHTML =
    "<strong>Address:</strong> 123 Main Street, City, Country";

  contactInfo.appendChild(headline);
  contactInfo.appendChild(paragraph);
  contactInfo.appendChild(email);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(address);

  content.appendChild(contactInfo);
}
