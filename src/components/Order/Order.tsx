import React, { FC, useState } from 'react';


interface OrderProps {}

const Order: FC<OrderProps> = () => {
  const [order, setOrder] = useState<any[]>(() => {  
    const storedItems = localStorage.getItem('orderplaced');  
    return storedItems ? JSON.parse(storedItems) : [];  
  })

  console.log(order)

  return(
  <div className='flex flex-col items-center'>
    {order.map((each,index)=>{
      return(
          <div className='flex flex-col justify-around items-center w-[90%] shadow-lg mt-1 mb-1 rounded-lg bg-gray-300 ' key={`${each.id}+${new Date().valueOf()}+${index}`}>
             {each.items.map((item:any)=>{
              return(
                <div className='h-[10vh] w-[100%]  flex justify-around '>
                  <div className='font-bold h-[9vh] p-2 flex items-center justify-start lg:text-2xl w-[25%] text-sm font-mono'>{item.name}</div>
                  <div className='font-bold h-[9vh] p-2 flex items-center justify-start lg:text-xl w-[25%] text-sm font-mono'>{item.price}</div>
                  <div className='font-bold h-[9vh] p-2 flex items-center justify-start lg:text-xl text-sm w-[10%]'>{item.quantity}</div>
                  <div className='h-[9vh] flex justify-center lg:w-[10%] p-2 w-[25%] items-center'><img src={item.image} className='h-[100%] w-[100%]' alt="" /></div>
                </div>
              )
             })}
             <div className='flex h-[10vh] w-[100%] justify-end '>
              <div className='flex items-center justify-center pr-2 font-bold text-xl'>Total Price :</div>
              <div className='flex items-center justify-center pr-3 font-bold text-start text-xl'>{each.totalprice}</div>
             </div>
          </div>
      )
    })}
  </div>
);}

export default Order;
