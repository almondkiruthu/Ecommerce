import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavItems, NavStyle } from "../styles/NavStyles";
import Cart from "./Cart";
const Nav = () => {
  return (
    <NavStyle>
      <Link href="/">Styled.</Link>
      <NavItems>
        <FiShoppingBag />
        <h3>Cart</h3>
        <Cart />
      </NavItems>
    </NavStyle>
  );
};

export default Nav;
