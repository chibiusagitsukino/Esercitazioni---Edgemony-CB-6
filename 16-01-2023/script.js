// console.log('questo log è scritto prima del metodo fetch')

// let dataDaFetch

// fetch('https://api.escuelajs.co/api/v1/products')
//   .then((res) => res.json())
//   .then((data) => {
//     dataDaFetch = data
//     console.log(dataDaFetch)
//   })

// console.log(dataDaFetch)

const productsElement = document.querySelector('.productsList')
const downloadDataBtn = document.querySelector('.button')
const loaderElement = document.querySelector('.loader')

downloadDataBtn.addEventListener('click', () => {
  loaderElement.textContent = 'Please wait a bit...'
  fetch('https://api.escuelajs.co/api/v1/products')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        /* primo esercizio */
        console.log(item.title)
        console.log(item.description)
        console.log('--------------')
      })
      dataManipulation(data)
    })
    .catch((error) => {
      loaderElement.textContent = 'error detected'
      console.log(error)
    })
})

const dataManipulation = (data) => {
  loaderElement.textContent = ''

  data.forEach((item, index) => {
    const divContainer = document.createElement('div')
    divContainer.className = 'card'

    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('src', item.images[0])
    imgContainer.appendChild(img)

    img.classList.add('card-img')
    imgContainer.classList.add('card-img-container')
    const titleElement = document.createElement('h1')
    titleElement.textContent = item.title

    const descriptionContainer = document.createElement('p')
    descriptionContainer.textContent = item.description

    const priceContainer = document.createElement('p')
    priceContainer.textContent = item.price

    divContainer.appendChild(imgContainer)
    divContainer.appendChild(titleElement)
    divContainer.appendChild(descriptionContainer)
    divContainer.appendChild(priceContainer)

    productsElement.appendChild(divContainer)
  })
}
