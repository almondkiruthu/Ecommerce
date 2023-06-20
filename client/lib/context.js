import React, { Children } from "react";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our state here
  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    setQty((prevQty)=> prevQty + 1);
  };
  const decrement = () => {
    if (qty > 1) {
      setQty((prevQty)=> prevQty - 1);
    }
    else {
      
  return (
    <ShopContext.Provider value={{ qty, increaseQty }}>{children}</ShopContext.Provider>
  );
};


export const useStateContext = () => useContext(ShopContext);