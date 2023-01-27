import { GET } from './api.js'

// GET().then((data) => console.log(data))

const tvCardGen = (data) => {
  const cardEl = document.createElement('div')
  const imgEl = document.createElement('img')
  cardEl.setAttribute('id', data.id)
  cardEl.className = 'tv'
  imgEl.setAttribute(
    'src',
    `https://image.tmdb.org/t/p/w500/${data.poster_path} `
  )
  imgEl.setAttribute('alt', data.title)
  cardEl.appendChild(imgEl)
  return cardEl
}

const topRatedEl = document.querySelector('.top-rated')
const popularEl = document.querySelector('.popular')
const latestEl = document.querySelector('.latest')

GET('tv', 'top_rated').then((data) =>
  data.results.map((tv) => topRatedEl.append(tvCardGen(tv)))
)

GET('tv', 'popular').then((data) =>
  data.results.map((tv) => popularEl.append(tvCardGen(tv)))
)

GET('tv', 'latest').then((data) =>
  data.results.map((tv) => latestEl.append(tvCardGen(tv)))
)
