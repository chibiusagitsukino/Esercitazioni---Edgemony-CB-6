const BASE_URL = 'https://dummyjson.com/'

const bodyEl = document.querySelector('.body')
const quoteContainer = document.querySelector('.quote-container')

const quotesCard = (data) => {
  const textWrapperEl = document.createElement('div')
  const idEl = document.createElement('p')
  const quoteEl = document.createElement('h3')
  const authorEl = document.createElement('p')

  textWrapperEl.className = 'card-text'

  quoteEl.textContent = data.quote
  authorEl.textContent = data.author

  const buttonEl = document.createElement('button')
  buttonEl.id = 'random-quote-btn'
  buttonEl.addEventListener('click', getRandomQuote)
  buttonEl.textContent = 'Get a random quote!'

  textWrapperEl.append(idEl, quoteEl, authorEl)
  quoteContainer.append(textWrapperEl, buttonEl)
  bodyEl.append(quoteContainer)
}

/////////

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint)
  const data = await res.json()
  return data
}

GET('quotes').then((data) => quotesCard(data.quotes[17]))

//////////////////

async function getRandomQuote() {
  const response = await fetch('https://dummyjson.com/quotes')
  const data = await response.json()
  const randomQuote =
    data.quotes[Math.floor(Math.random() * data.quotes.length)]

  quoteContainer.textContent = ''
  quotesCard(randomQuote)
}

//////////////////
