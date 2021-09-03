import React, {useState} from "react";

import {Product} from "../product/types";

import CartItem from "./CartItem";

interface Props {
  cardItems: Product[];
  handleCart: () => void;
  setCartItems: (item: Product) => void;
}

const Cart: React.FC<Props> = ({cardItems, handleCart, setCartItems}) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {};

  return (
    <div className={"border border-white menu bg-black z-10  "}>
      <button className={"inline-block p-4 "} onClick={handleCart}>
        X CLOSE
      </button>
      <ul className={"overflow-y-scroll p-4"}>
        {cardItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className={"grid grid-cols-5 "}>
        <p className={"col-span-3 "}>
          Total <span>${total}</span>
        </p>
        <button className={"col-span-2"}>CHECKSUM</button>
      </div>
    </div>
  );
};

export default Cart;
