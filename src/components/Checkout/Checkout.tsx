import React, { FC, useEffect, useState } from 'react';
import { FaGooglePay } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => {
  const [cartitems, setCartitems] = useState<any[]>(() => {  
    const storedItems = localStorage.getItem('cartitems');  
    return storedItems ? JSON.parse(storedItems) : [];  
  })

  const [order, setOrder] = useState<any[]>(() => {  
    const storedItems = localStorage.getItem('orderplaced');  
    return storedItems ? JSON.parse(storedItems) : [];  
  })

  const [total,setTotal] = useState(0)

  const handleOrder = () => {  
    const ordervalue = {  
      items: cartitems,   
      totalprice: total   
  };
    setOrder(prev => {  
        const newOrder = [...prev,ordervalue];   
        localStorage.setItem('orderplaced', JSON.stringify(newOrder));  
        return newOrder;   
    });  
    setCartitems([]);  
    localStorage.removeItem('cartitems');  
    toast.success("order placed")
}

  const findTotal = () =>{
    let price = 0;
     cartitems.map(each=>{
        price+=Number(each.price)
     })
     setTotal(price)
  }

  useEffect(()=>{
    findTotal()
  })

  return(
  <div className='h-[85vh] w-[100%] flex flex-col items-center justify-center'>
    <div className='h-[60%] rounded-lg bg-gray-300 lg:w-[50%] w-[90%] flex flex-col items-center justify-center'>
       <div className='h-[10%] w-[90%] flex justify-between items-center font-bold'>
        <div >Total Items</div>
        <div>{cartitems.length}</div>
       </div>
       <div className='h-[10%] w-[90%] flex justify-between items-center font-bold'>
        <div>Subtotal Price</div>
        <div>Rs.{total}</div>
       </div>
       <div className='h-[10%] w-[90%] flex justify-between items-center font-bold'>
        <div>Shipping Charges</div>
        <div>Rs.25</div>
       </div> 
       <div className='h-[10%] w-[90%] flex justify-between items-center font-bold'>
        <div>Total Price</div>
        <div>Rs.{total+ 25}</div>
       </div>
       <div className='h-[10%] w-[20%] bg-green-500 flex items-center justify-center rounded-lg'>
      <button type='button' className='flex items-center justify-around h-[100%] w-[100%] font-bold' onClick={handleOrder} >
        <div className='h-[100%] w-[50%] flex items-center justify-center'>Pay</div>
        <div className='h-[100%] w-[50%] flex items-end justify-center'><FaGooglePay size={30}/></div>
      </button>
    </div>
    </div>
  </div>
);}

export default Checkout;
