import { productsList } from './mocks/productsList'
import Header from './components/header'
import Control from './components/control'
import Hero from './components/hero'
import Gallery from './components/gallery'
import ListProducts from './components/listProducts/ListProducts'
import Footer from './components/footer'
import './main.css'

const Main = () => {
  const images = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ]
  return (
    <div className='Main'>
      <Header />
      <Hero title='Store' />
      <Gallery images={images} />
      <Control listDataLength={productsList.length} />
      <ListProducts listData={productsList} />
      <Footer />
    </div>
  )
}

export default Main
