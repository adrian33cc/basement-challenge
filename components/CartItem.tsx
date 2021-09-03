import React, {useState} from "react";
import Image from "next/image";

import {Product} from "../product/types";

interface Props {
  item: Product;
}

const CartItem: React.FC<Props> = ({item}) => {

  const [quantity, setQuantity] = useState(1);


  return (
    <li className={'text-left bg-gray-800 mt-3 p-4 grid grid-cols-5 gap-4'}>
      <Image alt={item.name} src={item.image} width={300} height={300} className={'col-span-3'}/>
      <div className={'col-span-3'}>
        <h3>{item.name}</h3>
        <p className={'text-gray-600'}>{item.description}</p>

        <p className={'my-4'} >QUANTITY : <span className={'border border-gray-500 px-2 rounded cursor-pointer mx-2'} onClick={() => setQuantity(quantity-1)}>-</span> {quantity} <span className={'border border-gray-500 px-2 rounded cursor-pointer mx-2'} onClick={() => setQuantity(quantity+1)}>+</span></p>
        <p className={'text-right py-2 text-4xl'}><span>${item.price}</span>X <span>{quantity}</span> = ${quantity*item.price}</p>
      </div>
    </li>
  );
};

export default CartItem;
