
import phone from './phone.jpg';

const contactLoad = function(){
    const page = document.createElement("div");

    const main = document.querySelector("main");
    const phoneImg = new Image();
    phoneImg.src = phone;

    const mainText = document.createElement("div");
    mainText.textContent = "CALL US TODAY ON 1300 - DOGGO EATS!";
    main.appendChild(mainText);
    main.appendChild(phoneImg);

    return page;
}

export {contactLoad}