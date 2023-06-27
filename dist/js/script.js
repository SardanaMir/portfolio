//гамбургер, отображение меню и закрытие меню

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close'),
    closeElem = document.querySelector('.menu__overlay');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});




