const container = document.querySelector('.container')
const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = document.querySelectorAll('.slide').length;
const height = container.clientHeight;
const width = container.clientWidth;
let activeSlideIndex = 0;

sideBar.style.top = width > 500 ? `-${(slidesCount-1)*100}vh` : '';

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

document.addEventListener('keydown', (event) => {
    if (event.key ===  'ArrowUp') {
        changeSlide('up');
    } else if (event.key ===  'ArrowDown') {
        changeSlide('down');
    }
})

function changeSlide(direction) {
    if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        };
    } else if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        };
    };   

    mainSlide.style.transform = width > 500 ?  `translateY(-${activeSlideIndex * height}px)` : '';
    sideBar.style.transform = width > 500 ?  `translateY(${activeSlideIndex * height}px)` : '';
};