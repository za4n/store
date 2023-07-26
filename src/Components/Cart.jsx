
import React ,{ useContext } from 'react'
import { PRODUCTS as Products } from '../Products'
import { contextCart } from '../Context/CartContextProvider';
import CartProduct from './CartProduct';
import {  Link} from 'react-router-dom'


export default function Cart() 
{
  

  const {cart , totalAmount} = useContext(contextCart);
  return (
    <>
    <div className='cart'>
     {Products.map(P=>{
      if(cart[P.id] > 0){
        return <CartProduct  key = {P.name} data = {P}></CartProduct>
      }
     })}
    </div>
    <div className="extra">
      <button ><Link to = '/'>Continue shopping</Link></button>
     {totalAmount() !== 0 && <p>Total Amount {totalAmount()}$</p>}
    </div>
    </>
  )
}
