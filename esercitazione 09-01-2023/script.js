const calculator = {}
calculator.add = (x, y) => x + y
calculator.subtract = (x, y) => x - y
calculator.multiply = (x, y) => x * y
calculator.divide = (x, y) => x / y

const calculate = (x, y, operation, callback) => {
  let result
  if (operation === 'add') {
    result = calculator.add(x, y)
  } else if (operation === 'subtract') {
    result = calculator.subtract(x, y)
  } else if (operation === 'multiply') {
    result = calculator.multiply(x, y)
  } else if (operation === 'divide') {
    result = calculator.divide(x, y)
  } else {
    result = 'Error: Invalid operation'
  }
  callback(result)
}

const x = parseInt(prompt('Enter the first number, please:'))
const y = parseInt(prompt('Enter the second number, please:'))

const operation = prompt('Enter the operation of choice, please:')

const printResult = (result) => console.log(result)

calculate(x, y, operation, printResult)
