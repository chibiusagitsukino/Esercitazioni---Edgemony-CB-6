const leftBtnEl = document.querySelector('.left-btn')
const centerBtnEl = document.querySelector('.center-btn')
const rightBtnEl = document.querySelector('.right-btn')

const leftImg = document.querySelector('.carousel__img2')
const centerImg = document.querySelector('.carousel__img1')
const rightImg = document.querySelector('.carousel__img3')

const carouselImgEl = document.querySelector('.carousel__img')

centerBtnEl.style.color = '#002395'

leftBtnEl.addEventListener('click', () => {
  leftBtnEl.style.color = '#002395'
  rightBtnEl.style.color = '#e30613'
  centerBtnEl.style.color = '#e30613'

  centerImg.style = 'display: none'
  rightImg.style = 'display: none'
  leftImg.style = 'display: block'
})

centerBtnEl.addEventListener('click', () => {
  centerBtnEl.style.color = '#002395'
  leftBtnEl.style.color = '#e30613'
  rightBtnEl.style.color = '#e30613'

  centerImg.style = 'display: block'
  rightImg.style = 'display: none'
  leftImg.style = 'display: none'
})

rightBtnEl.addEventListener('click', () => {
  rightBtnEl.style.color = '#002395'
  leftBtnEl.style.color = '#e30613'
  centerBtnEl.style.color = '#e30613'

  centerImg.style = 'display: none'
  rightImg.style = 'display: block'
  leftImg.style = 'display: none'
})
