import slideMenu from "./menu.js";

slideMenu({
    openBtn: '.header__burger-btn',
    menu: '.navigation',
    classActive: 'navigation_active',
    closeTrigger: '.navigation__link, .navigation__close',
});
