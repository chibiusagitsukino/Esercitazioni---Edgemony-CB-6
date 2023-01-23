// PUT
const putForm = document.querySelector('#putCatForm')
const delForm = document.querySelector('#delCatForm')

const newCategoryNameInput = document.querySelector('.category-new-name')
const newCategoryImageInput = document.querySelector('.category-new-image')
const putCategoryId = document.querySelector('#put-category-id')

const delCategoryId = document.querySelector('#delCategoryId')

let putObj = {}

const changeCategoryNameAndImage = (categoryId) => {
  fetch('https://api.escuelajs.co/api/v1/categories/' + categoryId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(putObj) /* mando putObj all'Api */,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    })
}

putForm.addEventListener('submit', (event) => {
  event.preventDefault()

  putObj = {
    name: newCategoryNameInput.value,
    image: newCategoryImageInput.value,
  }

  // .value serve per accedere al valore digitato dentro l'input
  changeCategoryNameAndImage(putCategoryId.value)
})

///////////////
// DELETE

const deleteCategory = (categoryId) => {
  fetch('https://api.escuelajs.co/api/v1/categories/' + categoryId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data !== true) {
        alert(`ERROR: ` + data.name)
      } else {
        alert(`SUCCESSFULLY DELETED!`)
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

delForm.addEventListener('submit', (event) => {
  event.preventDefault()
  deleteCategory(delCategoryId.value)
})
