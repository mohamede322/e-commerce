import Product from "../components/Product";

export default function products({ products }) {
  return (
    <div className="row g-3 py-3 container-md m-auto">
      {products.map((product, i) => (
        <Product key={i} product={product} type="card" />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
