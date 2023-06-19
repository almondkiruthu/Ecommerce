import React from "react";
import { ProductStyle } from "../styles/ProductStyle";

const Product = ({product}) => {
    //Extract info from props
    const {Title, Price, Description, Image} = product.attributes;
  return (
    <ProductStyle>
      <div>
        <img src= {Image.data.attributes.formats.small.url} alt="Awesome product" />
      </div>
      <h2>{Title}</h2>
      <p>{Description}</p>
      <h3>{Price}</h3>
    </ProductStyle>
  );
};

export default Product;
