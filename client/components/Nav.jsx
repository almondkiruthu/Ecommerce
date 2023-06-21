import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavItems, NavStyle } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
const { AnimatePresence } = require("framer-motion");

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <NavStyle>
      <Link href="/">Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && <span>{totalQuantities}</span>}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyle>
  );
};

export default Nav;
