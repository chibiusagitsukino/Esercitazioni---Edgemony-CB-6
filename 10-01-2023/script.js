import { products } from './mocks.js'

const createHero = (title, img, description) => {
  const bodyEl = document.body
  const heroEl = document.createElement('div')
  const imgEl = document.createElement('img')
  const titleEl = document.createElement('h2')
  const descriptionEl = document.createElement('p')

  heroEl.className = 'hero'

  imgEl.className = 'hero-img'
  imgEl.setAttribute('src', img)
  imgEl.setAttribute('alt', title)

  titleEl.className = 'hero-title'
  titleEl.textContent = title

  descriptionEl.className = 'hero-description'
  descriptionEl.textContent = description

  heroEl.append(imgEl, titleEl, descriptionEl)
  bodyEl.appendChild(heroEl)
}

createHero('My hero', 'https://picsum.photos/id/237/200/300', 'labrador')

const createCard = (title, img, description) => {
  const bodyEl = document.body
  const cardEl = document.createElement('div')
  const imgEl = document.createElement('img')
  const titleEl = document.createElement('h2')
  const descriptionEl = document.createElement('p')

  cardEl.className = 'card'
  cardEl.setAttribute('id', 'pippo')
  // cardEl.style.border = '8px solid red';

  imgEl.className = 'card__img'
  imgEl.setAttribute('src', img)
  imgEl.setAttribute('alt', title)

  titleEl.className = 'card__title'
  titleEl.textContent = title

  descriptionEl.className = 'card__description'
  descriptionEl.textContent = description

  cardEl.append(imgEl, titleEl, descriptionEl)
  bodyEl.appendChild(cardEl)
}

for (let product of products) {
  createCard(product.title, product.img, product.description)
}
