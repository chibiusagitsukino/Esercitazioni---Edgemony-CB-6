// let currentImageIndex = 0

// const images = document.querySelector('slider-image')

// function prevSlide() {
//   images[currentImageIndex].style.display = 'none'
//   currentImageIndex--
//   if (currentImageIndex < 0) {
//     currentImageIndex = images.length - 1
//   }
//   images[currentImageIndex].style.display = 'block'
// }

// function nextSlide() {
//   images[currentImageIndex].style.display = 'none'
//   currentImageIndex++
//   if (currentImageIndex >= images.length) {
//     currentImageIndex = 0
//   }
//   images[currentImageIndex].style.display = 'block'
// }

const images = [
  './img/arc-de-triomphejs.png?1',
  './img/montmartrejs.jpg?2',
  './img/Cathédrale-Notre-Dame-de-Parisjs?3',
]

const leftBtnEl = document.querySelector('.left-btn')
const centerBtnEl = document.querySelector('.center-btn')
const rightBtnEl = document.querySelector('.right-btn')

const carouselImgEl = document.querySelector('.carousel__img')

let carouselState = 0

leftBtnEl.addEventListener('click', () => {
  carouselState--
  carouselImgEl.setAttribute('src', './img/arc-de-triomphejs.png')
  leftBtnEl.style.color = '#e30613'
  rightBtnEl.style = 'none'
  centerBtnEl.style = 'none'
})

centerBtnEl.addEventListener('click', () => {
  carouselImgEl.setAttribute('src', './img/montmartrejs.jpg')
  centerBtnEl.style.color = '#e30613'
  rightBtnEl.style = 'none'
  leftBtnEl.style = 'none'
})

rightBtnEl.addEventListener('click', () => {
  carouselState++
  carouselImgEl.setAttribute(
    'src',
    './img/Cathédrale-Notre-Dame-de-Parisjs.jpg'
  )
  rightBtnEl.style.color = '#e30613'
  leftBtnEl.style = 'none'
  centerBtnEl.style = 'none'
})
