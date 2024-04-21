import './index.css'
import { loadHomePageContent } from "./modules/homepage.js";
import { loadMenuPageContent } from "./modules/menupage.js";
import { loadContactPageContent } from "./modules/contactpage.js";

document.addEventListener("DOMContentLoaded", function () {
  loadHomePageContent();

  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const contactBtn = document.getElementById("contact-btn");

  homeBtn.addEventListener("click", function () {
    loadHomePageContent();
  });

  menuBtn.addEventListener("click", function () {
    loadMenuPageContent();
  });

  contactBtn.addEventListener("click", function () {
    loadContactPageContent();
  });
});
