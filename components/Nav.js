import Link from "next/link";
import { useRef, useContext } from "react";
import { ctx } from "../pages/_app";
export default function Nav() {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const cartRef = useRef(null);

  const { cartItems } = useContext(ctx);

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg text-light sticky-top d-flex align-items-center">
      <div className="container">
        <Link href="/">
          <a className={`navbar-brand logo`}>E-Commerce</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navItems"
          aria-expanded="false"
          aria-controls="#navItems"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-dark" id="navItems">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products">
                <a className="nav-link">Products</a>
              </Link>
            </li>
            <li
              className="nav-item position-relative text-light"
              style={{ width: "fit-content" }}
            >
              <Link href="/cart">
                <a
                  className="position-absolute d-flex justify-content-center align-items-center rounded-circle bg-secondary text-light fw-bold"
                  style={{ right: "-10px", width: "30px", height: "30px" }}
                >
                  {cartItems.length}
                </a>
              </Link>
              <Link href="/cart">
                <a title="cart" className="nav-link ms-0 ms-lg-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-cart3 p-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
