const categoryForm = document.querySelector('#categoryForm')
const catName = document.querySelector('#categoryName')
const catImage = document.querySelector('#categoryImage')

categoryForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = {
    name: catName.value,
    image: catImage.value,
  }
  console.log(formData)
  funzioneCat(formData, 'categories')
})

///

const funzioneCat = (objBody, param) => {
  fetch(`https://api.escuelajs.co/api/v1/` + param, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`${param} upload failed: ` + data.message[0])
      } else {
        alert(`${param} successfully loaded`)
        console.log(data)
      }
    })
    .catch((e) => console.log('ERROR: ', e))
}
