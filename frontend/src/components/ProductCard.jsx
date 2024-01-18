import React from "react";
import style from "../styles/product_card.module.css";
import { ProductStarButtom, ProductStarTop } from "../assets/image_exporter";

function ProductCard({ image, heading }) {
  return (
    <div className={style.container}>
       <img src={ProductStarTop} alt="star" className={style.productStarTop}/>
      <div className={style.imageContainer}>
        <img src={image} alt="image" className={style.image}/>
      </div>
      <div>
        <h4>{heading}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="172"
          height="3"
          viewBox="0 0 172 3"
          fill="none"
        >
          <path
            d="M1.5 1.01843H170.5"
            stroke="#FECC00"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <p>Pellentesque habitant morbi <br/>tristique senectus et netus et <br/>malesuada Pellentesque <br/>habitant morbi tristique senectus <br/>et netus et malesuada</p>
      </div>
     
      <img src={ProductStarButtom} alt="star" className={style.productStarBottom}/>
    </div>
  );
}

export default ProductCard;
