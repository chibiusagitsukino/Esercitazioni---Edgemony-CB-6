import myJson from './mock.json' assert { type: 'json' }
const bodyEl = document.querySelector('.body')
const wrapperCard = document.querySelector('.wrapper-card')

function createEventCards(events) {
  const eventCards = []
  events.forEach((event) => {
    const card = document.createElement('div')
    card.className = 'event-card'

    const title = document.createElement('h3')
    title.innerText = event.title

    const date = document.createElement('p')
    date.innerText = event.date

    const description = document.createElement('p')
    description.innerText = event.description

    card.append(title, date, description)
    wrapperCard.append(card)
    bodyEl.appendChild(wrapperCard)

    eventCards.push(card)
  })
}

const eventCards = createEventCards(myJson)
eventCards.forEach((card) => {
  document.getElementById('calendar').appendChild(card)
})
