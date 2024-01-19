import React, { useEffect } from "react";
import style from "../styles/rodemap.module.css";
import Carousel from "./Carousel";
import { Quote_mark, RoadMapLine } from "../assets/image_exporter";
import AOS from "aos";
import "aos/dist/aos.css";

function Rodemap() {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.heading_parent}>
        <h5 data-aos="fade-right">Roadmap</h5>
        <img src={RoadMapLine} alt="line" data-aos="fade-right"/>
      </div>
      <img src={Quote_mark} alt="quote_mark" className={style.Quote_mark}/>
      <Carousel />
    </div>
  );
}

export default Rodemap;
