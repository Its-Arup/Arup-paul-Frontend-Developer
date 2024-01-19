import React from "react";
import style from "../styles/token_card.module.css";
function Tokencard({ img, tokenName, symbol, decimals, marketcap, chain }) {
  return (
    <div className={style.conatiner}>
      <div className={style.top}>
        <img src={img} alt="image" />
      </div>
      <div className={style.mid}>
        <h6>{tokenName}</h6>
        <div>
          <div className={style.mid_left}>
            <p>Symbol</p>
            <p>Decimals</p>
            <p>Market Cap</p>
            <p>Chain</p>
          </div>
          <div className={style.mid_right}>
            <p>{symbol}</p>
            <p>{decimals}</p>
            <p>{marketcap}</p>
            <p>{chain}</p>
          </div>
        </div>
      </div>
      <div className={style.end}>
        <button>Details &gt;</button>
      </div>
    </div>
  );
}

export default Tokencard;
