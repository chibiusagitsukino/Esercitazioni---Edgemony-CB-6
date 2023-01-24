import { GET } from './api.js'

const bodyEl = document.querySelector('.body')
const containerEl = document.querySelector('#container')
const userFilter = document.querySelector('#user-filter')

GET('users').then((data) =>
  data.users.forEach((user) => {
    //Creo dinamicamente le cards per ogni utente utilizzando un ciclo for e servendomi del metodo Destructuring.
    //Il destructuring consente di estrarre valori da un oggetto o un array e assegnarli a variabili separate.
    createCard(user)
  })
)

const createCard = (user) => {
  const { firstName, lastName, birthDate, email, phone } = user

  const card = document.createElement('div')
  card.className = 'card'

  const firstNameU = document.createElement('p')
  firstNameU.textContent = firstName
  const lastNameU = document.createElement('p')
  lastNameU.textContent = lastName

  const birthDateU = document.createElement('p')
  birthDateU.textContent = birthDate

  const emailU = document.createElement('p')
  emailU.textContent = email

  const phoneU = document.createElement('p')
  phoneU.textContent = phone

  card.append(firstNameU, lastNameU, birthDateU, emailU, phoneU)

  containerEl.appendChild(card)
  bodyEl.appendChild(containerEl)
}

///// advanced

// const onUsersDelete = () => {
//   const usersEls = document.querySelectorAll('.user')
//   usersEls.forEach((user) => user.remove())
// }
// const
