import React, { FC, useState } from "react";
import Prductcard from '../Productcard/Productcard'

interface ProductProps {
  product: any[];
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-row flex-col  justify-around">
        {product.map((each) => {
          return(
            <div className="flex justify-center" key={each.id}>
              <Prductcard details={each}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Product;
