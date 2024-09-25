import { withTheme } from '@emotion/react';
import React, { FC } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className='bg-gray-700 w-[100%] h-[15vh] sticky top-0 rounded-b-lg flex justify-between items-center p-2 lg:p-6'>
    <Link to="/"> <div className='lg:text-4xl text-normal font-bold text-white font-mono italic '>DigiShop</div></Link>
     <div className='w-[60%] h-[100%] flex items-center   '><FaSearch className='text-white p-1' size={40}/><input className='w-[100%] lg:h-[70%] p-2 h-[40%] rounded-lg' type="text" /></div>
     <div className='h-[60%] flex items-center text-white'><FaCartPlus size={30} /></div>  
  </div>
);

export default Navbar;
