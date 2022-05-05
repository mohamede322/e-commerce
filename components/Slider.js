import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import sliderStyles from "../styles/scss/Slider.module.css";

export default function Slider({ sliderPics }) {
  const imgRef = useRef(null);
  const [width, setWidth] = useState("");
  const [index, setIndex] = useState(0);

  const handleClick = (action) => {
    const length = sliderPics.length - 1;
    if (action === "increment") {
      index >= length ? setIndex(0) : setIndex(index + 1);
    } else if (action === "decrement") {
      index <= 0 ? setIndex(length) : setIndex(index - 1);
    }
  };

  useEffect(() => {
    setWidth(imgRef.current.clientWidth * index);
  }, [index]);

  return (
    <div
      className={`slider-container bg-white ${sliderStyles.slider_container}`}
    >
      <div
        className={`img-container d-flex ${sliderStyles.img_container}`}
        style={{
          transform: `translateX(-${width}px)`,
        }}
      >
        {sliderPics.map((pic) => (
          <div
            ref={imgRef}
            key={pic.id}
            className="d-flex bg-white justify-content-center"
            style={{
              width: "100vw",
              height: "300px",
              position: "relative",
            }}
          >
            <Image
              key={pic.id}
              src={pic.image}
              alt="cover-img"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
      <div className={`container ${sliderStyles.buttons_container}`}>
        <button
          onClick={() => handleClick("decrement")}
          className={`btn ${sliderStyles.arrow_left} bg-dark mx-3 mx-md-0`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-short text-white"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
        </button>
        <button
          onClick={() => handleClick("increment")}
          className={`btn ${sliderStyles.arrow_right} bg-dark mx-3 mx-md-0`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-right-short text-white"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
