import food1 from './food-banner.png';
import food2 from './food1.jpg';

const menuPageLoad = function(){
    const page = document.createElement("div");
    
        const main = document.querySelector("main");

        const mainBannerText  = document.createElement("div");
        mainBannerText.textContent = "Many different types of foods!";
        main.appendChild(mainBannerText);

        const foodBanner = new Image();
        foodBanner.src = food1;
        foodBanner.style.width = "100%";
        main.appendChild(foodBanner);

        const mainFoodText = document.createElement("div");
        mainFoodText.textContent = "We have tacos and drinks and vegetarian burgers we even have turtles CARRYING DONUTS MUCH WOW!";
        main.appendChild(mainFoodText);

        const foodImg2 = new Image();
        foodImg2.src = food2;
        foodImg2.style.width = "80%";
        main.appendChild(foodImg2);
    
        return page;
}

export {menuPageLoad};