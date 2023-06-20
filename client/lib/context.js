import React, { Children } from "react";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our state here
  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decreaseQty = () => {
    if (prevQty - 1 < 1) {
      return 1;
    } else {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <ShopContext.Provider value={{ qty, increaseQty, decreaseQty }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
