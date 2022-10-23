let leftSlide = document.querySelector('.leftSlide')
let rightSlide = document.querySelector('.rightSlide')
let images = document.querySelector('.images')
let carouselImage = document.querySelector('.carouselImage')


// let img = document.querySelectorAll('.img')
let input = document.querySelectorAll('.btnSlider input')
let imgs = document.querySelectorAll('.images img')


let index = 0
function carousel() {
    if (index > imgs.length - 1) {
        index = 0
    } else if (index < 0) {
        index = imgs.length - 1
    }
    images.style.transform = `translateX(${-index * 700}px)`
}
let time = setTimeout(run, 1000)
function run() {
    index += 1;
    carousel()

}
function resetInterval() {
    clearInterval(time)
    time = setTimeout(run, 2000)
}
leftSlide.addEventListener('click', function () {
    index--;
    carousel()
    resetInterval()
})
rightSlide.addEventListener('click', function () {
    index++;
    carousel()
    resetInterval()
})