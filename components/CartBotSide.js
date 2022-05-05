import Link from "next/link";
import { useContext, useState } from "react";
import Form from "./Form";
import { ctx } from "../pages/_app";

export default function CartBotSide({ clearCart, subTotal }) {
  const { setCartItems } = useContext(ctx);
  const VAT = (14 / 100) * subTotal;
  const shipping = 4.99;
  const total = (subTotal + VAT + shipping).toFixed(2);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const handleClick = () => {
    setIsCheckingOut(true);
    setMailSent(false);
    if (typeof window === "object") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleConfirmOrder = () => {
    setMailSent(false);
    setCartItems([]);
  };
  return (
    <>
      <div className="container position-relative d-flex justify-content-between flex-column flex-md-row">
        <button
          onClick={clearCart}
          className="btn btn-secondary text-uppercase align-self-start"
        >
          Clear Cart
        </button>
        <div className="checkout-container d-flex flex-column mt-4 mt-md-0">
          <p
            className="sub-total fw-bold lead  m-0"
            style={{ fontSize: "14px" }}
          >
            <span className="fw-normal">Shipping:</span> {`$${shipping}`}
          </p>
          <p className="sub-total fw-bold lead" style={{ fontSize: "14px" }}>
            <span className="fw-normal">VAT:</span> {`$${VAT.toFixed(2)}`}{" "}
            <span className="fw-normal">(14%)</span>
          </p>
          <div className="sub-total fw-bold lead text-uppercase">
            <span className="fw-normal">Subtotal:</span> {`$${total}`}
          </div>
          <p className="text-capitalize">VAT and shipping included</p>
          <button
            onClick={handleClick}
            className="btn btn-secondary text-uppercase "
          >
            check out
          </button>
          <Link href="/products">
            <a
              style={{ fontSize: "16px" }}
              className="text-muted text-capitalize text-center fw-bold mt-2 d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left me-3"
                viewBox="0 0 16 16"
              >
                <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              continue shopping
            </a>
          </Link>
        </div>
      </div>
      {isCheckingOut && (
        <Form
          total={total}
          subTotal={subTotal}
          setIsCheckingOut={setIsCheckingOut}
          setMailSent={setMailSent}
        />
      )}
      {mailSent && (
        <div
          className="bg-dark rounded p-5 position-absolute text-light text-center"
          style={{
            left: "50%",
            top: "200px",
            transform: "translateX(-50%)",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          <div className="success_checkmark">
            <div className="check_icon">
              <span className="icon_line line_tip"></span>
              <span className="icon_line line_long"></span>
              <div className="icon_circle"></div>
              <div className="icon_fix"></div>
            </div>
          </div>
          <h1 className="pb-3">Thank you!</h1>
          <p>Thank you for placing an order.</p>
          <p>Your order has been sent.</p>
          <button className="btn btn-secondary" onClick={handleConfirmOrder}>
            OK!
          </button>
        </div>
      )}
    </>
  );
}
