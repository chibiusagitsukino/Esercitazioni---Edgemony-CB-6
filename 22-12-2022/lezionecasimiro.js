// ex. 21-12-2022

// function calculator(operation, num1, num2) {
//   switch (operation) {
//     case '+':
//       return num1 + num2
//     case '-':
//       return num1 - num2
//   }
// }

// calculator('-', 10, 5)

// alternative

// function calculator(operation, numbers) {
//   console.log(numbers)
//   switch (operation) {
//     case '+':
//       return numbers[0] + numbers[1]
//     case '-':
//       return numbers[0] - numbers[1]
//   }
// }

// calculator('-', [0, 1])

// javascript string split

// const userNums = prompt('inserisci due numeri')
// userNums
// '10, 9'
// userNums.split(',')[('10', '9')]
// userNums.split(',')[0]
// ;('10')
// userNums.split(',')[1]
// ;('9')

// oppure

// const = userNumsArr = userNums.split(', ')
// userNumsArr['10', '9']
// (+userNumsArr[0]) + (+userNumsArr[1])
// parseInt(userNumsArr)

// Lezione 22-12-2022

// function doIt() {
//   let surname = 'Pluto'
//   console.log(surname) //funziona perchè è all'interno del suo scope
// }
// let firstName = 'Pippo' //dallo scope globale si può richiamare ciò che sta all'interno delle graffe, ma non viceversa

// console.log(firstName) //funziona
// console.log(surname) //is not defined perchè si trova in uno scope locale
// doIt()

// //
// function calc(num1, num2) {
//   console.log(firstName) // Acconsentito
//   let result = num1 + num2 + anotherNum // errore, anotherNum è fuori scope
//   function sum() {
//     let anotherNum = 2
//     return result // acconsentito
//   }
// }
// console.log(result) //Errore

//Global (firstName) - Calc (result) - Sum(anotherNum)
//     ---->             ---->          ---->
//                       <---- negato   <---- negato

// es. if

// if (true) {
//   let c = 222
//   console.log(c)
// }
// console.log(c) // c non è definito nello scope globale ma solo in quello locale

// // ---
// if(true) console.log(2)
// if(true) let x = 2
// if(true) {
//     let c = 222;
//     console.log(c)
// }
// console.log(c)
// // ---
// let p = 20
// if(true) {
//     p = 100;
//     console.log('Locale:', p);
// }

// console.log('Globale:', p);
// Locale: 100
// Globale: 100

// //---

// let a = 0;
// function anotherThing() {
//     a++; //concetto di funzione pura distrutto, ma comunque valido
// }
// console.log(a); // prima dell'invocazione risulta 0
// anotherThing(); //invocazione
// console.log(a); //avviene l'incremento perchè la funzione è stata invocata

// //---

// var a = 1;
// let b = 1;
// const c = 1;

// c= 2; //errore - const non può essere riassegnata
// b = 2;
// a = 2;

// console.log("a:", a, "b:" , b, "c:", c);
// console.log('a: ${a} b: ${b} c: ${c}');

// if(true) {
//     let x = 1; //il suo scope è globale ed è l'unica variabile visibile all'esterno di questo if
//     let x = 1; //locale all'if
//     const y = 1; //locale all'if

// }

// console.log('t: ${t} x: ${x} y: ${y})

// console.log(t); //valido, globale
// console.log(x); // sbagliato, locale
// console.log(y) // sbagliato, locale

// card

// function productGen(id, title, imgUrl, rating, nReviews, store, price, sale, fullPrice) {
//     return ({
//         id: id,
//     title: title,
//     imgUrl: imgUrl,
//     rating: rating,
//     nReviews: nReviews,
//     store: store,
//     price: 99,
//     sale: sale,
//     fullPrice: fullPrice
//     })
// }

// console.log(productGen(1, 'titolo - Pippo', 'https://', 5, 100, 'italy', 100, 0, 100))
// products.push(
//     productGen(...)
// )
// products.push(
//     productGen(altri valori)

// )

// console.log(products);

// const parEl = document.querySelector('p');
// parEl.textContent = products[0].store;

// const adidasWB = {
//     id: 1,
//     title: 'Adidas White Black',
//     imgUrl: 'https://picsum.photos/200/300',
//     rating: 4.8,
//     nReviews: 87,
//     store: 'Adidas Sports Wear'
//     price: 99,
//     sale: 5,
//     fullPrice: 99
// }

// const products = [];
// products.push(adidasWB)
// const products = [adodasWB]

// let msg = 'ciao';
// let msgF = productGen()
// console.log(msgF)
