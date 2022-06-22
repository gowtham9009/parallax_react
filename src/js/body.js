const title = document.querySelector(".title");
const description = document.querySelector(".description");
//const effect_1 = document.querySelector(".effect-1");
const content = document.querySelector(".content");
//const about = document.querySelector(".about");
//const navbar = document.querySelector(".navbar");

let header_height = content.offsetHeight;
let content_height = -description.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    title.style.opacity = -scroll / (header_height / 0.9) + 1;
    description.style.opacity = -scroll / (content_height / 1) - 0.8;

})