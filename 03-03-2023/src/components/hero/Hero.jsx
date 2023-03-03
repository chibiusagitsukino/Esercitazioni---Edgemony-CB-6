import './index.css'

const Hero = ({ title }) => {
  return (
    <div className='Hero'>
      <img
        src='https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg'
        alt='hero image'
      />
      <h2>{title}</h2>
    </div>
  )
}

export default Hero
