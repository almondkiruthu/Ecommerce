import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavItems, NavStyle } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

const Nav = () => {
  const { showCart, setShowCart } = useStateContext();
  return (
    <NavStyle>
      <Link href="/">Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyle>
  );
};

export default Nav;
