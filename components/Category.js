import Image from "next/image";
import Link from "next/link";
import CatStyles from "../styles/scss/Category.module.css";

export default function Category({ category }) {
  return (
    <div className={`col-lg-3 col-md-6 text-light mb-3`}>
      <p className={`text-uppercase`}> {category}</p>
      <Link href={`/products/${category}`}>
        <a>
          <Image
            src={`/${category.split("'")[0]}.jpg`}
            alt={`${category.split("'")[0]}-img`}
            width="300"
            height="300"
            objectFit="cover"
            className={`${CatStyles.category_img}`}
          />
        </a>
      </Link>
    </div>
  );
}
