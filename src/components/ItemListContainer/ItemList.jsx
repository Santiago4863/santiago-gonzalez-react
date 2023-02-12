//import React, { useState } from 'react';
import './ItemListContainer.css';
import {Link} from 'react-router-dom';
import items from '../../data/item';

export default function ItemList(props) {
  let urlDetail = `/items/${props.id}`
  /*
  let [boleanFavorite, setBoleanFavorite]= useState(false)
  function handleFavorite(){
    setBoleanFavorite(!boleanFavorite)
  }
  */
  return (
    <div className='cardUnidad'>
        <img className='imgProduct' src={items.imagen} alt="lentes" />
        <p className='titleProduct'>{props.titulo}</p>
        <p className='priceProduct'>$ {props.precio}</p>
        <Link to={urlDetail}>Ver Detalle</Link>
    </div>
  )
}
