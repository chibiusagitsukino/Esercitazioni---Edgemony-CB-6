/* utilizzando setTimeout e setInterval, 
crea su javascritp un intervallo temporale 
che simuli un conto alla rovescia, 
che dopo n secondi:
mostri il timer in schermo;
che allo scadere del timer la pagina cambi colore 
e il timer stesso scompaia;
deve prevedere la presenza di un pulsante STOP 
che interrompa il flusso temporale, 
tramite il relativo clearInterval.*/

const bodyEl = document.querySelector('.body')
const titleEl = document.createElement('h1')
const stopBtnEl = document.createElement('button')
let timerContainer = document.getElementById('timer')
stopBtnEl.textContent = 'stop'
timerContainer.append(titleEl)
bodyEl.append(timerContainer, stopBtnEl)

let timeout = 10

const interval = setInterval(() => {
  if (timeout === 0) {
    bodyEl.style.backgroundColor = 'tomato'
    stopBtnEl.style.display = 'none'
    titleEl.remove()
  } else {
    timeout--
    titleEl.textContent = timeout
  }
}, 1000)

/* pulsante stop */

stopBtnEl.addEventListener('click', () => clearInterval(interval))

// stopBtnEl.addEventListener('click', function () {
//   if (interval) {
//     clearInterval(interval)
//     interval = null
//     stopBtnEl.innerHTML = 'Resume'
//   } else {
//     setInterval(currentCount)
//     stopBtnEl.innerHTML = 'Stop'
//   }
// })
