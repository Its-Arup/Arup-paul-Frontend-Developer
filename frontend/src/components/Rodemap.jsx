import React from "react";
import style from "../styles/rodemap.module.css";
import Carousel from "./Carousel";
import { Quote_mark, RoadMapLine } from "../assets/image_exporter";

function Rodemap() {
  return (
    <div className={style.container}>
      <div className={style.heading_parent}>
        <h5>Roadmap</h5>
        <img src={RoadMapLine} alt="line" />
      </div>
      <img src={Quote_mark} alt="quote_mark" className={style.Quote_mark}/>
      <Carousel />
    </div>
  );
}

export default Rodemap;
