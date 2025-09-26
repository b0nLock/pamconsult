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

new Swiper('.content__intro', {
    allowTouchMove: false,
    autoplay: {
        delay: 10000
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
    300: {
        direction: 'horizontal'
    },
    768: {
        direction: 'vertical',
    }
  }
});
new Swiper('.intro__popular', {
    breakpoints: {
    300: {
        slidesPerView: 2,
    },
    700: {
        slidesPerView: 0,
    }
  }
});