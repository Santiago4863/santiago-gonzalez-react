//import React, { useState } from 'react';
//import items from '../../data/item';
import './ItemListContainer.css';
import {Link} from 'react-router-dom';

export default function ItemList(props) {
  let urlDetail = `/item/${props.id}`
  
  return (
    <div className='cardUnidad'>
        <img className='imagProduct' src={`/img/${props.imagen}`} alt="lentes" />
        <p className='titleProduct'>{props.titulo}</p>
        <p className='priceProduct'>$ {props.precio}</p>
        <Link to={urlDetail} className='detalle'>Ver Detalle</Link>
    </div>
  )
}
