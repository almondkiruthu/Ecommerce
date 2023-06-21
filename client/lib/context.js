import React, { Children } from "react";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our state here
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  //Increase product quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      else {
        return prevQty - 1;
      }
    });
  };

  //Add product to Cart
  const onAdd  = (product, quantity) => {

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
