const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".menu-humburger");
const x_button = document.querySelector(".menu-close");

hamburger.addEventListener("click", () => {
    menu.classList.add("open");
    x_button.classList.add("open");
});

x_button.addEventListener("click", () => {
    menu.classList.remove("open");
    x_button.classList.remove("open");
});


document.body.addEventListener("click", (e) => {

    if (menu.classList.contains("open") && !e.target.closest(".menu") && !e.target.closest(".menu-humburger")) {
        menu.classList.remove("open");
        x_button.classList.remove("open");
    }
});


window.addEventListener("resize", () => {
    if (window.innerWidth > 765) {
        menu.classList.remove("open");
        x_button.classList.remove("open");
    }
});

