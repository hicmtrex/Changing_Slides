const body = document.body
const images = document.querySelectorAll('.slide')
const right = document.querySelector('#right')
const left = document.querySelector('#left')
let steps = 0;
setImages()

function setImages() {
    body.style.backgroundImage = images[steps].style.backgroundImage
}

function setSteps() {
    images.forEach(img => img.classList.remove('active'))
    images[steps].classList.add('active')
}

right.addEventListener('click', () => {
    steps++
    if (steps > images.length - 1) {
        steps = 0
    }
    setImages()
    setSteps()
})

left.addEventListener('click', () => {
    steps--
    if (steps < 0) {
        steps = images.length - 1
    }
    setImages()
    setSteps()
})