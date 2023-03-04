import React from 'react'
import './NavBar.css'
import { useContext, useState, useEffect} from 'react'
import { cartContext } from '../../context/cartContext'

export default function CartWidget() {
  const {cart} = useContext(cartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      cart?.reduce((prev, curr) =>{
        console.log(prev, curr);
        return prev + curr.quantity
      }, 0)
    )
  }, [cart])


  return (
    <div className='contenedorCarrito'>
      <span className='numero'>

      {total}
      </span>
    <img className='imgCarrito' src='https://img2.freepng.es/20180320/ize/kisspng-shopping-cart-computer-icons-white-cart-png-simple-5ab15d03469849.3773414815215731232892.jpg' alt='carrito_compras'/>
    </div>
  )
}
