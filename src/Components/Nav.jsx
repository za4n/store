import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
export default function Nav() {
  return (
    <>
    <div className='navBar'>
        <nav>
            <ul>
                <li><NavLink to ='/'>Shop</NavLink></li>
                <li><NavLink to ='cart'>Cart</NavLink></li>
            </ul>
        </nav>
      
    </div>
    <section>
      <Outlet></Outlet>
    </section>
    </>
  )
}
