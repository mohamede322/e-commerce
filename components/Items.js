import Item from "./Item";
import { ctx } from "../pages/_app";
import { useContext, useEffect } from "react";
import CartTopSide from "./CartTopSide";
import CartBotSide from "./CartBotSide";

export default function Items() {
  const { cartItems, setCartItems, subTotal, setSubTotal } = useContext(ctx);

  const clearCart = () => {
    if (confirm("Sure !!")) {
      setCartItems([]);
    } else {
      return;
    }
  };

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (previous, current) => previous + +current.total,
      0
    );
    if (cartItems.length > 1) {
      setSubTotal(totalAmount);
    } else if (cartItems.length <= 1) {
      setSubTotal(cartItems[0].total);
    }
  }, [cartItems, setSubTotal]);

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center py-5 position-relative"
      style={{ minHeight: "100vh" }}
    >
      <CartTopSide />
      {cartItems.map((item, i) => (
        <Item key={i} product={item} />
      ))}
      <CartBotSide clearCart={clearCart} subTotal={subTotal} />
    </div>
  );
}
