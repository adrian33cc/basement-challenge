import React from 'react';
import {Product} from "../product/types";
import Image from "next/image";

interface Props{
  product:Product;
  addToCart:(item:Product) =>void;
}

const ItemProduct: React.FC<Props> = ({product,addToCart}) => {
  return (
    <div  className={"border-white border-b-2 p-4 "}>
      <Image
        alt={product.name}
        className={"bg-gradient-to-t from-gray-700"}
        height={500}
        src={product.image}
        width={500}
      />
      <div className={"flex justify-between"}>
        <h3 className="text-white">{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <button onClick={() => addToCart(product)}>ADD</button>
    </div>
  );
};

export default ItemProduct;
