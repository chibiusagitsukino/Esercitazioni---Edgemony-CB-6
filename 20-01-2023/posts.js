const myForm = document.querySelector('#myForm')
const inputTitle = document.querySelector('#title')
const inputPrice = document.querySelector('#price')
const inputCategory = document.querySelector('#category')
const inputDescription = document.querySelector('#description')
const inputImage = document.querySelector('#image')

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// const createDynamicOptions = () => {
//   fetch('https://api.escuelajs.co/api/v1/products')
//     .then((res) => res.json())
//     .then((data) =>
//       data.forEach((element) => {
//         let option = document.createElement('option')
//         let optionArray = []
//         optionArray.push(element.category.id)
//         optionsetAttribute('value', element.category.id)
//         option.innerHTML = element.category.id
//         removeDuplicates(arr).
//         inputCategory.append(option)
//       })
//     )
//     .catch((e) => console.log('error detected: ', e))
// }

// createDynamicOptions()

myForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: inputImage.value,
  }
  postObject(formData)
  console.log(formData)
})

const postObject = (object) => {
  object.images = object.images.split()
  fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then((res) => {
      res.json()
    })
    .then((data) => console.log('RESPONSE: ', data))
    .catch((e) => console.log('ERROR: ', e))
}
