import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from './context/cartProvider';
import Cart from './Cart/Cart';


function App() {
  const styleTitulo={
    textAlign:"center",
    margin: "40px",
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
  }
  return (
    <>
      <CartProvider>
      <BrowserRouter>

        <div className='App-header'>
          <Navbar/>
        </div>
        <h1 style={styleTitulo}>Todos los productos</h1>
      <Routes>

        <Route path='/' element={
          <div className='Container'>
          <ItemListContainer/>
        </div>}/>

        <Route path='/categoria/:categoria' element={
        <div className='Container'>
          <ItemListContainer/>
        </div>}/>
        
        <Route path='/item/:id' element={
          <div className='Container'>
          <ItemDetailContainer/>
        </div>
        }/>

        <Route path='cart' element={
          <div className='Container'>
            <Cart />

        </div>
          }/>

        <Route path='*' element={<h1>404: Recurso no encontrado</h1>}/>
      </Routes>
      </BrowserRouter>
          </CartProvider>
    </>
  );
}

export default App;
