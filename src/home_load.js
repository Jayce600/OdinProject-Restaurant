
import dog from './dog.jpg';


const homeLoad = function(){
    const page = document.createElement("div");

    const main = document.querySelector("main");
    const dogImage = new Image();
    dogImage.src = dog;
    const mainText = document.createElement("div");
    mainText.textContent = "Welcome to Doggo Eats! We have the tastiest and freshest range of food for every doggo!";
    main.appendChild(mainText);
    main.appendChild(dogImage);

    return page;
}


export {homeLoad};