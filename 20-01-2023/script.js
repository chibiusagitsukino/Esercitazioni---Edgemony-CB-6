// tasto per caricare i prodotti
const newInBtn = document.querySelector('.new-in')
const loaderElement = document.querySelector('.loader')

const img1 = document.querySelector('#img-1')

const filtro1 = document.querySelector('#cat-1')
const filtro2 = document.querySelector('#cat-2')
const filtro3 = document.querySelector('#cat-3')

// const cartTotalText = document.querySelector('.cart-total')

const checkoutBtn = document.querySelector('.checkout')
const tendina = document.querySelector('.tendina')
const productsList = document.querySelector('.products')
const footer = document.querySelector('footer')

const select = document.querySelector('#categorySelect')

let listaProdotti = []

// GET categorie
const metodoGetCat = () => {
  fetch('https://api.escuelajs.co/api/v1/categories/')
    .then((res) => res.json())
    .then((data) => creazioneSelectCategories(data))
    .catch((e) => console.log('Questo è il mio errore: ', e))
}

metodoGetCat()

//event listener per filtrare al click sulle option della select
select.addEventListener('change', (e) => {
  filterByCategory(select.value)
})

// Creazione delle option della select dinamica per filtrare le categorie
const creazioneSelectCategories = (arrayCat) => {
  arrayCat.forEach((item) => {
    const optionValue = document.createElement('option')
    optionValue.textContent = item.name
    optionValue.setAttribute('value', item.id)
    select.appendChild(optionValue)
  })
}

// Filtri per filtrare le categorie con un tasto e una singola categoria
filtro1.addEventListener('click', () => {
  const filteredProducts = listaProdotti.filter(
    (item) => item.category.id === 1 && item.price < 50
  )
  productsList.innerHTML = ''
  filteredProducts.forEach((element) => {
    cardCreator(element)
  })
})

filtro2.addEventListener('click', () => {
  const filteredProducts = listaProdotti.filter(
    (item) => item.category.id === 2 && item.price < 50
  )
  productsList.innerHTML = ''
  filteredProducts.forEach((element) => {
    cardCreator(element)
  })
})

filtro3.addEventListener('click', () => {
  const filteredProducts = listaProdotti.filter(
    (item) => item.category.id === 3 && item.price < 50
  )
  productsList.innerHTML = ''
  filteredProducts.forEach((element) => {
    cardCreator(element)
  })
})

export const filterByCategory = (idCat) => {
  const filteredProducts = listaProdotti.filter(
    (item) => item.category.id === parseInt(idCat)
  )
  productsList.textContent = ''
  filteredProducts.forEach((element) => {
    cardCreator(element)
  })
}

//////

const cart = []

newInBtn.addEventListener('click', () => {
  loaderElement.textContent = 'Please wait a bit...'
  fetch('https://api.escuelajs.co/api/v1/products')
    .then((res) => res.json())
    .then((data) => {
      listaProdotti = data
      console.log(data)
      console.log(listaProdotti)
      data.forEach((element) => {
        console.log(element.category.id)
        console.log(element.category.name)
        cardCreator(element)
      })
    })
    .catch((e) => console.log('error detected: ', e))
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
    alert('added to cart')
    cartPopulator(item)
  })

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn)
  productsList.appendChild(cardEl)
}

const cartCreation = () => {
  let cartTotal = 0
  cart.forEach((item) => {
    cartTotal = cartTotal + item.qty
  })

  tendina.innerHTML = ''

  const cartTotalText = document.createElement('div')
  cartTotalText.className = 'cart-total-text'
  cartTotalText.textContent = `Totale prodotti: ${cartTotal}`
  // if (cart.length > 0) {
  // }

  cart.forEach((item, index) => {
    const cartEl = document.createElement('div')
    cartEl.className = 'cartRow'
    const cartElText = document.createElement('div')
    const qtyCircle = document.createElement('div')
    const cartElParagraph = document.createElement('p')
    const cartElSecondParagraph = document.createElement('p')

    qtyCircle.innerHTML = item.qty
    cartElParagraph.innerHTML = `<p>${item.title} - </p>`
    cartElSecondParagraph.innerHTML = `<p>${item.price} €</p>`

    qtyCircle.className = 'qtyCircle'
    cartElParagraph.className = 'cartParagraph'
    cartElSecondParagraph.className = 'cartParagraph'
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    cartElText.className = 'cartElText'

    deleteButton.className = 'cartDeleteButton'

    deleteButton.addEventListener('click', () => {
      cartEl.remove()
      cart.splice(index, 1)
    })

    cartElText.append(qtyCircle, cartElParagraph, cartElSecondParagraph)
    cartEl.append(cartElText, deleteButton)
    tendina.append(cartEl, cartTotalText)
  })
}

const cartPopulator = (item) => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  }

  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++
      return element
    }
  })

  if (search.length === 0) {
    cart.push(newObj)
  }

  console.log(cart)
  cartCreation()
}
