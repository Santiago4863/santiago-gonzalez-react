import React, { useState } from 'react';
import './ItemListContainer.css';
import {Link} from 'react-router-dom';

export default function ItemList(props) {

  let urlDetail = `/item/${props.id}`
  let [boleanFavorite, setBoleanFavorite]= useState(false)
  function handleFavorite(){
    setBoleanFavorite(!boleanFavorite)
  }
  return (
    <div className='cardUnidad'>
        <img className='imgProduct' src={props.imgProduct} alt="product" />
        <p className='titleProduct'>{props.titleProduct}</p>
        <button onClick={handleFavorite} style={{backgroundColor: boleanFavorite===true? "red" : "beige"}}>❤</button>
        <p className='priceProduct'>$ {props.priceProduct}</p>
        <Link to={urlDetail}>Ver Detalle</Link>
    </div>
  )
}
