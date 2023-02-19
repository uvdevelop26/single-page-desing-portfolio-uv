const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const slider = document.querySelector('.slider');
const lists = slider.querySelectorAll('.slide-list');



btnRight.addEventListener('click', () => {
    const list = lists[0].clientWidth
    slider.scrollLeft += list

})

btnLeft.addEventListener('click', () => {
    const list = lists[0].clientWidth
    slider.scrollLeft -= list
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 37) {
        const list = lists[0].clientWidth
        slider.scrollLeft -= list
    } else if (e.keyCode === 39) {
        const list = lists[0].clientWidth
        slider.scrollLeft += list
    }
})

