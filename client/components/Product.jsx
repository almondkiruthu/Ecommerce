import React from "react";
import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";

const Product = ({ product }) => {
  //Extract info from props
  const { Title, Price, Description, Image, slug } = product.attributes;
  return (
    <ProductStyle>
      <Link href={`/products/${slug}`}>
        {" "}
        <div>
          <img
            src={Image.data.attributes.formats.small.url}
            alt="Awesome product"
          />
        </div>
      </Link>
      <h2>{Title}</h2>
      <p>{Description}</p>
      <h3>{Price}</h3>
    </ProductStyle>
  );
};

export default Product;
