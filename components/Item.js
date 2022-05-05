import Image from "next/image";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ctx } from "../pages/_app";

export default function Item({ product }) {
  const { cartItems, setCartItems } = useContext(ctx);
  const [quantity, setQuantity] = useState(product.quantity);
  const totalPrice = product.price * quantity;

  const increment = () => {
    if (quantity >= product.rating.count) {
      alert(`Sorry! u cant buy anymore that's the maximum amount we have`);
    } else {
      setQuantity((prevData) => prevData + 1);
    }
  };

  const decrement = () => {
    if (quantity <= 1) {
      deleteItem();
    } else {
      setQuantity((prevData) => prevData - 1);
    }
  };

  const addQuantityToObj = () => {
    const newArr = [];
    cartItems.map((item) => {
      if (item.id === product.id) {
        newArr.push({
          ...item,
          total: product.price * quantity,
          quantity: quantity,
        });
      } else {
        newArr.push(item);
      }
    });
    setCartItems(newArr);
  };

  useEffect(() => {
    addQuantityToObj();
  }, [quantity]);

  const deleteItem = () => {
    const newItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newItems);
  };

  const handleClick = (type) => {
    type === "increment" ? increment() : decrement();
  };

  return (
    <div className="mb-3" style={{ width: "100vw", height: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        className="container border m-0 m-auto rounded py-2 border-dark d-flex text-dark  px-3 align-items-start align-items-md-center justify-content-center justify-content-md-between flex-column flex-md-row"
      >
        <div className="align-self-center">
          <Image
            src={product.image}
            className="img-fluid"
            width="150px"
            height="150px"
            objectFit="contain"
            alt="product-img"
          ></Image>
        </div>
        <div>
          <h1>
            {`${product.title.split(" ")[0]} ${product.title.split(" ")[1]} ${
              product.title.split(" ")[2]
            }`}
          </h1>
          <p className="text-capitalize">
            <span className="fw-bold">Category</span>: {product.category}
          </p>
          <p className="text-capitalize">
            <span className="fw-bold">Rating</span>: {product.rating.rate}
          </p>
          <p className="text-capitalize">
            <span className="fw-bold">Count</span>: {product.rating.count}
          </p>
          <button className="btn btn-secondary" onClick={deleteItem}>
            Remove Item
          </button>
        </div>
        <p className="m-0 mb-3 mb-md-0 me-md-5 me-lg-0">
          {`$${product.price}`}
        </p>
        <div
          className="border mb-3 mb-md-0 me-md-5 me-lg-0 rounded d-flex justify-content-around align-items-center"
          style={{ width: "100px" }}
        >
          <button
            onClick={() => handleClick("decrement")}
            className="btn fw-bold"
            style={{ fontSize: "20px" }}
          >
            -
          </button>
          <p className="m-0  fw-bold ">{product.quantity}</p>
          <button
            onClick={() => handleClick("increment")}
            className="btn fw-bold"
            style={{ fontSize: "20px" }}
          >
            +
          </button>
        </div>
        <p className="total m-0">{`$${product.total.toFixed(2)}`} </p>
      </div>
    </div>
  );
}
