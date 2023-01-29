const API_KEY = 'c86b688d27e4a13b0d33579b9c5866b8'
const BASE_URL = 'https://api.themoviedb.org/3/'
/* https://api.themoviedb.org/3/tv/1?api_key=c86b688d27e4a13b0d33579b9c5866b8 */
const GET = async (type = 'tv', resource = '1', query) => {
  const res = await fetch(
    `${BASE_URL}${type}/${resource}?api_key=${API_KEY}${query}`
  )
  const data = await res.json()
  return data
}

export const searchTvShow = async (searchInput) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=c86b688d27e4a13b0d33579b9c5866b8&query=${searchInput}`
  )
  const data = await res.json()
  return data
}
export { GET }
