
import dog from './dog.jpg';

const initialPageLoad = function(){
    const page = document.createElement("div");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    const headingText = document.createElement("h1");
    headingText.textContent = "Doggo Eats";
    heading.appendChild(headingText);

    const nav = document.createElement("nav");

    const home = document.createElement("div");
    home.classList.add("home-btn");
    const homeText = document.createElement("h2");
    homeText.textContent = "Home";
    home.appendChild(homeText);
    nav.appendChild(home);

    const menu = document.createElement("div");
    menu.classList.add("menu-btn");
    const menuText = document.createElement("h2");
    menuText.textContent = "Menu";
    menu.appendChild(menuText);
    nav.appendChild(menu);

    const shop = document.createElement("div");
    shop.classList.add("shop-btn");
    const shopText = document.createElement("h2");
    shopText.textContent = "Shop";
    shop.appendChild(shopText);
    nav.appendChild(shop);

    const contact = document.createElement("div");
    contact.classList.add("contact-btn");
    const contactText = document.createElement("h2");
    contactText.textContent = "Contact Us";
    contact.appendChild(contactText);
    nav.appendChild(contact);

    const main = document.createElement("main");
    const dogImage = new Image();
    dogImage.src = dog;
    const mainText = document.createElement("div");
    mainText.textContent = "Welcome to Doggo Eats! We have the tastiest and freshest range of food for every doggo!";
    main.appendChild(mainText);
    main.appendChild(dogImage);
    
    page.appendChild(heading);
    page.appendChild(nav);
    page.appendChild(main);

    return page;
}


export {initialPageLoad}