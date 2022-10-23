let leftSlide = document.querySelector('.leftSlide')
let rightSlide = document.querySelector('.rightSlide')
let images = document.querySelector('.images')
let img = document.querySelectorAll('.img')
let imgs = document.querySelector('img')
let input = document.querySelectorAll('.btnSlider input')


let index = 0
function carousel() {
        img.forEach(item=>{
            item.style.transform = `translate(${index*700}px)`
            
        })
        input.forEach(i=>{
            i.style.backgroundColor = 'green'
        })
}

leftSlide.addEventListener('click', function () {
    carousel()
    index++;
})
rightSlide.addEventListener('click', function () {
    carousel()
    index--;
})