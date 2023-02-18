import React, { useContext, useState } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import { cartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';


export default function ItemDetail({props}) {

  const {addItem} =useContext(cartContext)
  const [contador,setContador] = useState(1)
  

  return (

    
    <div className='cardUnidad'>
        <h2 className='titleProduct'>{props.titulo}</h2>
        <img className='imgProduct' src={`/img/${props.imagen}`} alt="lentes" />
        <h2 className='descriptionProduct'>{props.descripcion}</h2>
        <h3 className='stockProduct'>Stock Disponible: {props.stock}</h3>
        <h3 className='priceProduct'>${props.precio}</h3>
        
<ItemCount>
contador={contador}
actualizaValor={setContador}
stock={props.stock}
</ItemCount>
<div>
<button onClick={() => addItem(props, contador)}>Agregar a Carrito {''}</button>
</div>
    </div>
  )
}

        /*
        */