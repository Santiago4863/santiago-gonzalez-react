import React, {useEffect,} from 'react'
import '../ItemListContainer/ItemListContainer.css'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

import {getFirestore, getDoc, doc } from 'firebase/firestore'

export default function ItemDetailContainer() {
  
  const [singleProduct, setSingleProduct] = useState({})
  let {id} = useParams();

const getProducts = () => {
  const db = getFirestore()
  const querySnapshot = doc(db, "items", id)


  getDoc(querySnapshot)
  .then((response) => {
    console.log(response.id);
    console.log(response.data());
    setSingleProduct({id: response.id, ...response.data()})
  })
  .catch((error) => {console.log(error);})
}



  
  useEffect(()=>{
   getProducts()

  }, [])
  return (
    <div>

      <ItemDetail props={singleProduct} />
    </div>
    );


  }
  