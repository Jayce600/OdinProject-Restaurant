
// importing the necessary js files and css files
import {initialPageLoad} from './pageload.js';
import {menuPageLoad} from './menu_page.js';
import {homeLoad} from './home_load.js';
import {contactLoad} from './contact_page';
import {shopLoad} from './shop_page.js';
import './style.css';

// initial page loading
const content = document.querySelector("#content");
content.appendChild(initialPageLoad());
const main = document.querySelector("main");

// adding event listeners to the nav bar
const homeButton = document.querySelector(".home-btn");
homeButton.addEventListener("click",function(){
    clear();
    content.appendChild(homeLoad());
})

const menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click",function(){
    clear();
    content.appendChild(menuPageLoad());
})

const shopButton = document.querySelector(".shop-btn");
shopButton.addEventListener("click",function(){
    clear();
    content.appendChild(shopLoad());
})

const contactButton = document.querySelector(".contact-btn");
contactButton.addEventListener("click", function(){
    clear();
    content.appendChild(contactLoad());
})

// function to clear the old main
function clear(){
    while (main.firstChild){
        main.removeChild(main.firstChild);
    }
}