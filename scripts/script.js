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
        el: '.intro__pagination',
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

new Swiper('.questions__list', {
    pagination: {
        el: '.questions__pagination',
        clickable: true,
    },
    breakpoints: {
    1440: {
        slidesPerView: 3,
        spaceBetween: 20
    },
    1000: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 4,
    },
    380: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
  }
})

const cityDesc = document.querySelector(".location__info");
const mapBtn = document.querySelectorAll(".location__map--button");
const cityName = document.querySelector(".location__city--name");

mapBtn.forEach(city => {
    city.addEventListener("click", () => {
        if (city.classList.contains("location__larnaka")) {
            cityName.textContent = "Larnaka";
            cityDesc.style.opacity = 1;
        } else if (city.classList.contains("location__nicosia")) {
            cityName.textContent = "Nicosia";
            cityDesc.style.opacity = 1;
        } else {
            cityDesc.style.opacity = 0;
        }
    })
})