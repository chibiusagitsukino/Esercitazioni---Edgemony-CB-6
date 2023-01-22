export const metodoGet = () => {
  fetch('https://api.escuelajs.co/api/v1/products/')
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((e) => console.log('Questo è il mio errore: ', e))
}
