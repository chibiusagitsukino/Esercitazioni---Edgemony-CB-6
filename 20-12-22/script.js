// Array di stringhe
let fruits = ['mela', 'pera', 'ananas', 'kiwi']
let veg = ['broccoli', 'cauliflower', 'kale']

//è uguale a:
//let fruitOne = 'mela';
//let fruitTwo = 'pera';
//ecc

console.log(fruits) //restituisce tutto l'array

console.log(fruits[0]) //restituisce la mela

console.log(fruits.length - 1) //restituisce la lunghessa dell'array

// Metodo push
console.log('prima', fruits)
fruits.push('watermelon')
console.log('dopo', fruits)

//unshift
console.log('prima', fruits)
fruits.unshift('watermelon')
console.log('dopo', fruits)

//pop - rimuove l'ultimo valore
console.log('prima', fruits)
fruits.pop('')
console.log('dopo', fruits)

//la proprietà è un valore definito, il metodo esegue funzionalità e vuole dei parametri

//shift rimuove il primo valore in testa
console.log('prima', fruits)
fruits.shift('')
console.log('dopo', fruits)

//concat concatena più array tra loro
let fullFruits = fruits.concat(veg)
console.log(fullFruits)
//slice
console.log(fruits.slice(1, 3)) // restituisce pera ed ananas: il primo valore è inclusivo, l'ultimo esclusivo
let favouriteFruits = fruits.slice(1, 3)
console.log(fav)

let newFruit = prompt('che frutta vuoi mangiare?')

if (fruits.includes(newFruit)) {
  console.log('prendi dal cesto' + newFruit)
} else {
  console.log('Devi comprare' + newFruit)
}

//la stringa è un tipo primitivo che ha il proprio valore direttamente assegnato alla memoria del computer

//array e oggetti hanno più valori che non hanno una casa ma un indirizzo che li identifica nel loro insieme:

// Cicli
// FOR inteso come per ogni, per
//for(inizializzazione; condizione; modifica) {
// blocco codice - il codice da eseguire n volte
//}

// i = i + 1 è uguale a i++ e a i *= 1

// for classico - range

for (let i = 1; i <= 10; i++) {
  console.log('Ciao ragazzi!')
}

//il codice partirà da 0 e stamperà 10 volte ciao ragazzi come console.log('ciao ragazzi'); scritto 10 volte

for (let i = 1; i <= 999; i++) {
  console.log(i)
}

//la variabile i si utilizza solo dentro al for

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

//

for (let i = 0; i < fruits.length; i++) {
  console.log(i + ': ' + fruits[i])
}

//...

//for - minimal classic

for (let i in fruits) {
  console.log(i)
}

// index

for (let fruitIndex in fruits) {
  console.log(fruitIndex)
}

//value

for (let fruit of fruits) {
  console.log(fruit)
}

// INDIZIO PER RISOLUZIONE ESERCIZIO 20-12-22 QUI SOTTO

let userName = []

for (let x = 4; x > 0; x--) {
  userNames.push(prompt('inserisci il tuo nome'))
}

//Alla ricerca di Pippo v.1

for (userName of userNames) {
  if (userName === 'Pippo') console.log('Ho trovato Pippo')
}

//v.2

if (userNames.includes('Pippo')) {
  console.log('Ho trovato Pippo')
}

console.log(userNames)

//array di array

let stuff = [
  'pen',
  'mouse',
  'notebook',
  'paper',
  ['pens', 'keys', 'scotch', 'mice'],
]
console.log(stuff)

// array multidimensionale matrice

let matrix = [
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, 9], // 2
]

console.log(matrix[2][0]) //mi restituisce il 7

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j <= matrix[i].length; j++) console.log(matrix[i][j])
}
