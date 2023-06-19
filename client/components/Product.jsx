import React from "react";

const Product = ({product}) => {
    //Extract info from props
    const {Title, Price, Description, Image} = product.attributes;
  return (
    <div>
      <div>
        <img src= {Image.data.attributes.formats.small.url} alt="Awesome product" />
      </div>
      <h2>{Title}</h2>
      <p>{Description}</p>
      <h3>{Price}</h3>
    </div>
  );
};

export default Product;
