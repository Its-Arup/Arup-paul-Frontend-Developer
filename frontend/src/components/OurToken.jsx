import React, { useEffect, useState } from "react";
import style from "../styles/our_token.module.css";
import { OurTokenLine } from "../assets/image_exporter";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../reducer/coin/action";
import Tokencard from "./Tokencard";
import AOS from "aos";
import "aos/dist/aos.css";

function OurToken() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const { coin, isLoading } = useSelector((store) => store.coinReducer);

  const handleClick = (val) => {
    setPage((prev) => {
      return prev + +val;
    });
  };

  useEffect(() => {
    const params = {
      page: page,
    };

    dispatch(getCoins(params));
  }, [page]);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.token_heading_parent}>
        <h5 data-aos="fade-up">
          Our <span>Tokens</span>
        </h5>
        <img src={OurTokenLine} alt="line" data-aos="fade-up"/>
        <p data-aos="fade-up">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
      </div>
      <div className={style.token_product} data-aos="fade-up">
        {coin?.map((ele) => {
          return <Tokencard key={ele._id} {...ele} />;
        })}
      </div>
      <div className={style.token_button_parent}>
        <button onClick={() => handleClick(-1)} disabled={page == 1}>
          Previous
        </button>
        <p>Page {page} of 10</p>
        <button onClick={() => handleClick(1)} disabled={page == 10}>
          Next
        </button>
      </div>
    </div>
  );
}

export default OurToken;
