import Head from "next/head";
import { PRODUCT_QUERY } from "../lib/query";
import { useQuery } from "urql";
import Product from "../components/Product";
import { Gallery } from "../styles/Gallery";

export default function Home() {
  //fetch products from strapi
  const [result] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = result;

  //Check if data is fetching...
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const products = data.products.data;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello nEXT</h1>
        <Gallery>
          {" "}
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </div>
  );
}
