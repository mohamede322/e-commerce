import Image from "next/image";
import Link from "next/link";
import { ctx } from "../pages/_app";
import { useContext } from "react";

export default function Product({ product, type }) {
  const { cartItems, setCartItems } = useContext(ctx);

  const addItemToCart = () => {
    const isMultiplied = cartItems.some((item) =>
      item.id === product.id ? true : false
    );
    if (isMultiplied) {
      return;
    } else {
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          rating: { rate: product.rating.rate, count: product.rating.count },
          image: product.image,
          total: product.price,
          quantity: 1,
        },
      ]);
    }
  };

  return type === "card" ? (
    <div className="col-sm-6  col-md-4 col-lg-3">
      <div className="card border-0">
        <h4 className="card-title text-center text-light bg-dark">
          {`${product.title.split(" ")[0]} ${product.title.split(" ")[1]} ${
            product.title.split(" ")[2]
          }`}
        </h4>
        <Image
          src={product.image}
          alt="-"
          width="200"
          height="200"
          objectFit="contain"
          className="card-img-top img-fluid bg-white"
        />
        <div className="card-body bg-dark text-light">
          <p className="text-capitalize">
            <span className="fw-bold">price: </span>
            {product.price}$
          </p>

          <p className="text-capitalize">
            <span className="fw-bold">rate: </span>
            {product.rating.rate}
          </p>
          <p className="text-capitalize">
            <span className="fw-bold">count: </span>
            {product.rating.count}
          </p>
          <div className="btns-container d-flex align-item-center">
            <button
              className="btn btn-secondary btn-sm"
              onClick={addItemToCart}
            >
              Add to Cart
            </button>
            <Link href={`/product/${product.id}`}>
              <a>
                <button className="btn btn-secondary ms-3">Details</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container text-light p-0 my-5 d-flex flex-column flex-lg-row justify-content-center align-items-center bg-white">
      <div className="text-center bg-white " style={{ flexShrink: "0" }}>
        <Image
          src={product.image}
          alt="product-img"
          width="300"
          height="300"
          objectFit="contain"
        />
      </div>
      <div className="card-body bg-dark border-0">
        <div className="card-body bg-dark text-light ">
          <h4 className="card-title text-light bg-dark">{product.title}</h4>
          <p className={`card-text lead w-lg-25`}>{product.description}</p>
          <p className="text-capitalize">
            <span className="fw-bold">price: </span>
            {product.price}$
          </p>
          <p className="text-capitalize">
            <span className="fw-bold">category: </span>
            {product.category}
          </p>

          <div className="d-flex">
            <p className="text-capitalize">
              <span className="fw-bold">rate: </span>
              {product.rating.rate}
            </p>
            <p className="text-capitalize  ms-3">
              <span className="fw-bold">count: </span>
              {product.rating.count}
            </p>
          </div>
          <div className="btns-container d-flex align-item-center">
            <button className="btn btn-secondary" onClick={addItemToCart}>
              Add to Cart
            </button>
            <Link href="/cart">
              <a className="btn btn-secondary ms-3">Go To Cart</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
