import React, {useState , useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'


export default function ItemListContainer() {

  const [items,setItems] = useState([]);
  const categoria = useParams().categoria;



const getProducts = () =>{

  const db = getFirestore()
  const querySnapshot=collection(db,"items");


  if(categoria){
    const newConfiguration = query(querySnapshot, where("categoria","==", categoria))
    getDocs(newConfiguration).then((response) => {
      const data = response.docs.map((doc)=>{
 
         return {id: doc.id, ...doc.data()};
       })
       console.log(data)
       setItems(data)
     }).catch(error => console.log(error)) 
  }else{

    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((doc)=>{
        
        return {id: doc.id, ...doc.data()};
      })
      console.log(data)
      setItems(data)
    }).catch(error => console.log(error)) 
  }

  };

  useEffect(()=>{
    getProducts()
  }, [categoria])

  return (
    <div className='totalCards'>
      
          { items.map(item=>{
            return <ItemList
            key={item.id}
            id={item.id} 
            titulo= {item.titulo} 
            imagen={item.imagen}  
            precio={item.precio}
          />
          }) }
    </div>
  )
}
