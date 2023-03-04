import React from 'react'
import './ItemCount.css'

const ItemCount = ({contador, actualizaValor, stock,}) => {
  const onAdd = () =>{
    if (stock === contador){
      alert("No puedes comprar mas de lo que hay en stock")
      return
    }
      actualizaValor(contador + 1)
  }
  const restar = () =>{
    if(contador === 0){
      return
    }
      actualizaValor(contador - 1)
  }

return(
  <div className='agregarCarrito'>
      <div className='contador'>
      <button onClick={restar}  className='button'>-</button>
      <div>
      <span className='spanContador'>{contador}</span>
      </div>
      <button onClick={onAdd} className='button'>+</button>
      </div>
      </div>
)
}

export default ItemCount












