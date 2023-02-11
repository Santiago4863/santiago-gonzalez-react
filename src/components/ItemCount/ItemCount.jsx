import React from 'react'
import './ItemCount.css'
import item from '../../data/item';

export default function ItemCount(props) {
    const [count, setCount] = React.useState(1);
    function handleSuma(){
      if(count<item.props.stock){
        setCount(count+1)
      }
      else{
        console.log("la cantidad no puede superar el stock disponible")
      }
    }
    function handleResta(){
      setCount(count-1)
    }
    function onAddToCart(){
      console.log("Se agrego al carrito de compras correctamente")
    }
  return (
    <div className='agregarCarrito'>
    <div className='contador'>
        <button disabled={count===1} onClick={handleResta} className='button'>-</button>
        <h3>{count}</h3>
        <button onClick={handleSuma} className='button'>+</button>
    </div>
    <button onClick={onAddToCart}>Agregar a Carrito</button>
    </div>
  )
}
