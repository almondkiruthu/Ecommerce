import React from "react";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

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
    <div>
      <img src={Image.data.attributes.formats.medium.url} alt="awesome product" />
      <div>
        <h3>{Title}</h3>
        <p>{Description}</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>Plus</button>
        <p>0</p>
        <button>Minus</button>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductDetails;
