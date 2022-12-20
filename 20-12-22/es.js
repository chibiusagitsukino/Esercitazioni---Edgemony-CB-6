// ex. 20-12-22

let listChars = []

for (let i = 0; i <= 9; i++) {
  listChars.push(
    prompt('Inserisci dieci oggetti che puoi vedere sulla tua scrivania')
  )
}
console.log(listChars)

// advanced

// for in

let userInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

for (let userIndex in userInputs) {
  listChars.push(
    prompt('Inserisci dieci oggetti che puoi vedere sulla tua scrivania')
  )
  console.log(userIndex)
}

//for of

let userInputs2 = ['']

for (let userValue of userInputs2) {
  console.log(userValue)
}
