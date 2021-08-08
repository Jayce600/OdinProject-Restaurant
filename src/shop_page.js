
import giftcard from './gift-card.jpg';

const shopLoad = function(){
    const page = document.createElement("div");

    const main = document.querySelector("main");
    const giftcardImg = new Image();
    giftcardImg.src = giftcard;

    const mainText = document.createElement("div");
    mainText.textContent = "BUY YOUR FAVOURITE DOGGO A $50 GIFT CARD FOR ONLY $50!!! SUCH BUSINESS MUCH WOW";
    main.appendChild(mainText);
    main.appendChild(giftcardImg);

    return page;
}

export {shopLoad}