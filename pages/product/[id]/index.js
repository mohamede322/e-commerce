import Product from "../../../components/Product";

export default function index({ product }) {
  return <Product product={product} type="details" />;
}

export const getServerSideProps = async (context) => {
  const url = `https://fakestoreapi.com/products/${context.params.id}`;
  const res = await fetch(url);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
