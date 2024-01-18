import React from "react";
import style from "../styles/hero_section_styles.module.css";
import { BitcoinHome } from "../assets/image_exporter";
function HeroSection() {
  return (
    <div className={style.container}>
      <div className={style.hero_parent}>
        <div className={style.hero_heading_parent}>
          <h1 className={style.heading}>YOUR GATEWAY</h1>
          <h1 className={style.heading}>TO</h1>
          <h1 className={style.heading}>
            DEFI <span className={style.hero_on}>ON</span>{" "}
            <span className={style.bitcoin}>BITCION</span>
          </h1>
          <img src={BitcoinHome} alt="home" className={style.bitcoin_home} />
        </div>
      </div>
      <div className={style.buttom_parent}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin <br />
          eleifend id mauris. Amet sem in id eget nunc quam lacus tellus augue.
        </p>
        <button>Get Strted &gt;</button>
      </div>
    </div>
  );
}

export default HeroSection;