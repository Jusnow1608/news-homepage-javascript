const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".menu-hamburger");
const x_button = document.querySelector(".menu-close");

function toggleMenu(isOpen) {

    menu.classList.toggle("open", isOpen);
    x_button.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
       x_button.focus();     
      
    } else {
       hamburger.focus();  
    }
}

hamburger.addEventListener("click", () => toggleMenu(true));

x_button.addEventListener("click", () => toggleMenu(false));


document.addEventListener("click", (e) => {
    if (menu.classList.contains("open") && !e.target.closest(".menu") && !e.target.closest(".menu-hamburger")) {
        toggleMenu(false);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
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

