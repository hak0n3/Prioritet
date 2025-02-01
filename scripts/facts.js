document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.header__facts-item');
    let currentIndex = 0;

    function changeActiveItem() {
        items[currentIndex].classList.remove('active__fact');
        
        currentIndex = (currentIndex + 1) % items.length;

        items[currentIndex].classList.add('active__fact');
    }

    setInterval(changeActiveItem, 3000);
});
