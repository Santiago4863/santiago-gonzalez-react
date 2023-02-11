import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <>
      
      <nav className='nav'>
        <Link to="/" className='NombreLogo'><p>TECNOMMERCE</p></Link>
        <ul className='padreLinks'>
          <Link to="/" className='ancorNav'>Inicio</Link>
          <Link to="/category/smartphones" className='ancorNav'>Celulares</Link>
          <Link to="/category/laptops" className='ancorNav'>Portatiles</Link>
          <Link to="/category/fragrances" className='ancorNav'>Fragrancias</Link>
        </ul>
        <CartWidget/>
      </nav>
    </>
  )
}
export default Navbar;