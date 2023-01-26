const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint)
  const data = await res.json()
  return data
}

const cE = (element) => document.createElement(element)

const qS = (type) => document.querySelector(type)

const priceStatusBarGen = (value, price) => {
  const wrapper = cE('div')
  const textEl = cE('h4')
  const statusEl = cE('div')

  wrapper.className = 'age-status-bar'
  textEl.textContent = value
  statusEl.className = 'age-status-bar__status'
  statusEl.style.height = `${price * 5}px`

  /* let opacity = 0;
let intervalId = setInterval(() => {
    opacity += 0.1;
    statusEl.style.backgroundColor = 'rgba(255, 0, 0, ' + opacity + ')';
    if(opacity >= 1){
        clearInterval(intervalId);
    }
}, 200);
 */

  setInterval(() => {
    statusEl.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`
  }, 1000)

  wrapper.append(textEl, statusEl)
  return wrapper
}

const BASE_URL = 'https://dummyjson.com/'
const wrapperEl = qS('.wrapper')
let firstStage, secondStage, thirdStage, fourthStage, fifthStage
let stagesCount = []

GET('products?limit=100')
  .then(({ products }) => {
    const productsPrice = products.map((product) => product.price)

    firstStage = {
      prices: productsPrice.filter((price) => price <= 19),
      text: '0 - 19',
    }
    secondStage = {
      prices: productsPrice.filter((price) => price <= 29),
      text: '20 - 29',
    }
    thirdStage = {
      prices: productsPrice.filter((price) => price <= 40),
      text: '30 - 40',
    }
    fourthStage = {
      prices: productsPrice.filter((price) => price <= 60),
      text: '41 - 60',
    }
    fifthStage = {
      prices: productsPrice.filter((price) => price <= 80),
      text: '61 - 80',
    }

    stagesCount.push(
      firstStage,
      secondStage,
      thirdStage,
      fourthStage,
      fifthStage
    )
  })
  .then(() => {
    console.log(stagesCount)
    stagesCount.map((stage) =>
      wrapperEl.appendChild(priceStatusBarGen(stage.text, stage.prices.length))
    )
  })

// console.log(myJson);
