import './index.css'

const Gallery = (props) => {
  const images = props.images.map((imageUrl) => (
    <img key={imageUrl} src={imageUrl} alt='gallery' />
  ))

  return (
    <div className='gallery'>
      <div className='gallery-header'>
        <h2>Gallery</h2>
      </div>
      <div className='gallery-images'>{images}</div>
    </div>
  )
}

export default Gallery
