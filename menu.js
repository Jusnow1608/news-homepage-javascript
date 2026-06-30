const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".menu-hamburger");
const x_button = document.querySelector(".menu-close");

function toggleMenu(isOpen) {
    if (isOpen) {
        menu.classList.add("open");
        x_button.classList.add("open");
        hamburger.setAttribute("aria-expanded", "true");
    } else {
        menu.classList.remove("open");
        x_button.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    }
}

hamburger.addEventListener("click", () => toggleMenu(true));

x_button.addEventListener("click", () => toggleMenu(false));


document.addEventListener("click", (e) => {
    if (menu.classList.contains("open") && !e.target.closest(".menu") && !e.target.closest(".menu-hamburger")) {
        toggleMenu(false);
    }
});

const desktopMediaQuery = window.matchMedia("(min-width: 64rem)");

function handleDesktopChange(e) {
    if (e.matches) {
        toggleMenu(false);
    }
}

desktopMediaQuery.addEventListener("change", handleDesktopChange);

