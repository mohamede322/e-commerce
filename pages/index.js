import Slider from "../components/Slider";
import Categories from "../components/Categories";
import homeStyles from "../styles/scss/Home.module.css";
export default function Home({ sliderPics, categoriesData }) {
  return (
    <div className={homeStyles.home}>
      <Slider sliderPics={sliderPics} />
      <Categories categories={categoriesData} />
    </div>
  );
}
export const getStaticProps = async () => {
  const sliderUrl = "https://fakestoreapi.com/products?limit=5";
  const sliderRes = await fetch(sliderUrl);
  const sliderPics = await sliderRes.json();

  const categoriesUrl = "https://fakestoreapi.com/products/categories";
  const categoriesRes = await fetch(categoriesUrl);
  const categoriesData = await categoriesRes.json();

  return {
    props: {
      sliderPics,
      categoriesData,
    },
  };
};
