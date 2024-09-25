import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ProductdetailsProps {}

const Productdetails: FC<ProductdetailsProps> = () => {
  const [details, setDetails] = useState<any>([]);
  const param = useParams();

  const url =
    "https://66f3d76177b5e889709716cb.mockapi.io/api/product/fashionshop";

  const fetchProductDetailsByID = async (url: string) => {
    const res = await fetch(url + `/${param.productId}`);
    const data = await res.json();
    setDetails(data);
    console.log(details);
  };

  useEffect(() => {
    fetchProductDetailsByID(url);
  }, []);

  return (
    <div className="h-[85vh] w-[100vw] flex items-center justify-center">
      <div className="flex flex-col items-center justify-around p-2 shadow-lg rounded-lg bg-gray-300 h-[50%] w-[90%] lg:h-[60%] lg:w-[50%]">
        <div className=" p-2 md:h-[60%] md:w-[30%] h-[50%] w-[50%]">
          <img src={details.image} className="h-[100%] w-[100%]" alt="" />
        </div>
        <div className="font-bold text-center text-xl md:text-2xl">{details.name}</div>
        <div className="text-center text-xs w-[90%] md:text-sm md:w-[60%]">{details.description}</div>
        <div className=" font-bold text-2xl md:text-xl">RS.{details.price}</div>
      </div>
    </div>
  );
};

export default Productdetails;
