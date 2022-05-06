import { ctx } from "../pages/_app";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormStyles from "../styles/scss/Form.module.css";

export default function Form({
  total,
  subTotal,
  setIsCheckingOut,
  setMailSent,
}) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState();
  const [note, setNote] = useState("");
  const [address, setAddress] = useState("");
  const { cartItems } = useContext(ctx);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (fullName !== "" && phone !== "" && address !== "") {
      emailjs
        .sendForm(
          "service_1bcq5cr",
          "template_4r0gcb8",
          form.current,
          "y2YKT-kWA46PMEVye"
        )
        .then(setIsCheckingOut(false))
        .then(setMailSent(true));
    } else {
      return;
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "name") {
      setFullName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "note") {
      setNote(value);
    } else if (name === "address") {
      setAddress(value);
    }
  };

  const seller = "Mohamed Essam";

  return (
    <div
      className={`position-absolute d-flex justify-content-center align-items-start h-100 ${FormStyles.form_container}`}
      style={{
        height: "calc(100vh - 62px)",
        bottom: "0",
        left: "0",
        filter: "opacity:(0.2)",
      }}
      onClick={() => setIsCheckingOut(false)}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`rounded w-50  bg-dark d-flex flex-column align-items-center justify-content-center ${FormStyles.form}`}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          name="seller"
          value={seller}
          className="d-none"
          readOnly
        />
        <input
          type="text"
          name="total"
          value={`Total Price with VCT and Shipping : ${total} , SubTotal : ${subTotal}`}
          className="d-none"
          readOnly
        />
        {cartItems.map((item, i) => (
          <div key={i}>
            <input
              type="text"
              name="product"
              value={`Item: ${item.title} - Quantity: ${item.quantity} - Price: ${item.total} || `}
              className="d-none"
              readOnly
            />
          </div>
        ))}

        <div className="form-floating w-50">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Full name..."
            required
            autoComplete="off"
            value={fullName}
            onChange={handleChange}
            id="name"
          />
          <label htmlFor="name">Full name...</label>
        </div>
        <div className="form-floating w-50">
          <input
            className="form-control"
            type="number"
            name="phone"
            placeholder="Phone..."
            required
            autoComplete="off"
            value={phone}
            onChange={handleChange}
            onInput={handleChange}
            id="phone"
          />
          <label htmlFor="phone">Phone...</label>
        </div>
        <div className="form-floating w-50">
          <input
            className="form-control"
            type="text"
            name="address"
            placeholder="Address..."
            required
            autoComplete="off"
            value={address}
            onChange={handleChange}
            id="address"
          />
          <label htmlFor="address">Address...</label>
        </div>
        <div className="form-floating w-50">
          <textarea
            className="form-control"
            type="text"
            name="note"
            placeholder="note..."
            maxLength="240"
            style={{ resize: "none", height: "300px" }}
            value={note}
            onChange={handleChange}
            id="note"
          />
          <label htmlFor="note">Note...</label>
        </div>
        <input
          className="btn btn-secondary btn-md py-2 px-4"
          type="submit"
          value="Confirm"
        />
      </form>
    </div>
  );
}
