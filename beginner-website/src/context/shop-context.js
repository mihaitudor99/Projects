import React from "react";
import PRODUCTS from "../products";
import { createContext, useState } from "react";

export const ShopContext = createContext(null);

function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};

export default ShopContextProvider;
