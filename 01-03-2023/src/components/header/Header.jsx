import './index.css'

const Header = () => {
  return (
    <header className='Header'>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/contatti'>Contatti</a>
          </li>
          <li>
            <a href='/servizi'>Servizi</a>
          </li>
          <li>
            <a href='/chi-siamo'>Chi siamo</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
