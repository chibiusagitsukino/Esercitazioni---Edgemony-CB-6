// INIZIO ESERCITAZIONE //

let userPrompt = prompt(
  'Quale operazione vuoi inserire tra una addizione o una moltiplicazione?'
)
console.log(userPrompt)

let firstNum = prompt('Puoi inserire un numero?')

let secondNum = prompt('Ne inseriresti un altro?')

// let result = +firstNum + +secondNum

let result = ''

console.log(result)

alert('Ben fatto!')
alert("Il risultato dell'operazione è:" + result)

if (userPrompt === 'addizione') {
  result = firstNum + secondNum
} else if (userPrompt === 'moltiplicazione') {
  result = firstNum * secondNum
} else {
  alert('error')
}

// SWITCH //

switch (userPrompt) {
  case 'sum':
    console.log(firstNum + secondNum)
    break
  case 'multiple':
    console.log(firstNum * secondNum)
    break
  case error:
    console.log('')
    break
}
