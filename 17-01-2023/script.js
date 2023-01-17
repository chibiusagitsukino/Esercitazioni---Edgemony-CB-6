const newInBtn = document.querySelector('.new-in')
const loaderElement = document.querySelector('.loader')

const img1 = document.querySelector('#img-1')

const checkoutBtn = document.querySelector('.checkout')
const tendina = document.querySelector('.tendina')
const productsList = document.querySelector('.products')
const footer = document.querySelector('footer')

const cart = []

newInBtn.addEventListener('click', () => {
  loaderElement.textContent = 'Please wait a bit...'
  fetch('https://api.escuelajs.co/api/v1/products')
    .then((res) => res.json())
    .then((data) =>
      data.forEach((element) => {
        cardCreator(element)
      })
    )
})

checkoutBtn.addEventListener('click', () => {
  tendina.classList.toggle('show')
})

const cardCreator = (item) => {
  loaderElement.textContent = ''
  const cardEl = document.createElement('div')
  cardEl.className = 'card'

  const imgEl = document.createElement('img')
  imgEl.setAttribute('src', item.images[0])
  imgEl.setAttribute('alt', '#')

  const h1El = document.createElement('h1')
  h1El.className = 'title'
  h1El.textContent = item.title.slice(0, 10)

  const priceEl = document.createElement('p')
  priceEl.className = 'price'
  priceEl.textContent = item.price

  const descEl = document.createElement('p')
  descEl.className = 'description'
  descEl.textContent = item.description.slice(0, 30)

  const addBtn = document.createElement('button')
  addBtn.textContent = 'Add to Cart'
  const icon = document.createElement('span')
  icon.textContent = 'shopping_cart'
  icon.className = 'material-symbols-outlined'
  addBtn.appendChild(icon)

  addBtn.addEventListener('click', () => {
    cart.push(item)
    cartCreation()
    console.log(cart)
    alert('added to cart')
  })

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn)
  productsList.appendChild(cardEl)
}

const cartCreation = () => {
  tendina.innerHTML = ''
  cart.forEach((item) => {
    const cartEl = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    deleteButton.className = 'delete-item'
    tendina.append(deleteButton)
    cartEl.innerHTML = `<p class="description">${item.title}</p><p>${item.price}</p>`
    tendina.appendChild(cartEl)
  })
}
