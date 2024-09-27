import { withTheme } from '@emotion/react';
import React, { FC, useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaBoxOpen } from "react-icons/fa";


interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  // const [cartitems, setCartitems] = useState<any[]>(() => {  
  //   const storedItems = localStorage.getItem('cartitems');  
  //   return storedItems ? JSON.parse(storedItems) : [];  
  // });


  return(
  <div className='bg-gray-700 w-[100%] h-[15vh] sticky top-0 rounded-b-lg flex justify-between items-center p-2 lg:p-6'>
    <Link to="/"> <div className='lg:text-4xl text-normal font-bold text-white font-mono italic  hover:text-cyan-300'>DigiShop</div></Link>
     <div className='w-[60%] h-[100%] flex items-center   '><FaSearch className='text-white p-1' size={40}/><input className='w-[100%] lg:h-[70%] p-2 h-[40%] rounded-lg' type="text" /></div>
     <Link to="/cart"><div className='h-[100%]  flex items-center text-white hover:scale-150'><FaCartPlus size={30} /></div> </Link> 
     <Link to="/order"><div className='h-[100%] flex items-center text-white hover:scale-150'><FaBoxOpen size={30}/></div></Link>
  </div>
);}

export default Navbar;
