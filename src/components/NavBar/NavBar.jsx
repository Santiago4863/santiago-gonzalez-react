import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <>
      
      <nav className='nav'>
        <Link to="/" className='NombreLogo'><p>Valkeem</p></Link>
        <ul className='padreLinks'>
          <Link to="/" className='ancorNav'>Inicio</Link>
          <Link to="/categoria/Hombre" className='ancorNav'>Hombre</Link>
          <Link to="/categoria/Mujer" className='ancorNav'>Mujer</Link>
          <Link to="/categoria/Niños" className='ancorNav'>Niños</Link>
        </ul>
        <CartWidget/>
      </nav>
    </>
  )
}
export default Navbar;