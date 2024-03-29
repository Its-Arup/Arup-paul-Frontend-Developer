import React, { useEffect } from "react";
import style from "../styles/hero_section_styles.module.css";
import {
  BitcoinHome,
  HeroCube,
  HomeStar,
  ProductSymbol,
} from "../assets/image_exporter";

import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.hero_parent}>
        <div className={style.hero_heading_parent}>
          <h1 className={style.heading} data-aos="fade-left">
            YOUR GATEWAY
          </h1>
          <h1 className={style.heading} data-aos="fade-left">
            TO
          </h1>

          <h1 className={style.heading} data-aos="fade-right">
            DEFI <span className={style.hero_on}>ON</span>{" "}
            <span className={style.bitcoin}>BITCION</span>
          </h1>

          <img
            src={BitcoinHome}
            alt="home"
            className={style.bitcoin_home}
            data-aos="fade-up"
          />

          <img src={HomeStar} alt="homeStar" className={style.home_star} />
        </div>
        <div className={style.cube}>
          <img src={HeroCube} alt="cube" />
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
      <img src={ProductSymbol} alt="symbol" className={style.product_symbol} />
    </div>
  );
}

export default HeroSection;
