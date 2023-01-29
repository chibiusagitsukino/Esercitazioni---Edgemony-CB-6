import { searchTvShow, GET } from './api.js'
import { tvCardGen } from './script.js'

const popularEl = document.querySelector('.popular-search')

GET('tv', 'popular', '').then((data) =>
  data.results.map((tv) => popularEl.append(tvCardGen(tv)))
)

let searchedValue = ''

const searchEl = document.querySelector('.search-input')
const searchBtnEl = document.querySelector('.search-btn')

searchEl.addEventListener('input', (e) => {
  searchedValue = e.target.value
  searchedValue = searchedValue.toLowerCase()
  console.log(searchedValue)
})

searchBtnEl.addEventListener('click', (e) => {
  console.log(e)
  console.log(searchedValue)

  searchTvShow(searchedValue).then((data) => {
    if (searchedValue != '') {
      popularEl.textContent = ''
    }
    data.results.map((element) => {
      if (element.name.toLowerCase().includes(searchedValue)) {
        popularEl.append(tvCardGen(element))
      }
    })
  })
})
