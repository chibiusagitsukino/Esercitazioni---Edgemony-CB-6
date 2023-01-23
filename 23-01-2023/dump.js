// let quote18 = async (endpoint) => {
//   try {
//     const res = await fetch('https://dummyjson.com/quotes')
//     const data = await res.json()
//     quotesCard(data[0])
//     document.body.appendChild(cardEl)
//   } catch (error) {
//     console.log(error)
//   }
// }
///////////
//   let res = await fetch(endpoint, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const data = await res.json()
//   return data
// }

// quote18('https://dummyjson.com/quotes').then((data) =>
//   data.quotes.filter((element) => {
//     document.getElementById('quote').innerHTML = data[17].quote
//   })
// )
