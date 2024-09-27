import React, { FC, useEffect, useState } from 'react';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GrFormNextLink } from "react-icons/gr";

interface CartProps {

}

const Cart: FC<CartProps> = () => {
  const [cartitems, setCartitems] = useState<any[]>(() => {  
    const storedItems = localStorage.getItem('cartitems');  
    return storedItems ? JSON.parse(storedItems) : [];  
  })
  
  return(
    <div className='h-[85vh] flex flex-col items-center w-[100%] '>
      {cartitems.map((each,index)=>{
        return(
          <div className='flex justify-around items-center h-[10vh] w-[90%] shadow-lg mt-1 mb-1 rounded-lg bg-gray-300 ' key={`${each.id}+${new Date().valueOf()}+${index}`}>
             <div className='font-bold flex items-center justify-start lg:text-2xl w-[25%] text-sm font-mono '>{each.name}</div>
             <div className='font-bold flex items-center justify-start lg:text-xl w-[25%] text-sm font-mono'>RS.{each.price}</div>
             <div className='font-bold flex items-center justify-start text-sm w-[10%]'>{each.quantity}</div>
             <div className='h-[90%] flex justify-center w-[10%] items-center '><img src={each.image} className='h-[100%] w-[100%]' alt="" /></div>
          </div>
        )
      })} 
      <div className='shadow-lg h-[15vh] bg-gray-300 w-[90%]  rounded-lg mt-3 flex items-center justify-around'>
        <div className='font-bold lg:text-xl text-xs flex items-center  '>FOR CHECKOUT CLICK PROCEED BUTTON<GrFormNextLink/> </div>
        <Link to="/checkout"><div className='hover:bg-gray-700 hover:text-white  rounded-lg p-2'><MdOutlineShoppingCartCheckout size={70}/></div></Link>
      </div>
    </div>
  )
}

export default Cart

