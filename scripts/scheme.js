const items = document.querySelectorAll('.main__step-list-item');
const leftArrow = document.querySelector('.main__scheme-left');
const rightArrow = document.querySelector('.main__scheme-right');

let currentIndex = 0;

rightArrow.addEventListener('click', function() {
    items[currentIndex].classList.remove('active__step');
    
    currentIndex = (currentIndex + 1) % items.length;

    items[currentIndex].classList.add('active__step');
});

leftArrow.addEventListener('click', function() {
    items[currentIndex].classList.remove('active__step');
    
    if (currentIndex === 0) {
        currentIndex = items.length;
    }
    currentIndex = (currentIndex - 1) % items.length;

    items[currentIndex].classList.add('active__step');
});