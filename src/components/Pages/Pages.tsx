import React, { FC } from 'react';
import  { useEffect, useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Productdetails from '../Productdetails/Productdetails'
import Product from '../Product/Product'

interface PagesProps {}

const Pages: FC<PagesProps> = () => {
   
  const [product,setProduct] = useState<any[]>([])

  const url = 'https://66f3d76177b5e889709716cb.mockapi.io/api/product/fashionshop'

  const fetchProductDetailsApi = async(url:any) =>{
    try{
      const res = await fetch(url)
      const data = await res.json()
      setProduct(data)
      console.log(data)
    }catch(err){
      throw err
    }
  }

  useEffect(()=>{
    fetchProductDetailsApi(url)
  },[])
  
  return(
  <div>
    <Routes>
      <Route path='/product/:productId' element={<Productdetails/>}/>
      <Route path='/' element={<Product product={product}/>}/>
    </Routes>
  </div>
)}

export default Pages;
