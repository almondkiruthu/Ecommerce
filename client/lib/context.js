import React from "react";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = () => {
  //Add our state here
  const [qty , setQty] = useState(1);
  return(
    <ShopContext.Provider>

    </ShopContext.Provider>
  )
}