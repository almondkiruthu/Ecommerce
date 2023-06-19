import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
const Nav = () => {
  return (
    <div>
      <Link href="/">Styled.</Link>
      <div>
        <FiShoppingBag />
        <h3>Cart</h3>
      </div>
    </div>
  );
};

export default Nav;
