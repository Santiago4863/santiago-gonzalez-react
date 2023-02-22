import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <>
      
      <nav className='nav'>
  <Link to="/" className='NombreLogo'>Valkeem</Link>
  <ul className='padreLinks'>
    <li><Link to="/" className='ancorNav'>Inicio</Link></li>
    <li><Link to="/categoria/Hombre" className='ancorNav'>Hombre</Link></li>
    <li><Link to="/categoria/Mujer" className='ancorNav'>Mujer</Link></li>
    <li><Link to="/categoria/Niños" className='ancorNav'>Niños</Link></li>
  </ul>
  <Link to="/cart">
  <CartWidget/>
  </Link>
</nav>
    </>
  )
}
export default Navbar;