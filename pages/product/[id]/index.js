import Product from "../../../components/Product";

export default function index({ product }) {
  return <Product product={product} type="details" />;
}

export const getStaticProps = async (context) => {
  const url = `https://fakestoreapi.com/products/${context.params.id}`;
  const res = await fetch(url);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
export const getStaticPaths = async () => {
  const url = `https://fakestoreapi.com/products`;
  const res = await fetch(url);
  const products = await res.json();

  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
