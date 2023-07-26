import React from 'react'
import { PRODUCTS as Products } from '../Products'
import Product from './Product'

export default function Shop() {
  return (
    <div className='shop'>
      {Products.map(P=>{
        return <Product key={P.id} data={P}/>
      })}
    </div>
  )
}
