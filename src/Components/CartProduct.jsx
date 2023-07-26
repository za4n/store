import React from 'react'
import { contextCart } from '../Context/CartContextProvider';
import { useContext } from 'react'

export default function CartProduct({data}) {
    const { id,name, Price} = data;
    const {cart,addToCart,removeToCart,upDateCartItems} = useContext(contextCart);
  return (
    <div className='cartProduct'>
      Name {name}
      <p>Price {Price}</p>
  <div className="buttons">
    <button className='minus'onClick={()=>{removeToCart(id)}}>-</button>
    <input type='number' style={{textAlign:"center"}}  onChange = {(e)=>{upDateCartItems(e.target.value,id)}}value={cart[id]}/>
    <button className='plus'onClick={()=>{addToCart(id)}}>+</button>
  </div>
   </div>
  )
}
