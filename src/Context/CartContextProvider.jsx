import React, {createContext, useState} from 'react';
export const contextCart = createContext(null);
import {PRODUCTS as Products} from '../Products';
export default function CartContextProvider({children})
{
    const initialItems = ()=>{
        let items = {};
        for (let i = 0;i<Products.length;i++){
            items[i+1] = 0;
        }
        return items;

    }

const [cart,setCart] = useState(()=>initialItems());

const totalAmount = ()=>{
  let amount = 0;
   for(let i = 1;i<=Products.length;i++){
     if(cart[i]>0){
      amount += cart[i] * (Products.find(p=>p.id===i).Price);
     }
   }
   return amount;
  }

const addToCart =(id)=>{
  setCart(previous=>({...previous,[id]:previous[id]+1}))
}
const removeToCart =(id)=>{
  setCart(previous=>({...previous,[id]:previous[id]-1}))
}
const upDateCartItems = (value , id)=>{
  setCart(previous=>({...previous,[id]:Number(value)}))
}


const value = {
  cart,
  addToCart,
  removeToCart,
  upDateCartItems,
  totalAmount
}

  return (
    <contextCart.Provider value={value}>{children}</contextCart.Provider>
  );
}
