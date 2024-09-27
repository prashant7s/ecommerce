import React, { FC } from "react";
import { GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'

interface ProductcardProps {
  details: any;
  productToCart:(some:any)=>void
}

const Productcard: FC<ProductcardProps> = ({ details,productToCart }) => (
  <div className=" flex flex-col justify-around lg:h-[30vh] lg:w-[30vw] h-[30vh] w-[90%] mt-3  ">
    <Link to={`/product/${details.id}`}>
      <div className="lg:h-[25vh] lg:w-[30vw] h-[25vh] w-[100%] flex flex-col hover:bg-gray-700 hover:text-white items-center justify-center shadow-lg rounded-lg  p-3 bg-gray-300">
        <div className="h-[50%] w-[30%]  flex items-center ">
          <img src={details.image} className="h-[100%] w-[100%]" alt="" />
        </div>
        <div className="font-bold text-center text-xl">{details.name}</div>
        <div className="text-xs p-2 text-center">{details.description}</div>
      </div> 
    </Link>
    <div className=" flex justify-between w-[100%] p-3">
          <div className="font-bold ">RS.{details.price}</div>
            <button type="button" className="text-black w-[60%] flex items-center justify-center rounded-lg bg-gray-300 " onClick={()=>{
              productToCart(details.id)
              toast.success("Item added to Cart")
            }}>
              <IoAddOutline size={20} />
            </button>
        </div>
  </div>
);

export default Productcard;
