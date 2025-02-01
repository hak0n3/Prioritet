const body = document.querySelector('.body');
const burger = document.querySelector('.burger');
const burgerBtn = document.querySelector('.header__burger');
const burgerCross = document.querySelector('.burger__cross');
const backformBlackout = document.querySelector('.backform__blackout');
const burgerLinks = document.querySelectorAll('.burger__forwarding');
const burgerCountry = document.querySelector('.burger-country-btn');
const burgerCountryList = document.querySelector('.burger__country-house-list');
const burgerCommercial = document.querySelector('.burger-commercial-btn');
const burgerCommercialList = document.querySelector('.burger__commercial-space-list');

burgerBtn.addEventListener('click', function () {
    backformBlackout.style.opacity = '0.35';
    body.style.overflow = 'hidden';
    burger.classList.add('show');
    backformBlackout.classList.add('show');
})

burgerCross.addEventListener('click', function () {
    burger.classList.remove('show');
    backformBlackout.classList.remove('show');
    backformBlackout.style.opacity = '0';
    body.style.overflow = 'auto';
})

burgerLinks.forEach(burgerLink => {
    burgerLink.addEventListener('click', function () {
        backformBlackout.classList.remove('show');
        backformBlackout.style.opacity = '0';
        body.style.overflow = 'auto';
        burger.classList.remove('show');
    })
})

burgerCountry.addEventListener('click', function () {
    burgerCountry.classList.toggle('burger__link-active');
    if (burgerCountryList.style.display === 'none' || burgerCountryList.style.display === '') {
        burgerCountryList.style.display = 'flex';
    } else {
        burgerCountryList.style.display = 'none';
    }
})

burgerCommercial.addEventListener('click', function () {
    burgerCommercial.classList.toggle('burger__link-active');
    if (burgerCommercialList.style.display === 'none' || burgerCommercialList.style.display === '') {
        burgerCommercialList.style.display = 'flex';
    } else {
        burgerCommercialList.style.display = 'none';
    }
})
