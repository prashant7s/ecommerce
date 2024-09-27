import React, { FC, useEffect, useState } from "react";  
import Prductcard from '../Productcard/Productcard';

interface ProductProps {

}  

const Product: FC<ProductProps> = () => {  

  const [product, setProduct] = useState<any[]>([]);  

  const url = 'https://66f3d76177b5e889709716cb.mockapi.io/api/product/fashionshop';  

  const fetchProductDetailsApi = async (url: string) => {  
    try {  
      const res = await fetch(url);  
      const data = await res.json();  
      setProduct(data);  
    } catch (err) {  
      console.error(err);  
    }  
  };  

  const [cartitems, setCartitems] = useState<any[]>(() => {  
    const storedItems = localStorage.getItem('cartitems');  
    return storedItems ? JSON.parse(storedItems) : [];  
  });  

  const productToCart = (productId: any) => {  
    const existingItemIndex = cartitems.findIndex(item => item.id === productId);  

    if (existingItemIndex !== -1) {  
      setCartitems(cartitems.map((item, index) => {  
        if (index === existingItemIndex) {  
          return { ...item, quantity: item.quantity + 1 };  
        }  
        return item;  
      }));  
    } else {   
      const productToAdd = product.find(item => item.id === productId);  
      if (productToAdd) {  
        const newProduct = { ...productToAdd, quantity: 1 };  
        setCartitems([...cartitems, newProduct]);  
      }  
    }  
  };  

  useEffect(() => {  
    fetchProductDetailsApi(url); 
    localStorage.setItem('cartitems', JSON.stringify(cartitems)); 
  }, [cartitems]);  

  return (  
    <div>  
      <div className="flex flex-wrap lg:flex-row flex-col justify-around bg-gray-200">  
        {product.map((each) => (  
          <div className="flex justify-center" key={each.id}>  
            <Prductcard productToCart={productToCart} details={each} />  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Product;