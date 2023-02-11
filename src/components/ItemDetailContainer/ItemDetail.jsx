/*
import React, { useState } from 'react';
import '../ItemListContainer/ItemListContainer.css';

export default function ItemDetail(props) {

  let [boleanFavorite, setBoleanFavorite]= useState(false)
  function handleFavorite(){
    setBoleanFavorite(!boleanFavorite)
  }
  return (
    <div className='cardUnidad'>
        <p className='titleProduct'>{props.titleProduct}</p>
        <img className='imgProduct' src={props.imgProduct} alt={props.titleProduct} />
        <p className='descriptionProduct'>{props.descriptionProduct}</p>
        <p className='stockProduct'>Stock Disponible: {props.stock}</p>
        <p className='priceProduct'>{props.priceProduct}</p>
    </div>
  )
}
*/