import React,{useContext} from 'react';
import { contextCart } from '../Context/CartContextProvider';

export default function Product({data}) {
    const {addToCart,cart} = useContext(contextCart);
    const {id , name , Price} = data;

  return (
    <div className='Product'>
      <p>{name} <span>{Price}$</span></p>  
      <button onClick={()=>{addToCart(id)}}><>Add to Cart {cart[id] > 0 && ("( "+cart[id]+" )")}</></button>
    </div>
  )
}
