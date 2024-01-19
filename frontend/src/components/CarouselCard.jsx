import React from "react";
import style from "../styles/carousel_card.module.css";
import { PhaseBack, PhaseFront } from "../assets/image_exporter";

function CarouselCard({number,quater,phase}) {
  return (
    <div className={style.card_container}>
      <div className={style.top}>
        <p>{number}</p>
      </div>
      <div className={style.mid}>
        <img src={PhaseBack} alt="" className={style.mid_one}/>
        <img src={PhaseFront} alt="" className={style.mid_two}/>
        <p className={style.mid_three}>{phase}</p>
      </div>    
      <div className={style.buttom_parent}>
        <div className={style.buttom}>
          <div className={style.buttom_child_one}>
            <h6>Initial Design and Development</h6>
            <p>{quater}</p>
          </div>
          <div className={style.buttom_child_two}>
            <p>
              Pellentesque habitant morbi <br />
              tristique senectus et netus et <br />
              malesuada Pellentesque habitant
              <br /> morbi tristique senectus et netus
              <br /> et malesuada x
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
