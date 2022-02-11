const openMenu = (menu, classActive) => {
    menu.classList.add(classActive);
};

const closeMenu = (menu, classActive) => {
    menu.classList.remove(classActive);
};

const slideMenu = ({openBtn, menu, classActive, closeTrigger}) => {
    const burgerBtn = document.querySelector(openBtn);
    const nav = document.querySelector(menu);
    const navClose = document.querySelectorAll (closeTrigger);


    burgerBtn.addEventListener('click', () => {
        openMenu(nav, classActive);
    });

    navClose.forEach(close => {
        close.addEventListener('click', () => {
            closeMenu(nav, classActive);
        })
    })
};

export default slideMenu;