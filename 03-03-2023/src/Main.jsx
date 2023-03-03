import { useState } from 'react'
// import { productsList } from './mocks/productsList'
import Header from './components/header'
// import Control from './components/control'
import Hero from './components/hero'
// import ImageProduct from './components/imageProduct'
import ListProducts from './components/listProducts/ListProducts'
import Slider from './components/slider'
import Modal from './components/modal'
import Footer from './components/footer'
import './main.css'
import ImageProduct from './components/imageProduct/ImageProduct'

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(true)
  const [isModalOpen, setModalOpen] = useState(true)
  const [singleProductModal, setSingleProductModal] = useState(null)

  return (
    <div className={`Main ${isDarkMode && 'dark-mode'}`}>
      <div className='Main'>
        {/* <ImageProduct /> */}
        <Header />
        <Hero title='Store' />
        <Slider />
        {/* <Gallery images={images} /> */}
        {/* <Control listDataLength={productsList.length} /> */}
        <ListProducts setSingleProductModal={setSingleProductModal} />
        {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
        {singleProductModal ? (
          <ImageProduct
            product={singleProductModal}
            setSingleProductModal={setSingleProductModal}
          />
        ) : null}
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
