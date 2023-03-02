import { useState } from 'react'
import { productsList } from './mocks/productsList'
import Header from './components/header'
import Control from './components/control'
import Hero from './components/hero'
// import Gallery from './components/gallery'
import ListProducts from './components/listProducts/ListProducts'
import Slider from './components/slider'
import Footer from './components/footer'
import './main.css'

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(true)

  return (
    <div className={`Main ${isDarkMode && 'dark-mode'}`}>
      <div className='Main'>
        <Header />
        <Hero title='Store' />
        <Slider />
        {/* <Gallery images={images} /> */}
        <Control listDataLength={productsList.length} />
        <ListProducts listData={productsList} />
        <button
          className='toggle-mode'
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <Footer />
      </div>
    </div>
  )
}

export default Main
