const createThreeImgSlider = (leftImgSrc, centerImgSrc, rightImgSrc) => {
  const carousel = document.createElement('div')

  const imgContainer = document.createElement('div')
  const leftImg = document.createElement('img')
  const centerImg = document.createElement('img')
  const rightImg = document.createElement('img')

  const btnContainer = document.createElement('div')
  const leftBtn = document.createElement('button')
  const centerBtn = document.createElement('button')
  const rightBtn = document.createElement('button')

  leftImg.setAttribute('src', leftImgSrc)
  centerImg.setAttribute('src', centerImgSrc)
  rightImg.setAttribute('src', rightImgSrc)

  //css
  carousel.classList.add('carousel')
  leftImg.classList.add('carousel__img1')
  centerImg.classList.add('carousel__img2')
  rightImg.classList.add('carousel__img3')

  btnContainer.className = 'slider-btns'

  leftBtn.classList.add('slider-btns')
  centerBtn.classList.add('slider-btns')
  rightBtn.classList.add('slider-btns')

  //initial state

  //   centerBtn.style.color = '#002395'
  //   centerImg.style = 'display: block'
  //   rightImg.style = 'display: none'
  //   leftImg.style = 'display: none'

  rightImg.classList.add('hide')
  leftImg.classList.add('hide')
  centerImg.classList.add('show')
  centerBtn.style.color = '#002395'

  leftBtn.textContent = '♡'
  centerBtn.textContent = '♡'
  rightBtn.textContent = '♡'

  //events
  leftBtn.addEventListener('click', () => {
    leftBtn.style.color = '#002395'
    rightBtn.style.color = '#e30613'
    centerBtn.style.color = '#e30613'

    centerImg.style = 'display: none'
    rightImg.style = 'display: none'
    leftImg.style = 'display: block'
  })

  centerBtn.addEventListener('click', () => {
    centerBtn.style.color = '#002395'
    leftBtn.style.color = '#e30613'
    rightBtn.style.color = '#e30613'

    centerImg.style = 'display: block'
    rightImg.style = 'display: none'
    leftImg.style = 'display: none'
  })

  rightBtn.addEventListener('click', () => {
    rightBtn.style.color = '#002395'
    leftBtn.style.color = '#e30613'
    centerBtn.style.color = '#e30613'

    centerImg.style = 'display: none'
    rightImg.style = 'display: block'
    leftImg.style = 'display: none'
  })

  imgContainer.append(leftImg, centerImg, rightImg)
  btnContainer.append(leftBtn, centerBtn, rightBtn)

  carousel.append(imgContainer, btnContainer)
  document.body.append(carousel)
}

createThreeImgSlider(
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ib_GcTdv8MtwzP8zbhowEU0jdKacUVpSspKs8MU1IfaAJJw0dQRH1REp_Y7T48Kw5Kc&usqp=CAUhttps://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png',
  'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
  'https://cdn.sortiraparis.com/images/80/87950/484853-visuels-disneyland-paris-chateau.jpg'
)
