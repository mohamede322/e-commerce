import Product from "../../../components/Product";

export default function index({ products }) {
  return (
    <div className="row py-5 w-100 gy-3 container m-auto d-flex align-items-center justify-content-center">
      {products.map((product, i) => (
        <Product key={i} product={product} type="card" />
      ))}
    </div>
  );
}

export const getStaticProps = async (context) => {
  const url = `https://fakestoreapi.com/products/category/${context.params.category}`;
  const res = await fetch(url);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
export const getStaticPaths = async () => {
  const url = "https://fakestoreapi.com/products/categories";
  const res = await fetch(url);
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { category: category.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
