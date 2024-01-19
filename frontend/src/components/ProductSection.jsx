import React, { useEffect } from "react";
import style from "../styles/product_section.module.css";
import {
  BitaBridge,
  BitaDex,
  BitaLend,
  BitaPad,
  CartIamge,
  ProductCube,
  ProductHeadingLine,
} from "../assets/image_exporter";
import ProductCard from "./ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductSection() {


  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={style.container}>
      <h3 data-aos="fade-up">
        Our <span>Products</span>
      </h3>
      <img
        src={ProductHeadingLine}
        alt="line"
        className={style.line}
        data-aos="fade-up"
      />
      <p data-aos="fade-up">
        Pellentesque habitant morbi tristique senectus et netus et Pellentesque
        habitant morbi.
      </p>
      <div className={style.products} data-aos="fade-up">
        <ProductCard image={CartIamge} heading={"Bita Marketplace"} />
        <ProductCard image={BitaDex} heading={"Bitadex"} />
        <ProductCard image={BitaBridge} heading={"Bitabridge"} />
      </div>
      <div className={style.products_second} data-aos="fade-up">
        <ProductCard image={BitaPad} heading={"Bitapad"} />
        <ProductCard image={BitaLend} heading={"BitaLend"} />
      </div>
      <img src={ProductCube} alt="cube" className={style.product_cube} />
    </div>
  );
}

export default ProductSection;
