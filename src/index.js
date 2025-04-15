import "./styles.css";
import { generateHomePage } from "./home.js";
import { generateEfoRiro } from "./menu/efo-riro.js";
import { generateEgusiSoup } from "./menu/egusi-soup.js";
import { generateWaakye } from "./menu/waakye.js";
import { generateContact } from "./contact.js";
import { generateMenu } from "./menu/menu.js";

const homePageEle = document.getElementById("content");
homePageEle.innerHTML = generateHomePage();


const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener('click', () => {
    homePageEle.innerHTML = generateHomePage();
});

menuBtn.addEventListener('click', () => {
    homePageEle.innerHTML = generateMenu();
});

contactBtn.addEventListener('click', () => {
    homePageEle.innerHTML = generateContact();
});

// console.log(generateHomePage());
// console.log(generateEfoRiro());
// console.log(generateEgusiSoup());
// console.log(generateWaakye());
// console.log(generateContact());
// console.log(generateMenu());