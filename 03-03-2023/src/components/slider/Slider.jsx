import { useState } from 'react'
import './index.css'

const Slider = () => {
  const images = [
    'https://images.pexels.com/photos/6173350/pexels-photo-6173350.jpeg',
    'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg',
    'https://images.pexels.com/photos/994197/pexels-photo-994197.jpeg',
    'https://images.pexels.com/photos/3784391/pexels-photo-3784391.jpeg',
    'https://images.pexels.com/photos/3765035/pexels-photo-3765035.jpeg',
  ]

  const [actualImg, setActualImg] = useState(0)

  return (
    <div className='Slider'>
      <img src={images[actualImg]} alt='image' />
      <button className='left' onClick={() => setActualImg(actualImg - 1)}>
        {'<'}
      </button>
      <button className='right' onClick={() => setActualImg(actualImg + 1)}>
        {'>'}
      </button>
    </div>
  )
}

export default Slider
