import Image from "next/image";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div
      className="text-center px-2  d-flex flex-column justify-content-center align-items-center"
      style={{ height: "calc(100vh - 62px)" }}
    >
      <Image
        src="/emptycart.png"
        width="500"
        height="500"
        alt="empty-cart"
        className="me-md-4"
      ></Image>
      <h1 className="mb-3 text-uppercase text-dark">Cart is Empty...</h1>
      <Link href="/products">
        <a className="btn btn-dark"> Back to Shopping </a>
      </Link>
    </div>
  );
}
