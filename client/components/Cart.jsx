import React from "react";
import { useStateContext } from "../lib/context";

const Cart = () => {
  const { cartItems } = useStateContext();
  return (
    <div>
      <div>
        <div>
          <h1>You have more shopping to do! 😜</h1>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h3>Title</h3>
            <h3>Price</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
