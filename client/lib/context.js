import React, { Children } from "react";
import { createContext, useContext, useState } from "react";


const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our state here
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
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
  const onAdd = (product, quantity) => {
    //Increase the total price
    setTotalPrice((prevTotal) => prevTotal + product.Price * quantity);
    //Increase the total quantity
    setTotalQuantities((prevTotal) => prevTotal + quantity);
    //Check if product is already in cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove product from Cart
  const onRemove = (product) => {
    //Decrease the total price
    setTotalPrice((prevTotal) => prevTotal - product.Price);
    //Deacrease the total quantity
    setTotalQuantities((prevTotal) => prevTotal - 1);
    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    //Log the exist
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

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
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
