//ex. 21-12-22

let person = {
  name: 'Adriana',
  surname: 'Origlio',
  age: '28',
  isAMom: true,
  occupation: 'student',
  hobby1: 'drawing',
  hobby2: 'reading',
  hobby3: 'music',
  hobby4: 'movies',
  getFullHobbyList: function () {
    return (
      this.hobby1 + ', ' + this.hobby2 + ', ' + this.hobby3 + ', ' + this.hobby4
    )
  },
}

console.log('my first hobby is: ' + person.hobby1)
console.log('my second hobby is: ' + person.hobby2)
console.log('my third hobby is: ' + person.hobby3)
console.log('my fourth hobby is: ' + person.hobby4)

console.log('my hobbies are: ' + person.getFullHobbyList())

// metodo alternativo
// alternative: function() {
//   return console.log('i miei hobby sono' + this.hobby1 + this.hobby2 + this.hobby3 + this.hobby4)
// }
//   person.getFullList()

//con metodi???

//   const person = {
//     name: 'Adriana',
//     surname: 'Origlio',
//     age: '28',
//     isAMom: true,
//     occupation: 'student',
//     hobby1: drawing () {
//       console.log("scribble scribble");
//     },
//     hobby2: reading () {
//       console.log("mumbling");
//     },
//     hobby3: music () {
//       console.log("playing");
//     },
//     hobby4: movies () {
//       console.log("turning my tv on")
//     }
//   }

person.getFullHobbyList()

//advanced

function operation(operation, num1, num2) {
  if (operation === '+') {
    return num1 + num2
  } else if (operation == '-') {
    return num1 - num2
  } else if (operation == '*') {
    return num1 * num2
  } else if (operation == '/') {
    return num1 / num2
  }
}

console.log(operation('*', 2, 2))
