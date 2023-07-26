

import React from 'react';
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from 'react-router-dom';


import './main.css';


//components
import Nav from './Components/Nav';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

//Context
import CartContextProvider from './Context/CartContextProvider';


export default function App(){
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Nav/>}>
     <Route index element = {<Shop/>}></Route>
     <Route path='cart' element = {<Cart/>}></Route>
    </Route>
  )
)

  return (
    <CartContextProvider>
<RouterProvider router={router}/>
    </CartContextProvider>
    
  );
}

