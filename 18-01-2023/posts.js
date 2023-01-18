const myForm = document.querySelector('#myForm')
const inputTitle = document.querySelector('#title')
const inputPrice = document.querySelector('#price')
const inputCategory = document.querySelector('#category')
const inputDescription = document.querySelector('#description')
const inputImage = document.querySelector('#image')

myForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    image: inputImage.value,
  }
  postObject(formData)
  console.log(formData)
})

/// non ho capito

const postObject = (object) => {
  fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then((res) => res.json())
    .then((data) => console.log('RESPONSE: ', data))
    .catch((e) => console.log('ERROR: ', e))
}
