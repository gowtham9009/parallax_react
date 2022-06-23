const title = document.querySelector(".title");
const description = document.querySelector(".description");
//const effect_1 = document.querySelector(".effect-1");
const content = document.querySelector(".content");
//const about = document.querySelector(".about");
//const navbar = document.querySelector(".navbar");
if (content && description) {
    var header_height = content.offsetHeight;
    // var content_height = description.offsetHeight;
    const scroll = window.pageYOffset;
    window.onload = () => {
        window.addEventListener('scroll', () => {
            console.log(scroll);
            title.style.top = `${50 - scroll}%`
            title.style.opacity = `${-scroll / (header_height / 0.9)+0.9}`;
            description.style.opacity = `${scroll / 790 }`;

        })
    }
}