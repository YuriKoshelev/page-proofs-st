const start = document.querySelector('#start'),
    progress=document.querySelector('#progress');

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const itemsMenu = document.querySelectorAll(".menu_item");
    
    const clickHamburger = () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    };

    hamburger.addEventListener("touchstart", () => {
        clickHamburger();
        }
    );

    itemsMenu.forEach((elem) => {
        elem.addEventListener("touchstart", () => {
          clickHamburger();
        });
    });

});



