import React from "react";
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

function ProductSection() {
  return (
    <div className={style.container}>
      <h3>
        Our <span>Products</span>
      </h3>
      <img src={ProductHeadingLine} alt="line" className={style.line}/>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et Pellentesque
        habitant morbi.
      </p>
      <div className={style.products}>
        <ProductCard image={CartIamge} heading={"Bita Marketplace"} />
        <ProductCard image={BitaDex} heading={"Bitadex"} />
        <ProductCard image={BitaBridge} heading={"Bitabridge"} />
      </div>
      <div className={style.products_second}>
        <ProductCard image={BitaPad} heading={"Bitapad"} />
        <ProductCard image={BitaLend} heading={"BitaLend"} />
      </div>
      <img src={ProductCube} alt="cube" className={style.product_cube}/>
    </div>
  );
}

export default ProductSection;
