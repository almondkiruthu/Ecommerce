import React, { Children } from "react";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our state here
  const [qty, setQty] = useState(1);
  return (
    <ShopContext.Provider value={{ qty }}>{children}</ShopContext.Provider>
  );
};


export const useStateContext = () => useContext(ShopContext);