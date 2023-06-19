import React from "react";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { DetailsStyle, ProductInfo, Quantity, Buy } from "../../styles/ProductsDetail";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const ProductDetails = () => {
  //fetch slug
  const { query } = useRouter();

  //Fetch Graphql data
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  //Check if data is fetching...
  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const { Title, Description, Price, Image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img
        src={Image.data.attributes.formats.medium.url}
        alt="awesome product"
      />
      <ProductInfo>
        <h3>{Title}</h3>
        <p>{Description}</p>

        <Quantity>
          <span>Quantity</span>
          <button><AiFillMinusCircle/></button>
          <p>0</p>
          <button><AiFillPlusCircle/></button>
        </Quantity>
        <Buy>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
};

export default ProductDetails;
