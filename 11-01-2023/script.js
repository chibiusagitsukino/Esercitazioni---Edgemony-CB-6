const card = document.querySelector('.card')
const xButton = document.querySelector('.x-button')

card.addEventListener('click', function () {
  card.style.color = '#d04179'
})

xButton.addEventListener('click', function () {
  card.remove()
})
