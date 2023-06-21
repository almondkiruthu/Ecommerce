import React from "react";
import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
} from "../styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Quantity } from "../styles/ProductsDetail";

const Cart = () => {
  const { cartItems, decreaseQty, increaseQty, qty, setShowCart, onAdd } =
    useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length === 0 && (
          <EmptyStyle>
            <h1>You have more shopping to do! 😜</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.Image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.Title}</h3>
                  <h3>{item.Price}</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button onClick={decreaseQty}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{qty}</p>
                    <button onClick={()=> onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
