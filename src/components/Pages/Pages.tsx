import React, { FC } from 'react';
import  { useEffect, useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Productdetails from '../Productdetails/Productdetails'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/Checkout'
import Order from '../Order/Order'

interface PagesProps {}

const Pages: FC<PagesProps> = () => {
  
  return(
  <div>
    <Routes>
      <Route path='/product/:productId' element={<Productdetails/>}/>
      <Route path='/' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/order' element={<Order/>}/>
    </Routes>
  </div>
)}

export default Pages;
