import React, { FC } from "react";
import { GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";

interface ProductcardProps {
  details: any;
}

const Productcard: FC<ProductcardProps> = ({ details }) => (
  <div className=" flex justify-around lg:h-[30vh] lg:w-[30vw] h-[30vh] w-[90%] mt-2 ">
   <Link to={`/product/${details.id}`}> 
    <div className="lg:h-[30vh] lg:w-[30vw] h-[30vh] w-[90%] flex flex-col hover:bg-gray-700 hover:text-white items-center justify-center shadow-lg rounded-lg  p-3 bg-gray-300">
      <div className="h-[50%] w-[30%]  flex items-center ">
        <img src={details.image} className="h-[100%] w-[100%]" alt="" />
      </div>
      <div className="font-bold text-center text-xl">{details.name}</div>
      <div className="text-xs p-2 text-center">{details.description}</div>
      <div className="font-bold">RS.{details.price}</div>
    </div>
    </Link>
    {/* <div className="flex items-center justify-center lg:h-[30vh] lg:w-[5vw] h-[30vh] w-[10%] ">
      <Link to={`/product/${details.id}`}>
        <button className="bg-gray-300 h-[100%] p-2 rounded-lg hover:text-white hover:bg-gray-700">
          <GrCaretNext size={40} />
        </button>
      </Link>
    </div> */}
  </div>
);

export default Productcard;
