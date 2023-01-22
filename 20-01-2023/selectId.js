const createDynamicOption = () => {
  fetch('https://api.escuelajs.co/api/v1/products/')
    .then((res) => res.json())
    .then((data) => {
      let filteredData = data.filter(
        (obj, index, self) =>
          self.findIndex(
            (element) => element.category.id === obj.category.id
          ) === index
      )
      filteredData.forEach((element) => {
        const option = document.createElement('option')
        option.setAttribute('value', element.category.id)
        option.textContent = element.category.name
        idSelect.append(option)
      })
    })
    .catch((e) => console.log('Questo è il mio errore: ', e))
}
