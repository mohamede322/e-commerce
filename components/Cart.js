import { ctx } from "../pages/_app";
import { useContext } from "react";
import Items from "./Items";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const { cartItems } = useContext(ctx);
  return (
    <div className="bg-white" style={{ minHeight: "calc(100vh - 62px)" }}>
      {cartItems <= 0 ? <EmptyCart /> : <Items />}
    </div>
  );
}
