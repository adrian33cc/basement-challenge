import React, {Fragment, useEffect, useState} from "react";
import Image from "next/image";
//import Link from "next/link";
import type {GetStaticProps, NextPage} from "next";

import logo from "../public/logo.svg";
import footerImage from "../public/footer.svg";
import heroImage from "../public/header.svg";
import {Product} from "../product/types";
import data from "../product/mock.json";
import Cart from "../components/Cart";
import ItemProduct from "../components/ItemProduct";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({products}) => {
  const [open, setOpen] = useState(false);

  const [cartItems, setCartItems] = useState([] as Product[]);

  const handleCart = () => {
    setOpen(!open);
    //console.log("Abriendo Cart");
  };

  const addToCart = (item: Product) => {
    if (!cartItems.includes(item)) {
      setCartItems([...cartItems, item]);
    }

    return [...cartItems];
  };

  const removeToCart = (item: Product) => {
    cartItems.filter((producto) => producto.id != item.id);
  };

  return (
    <Fragment>
      <div className={"container m-auto text-center "}>
        <header className=" flex justify-between  p-4 ">
          <Image alt="Basement" src={logo} />
          <button
            className={
              "border border-white rounded-2xl px-4 py-2 hover:bg-gray-600 transform motion-safe:hover:scale-110"
            }
            onClick={handleCart}
          >
            Cart
          </button>
        </header>
        <div className={"relative"}>
          {open ? (
            <Cart cardItems={cartItems} handleCart={handleCart} setCartItems={setCartItems} />
          ) : null}
        </div>
        <div>
          <Image alt="heroImage" src={heroImage} />
        </div>

        <div className={"my-20"}>
          <p className={"border-b-4 border-t-4 border-white text-4xl"}>
            {" "}
            - A man can´t enough basement swag -{" "}
          </p>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {products.map((product) => (
            <ItemProduct key={product.id} addToCart={addToCart} product={product} />
          ))}
        </main>

        <footer>
          <Image alt="footer" src={footerImage} />
        </footer>
      </div>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: data,
    },
  };
};

export default Home;
