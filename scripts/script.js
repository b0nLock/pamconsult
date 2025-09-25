const burgerBtn = document.querySelector('.header__burger');
const headerLinks = document.querySelector('.header__links');
const headerLink = document.querySelectorAll('.header__link');

burgerBtn.addEventListener('click', () => {
    headerLinks.classList.toggle('active');
})

headerLink.forEach(link => {
    link.addEventListener('click', () => {
        if (headerLinks.classList.contains('active')) headerLinks.classList.toggle('active');
    })
})

new Swiper('.swiper-container');