import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LOGO } from "../assets/image_exporter";

function Navbar() {
  const [menu, setmenu] = useState(false);

  const handelMenu = () => {
    setmenu((prev) => !prev);
  };

  return (
    <DIV>
      <div className="ham">
        <div className={`menu ${menu ? "active" : ""}`} onClick={handelMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="logo">
          <Link to={"/"}>
            <img src={LOGO} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul className={`nav-menu ${menu ? "active" : ""}`}>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="#">About</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="#">Our Products</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="#">Token Utility</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="#">Roadmap</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <button className="nav-button">Connect Wallet</button>
            </li>
          </ul>
        </nav>
      </div>
    </DIV>
  );
}

export default Navbar;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  width: 90%;
  position: fixed;
  left: 5%;
  top: 5%;
  z-index: 100;

  .ham {
    width: 100%;
    height: 88px;
    background-color: #554800;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #272727;
    font-family: "Inter", sans-serif;
    padding: 0 5%;

    /*  */
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.31);
    background: rgba(92, 79, 5, 0.44);
    box-shadow: 0px 2px 19.5px 0px rgba(219, 184, 0, 0.2);
    backdrop-filter: blur(14.5px);
  }
  /* .logo {
    margin: 0 20px;
  } */
  /* nav {
    margin: 0 20px;
  } */
  .nav-menu {
    display: flex;
    gap: 60px;
    align-items: center;
  }
  .nav-links {
    list-style: none;
  }
  .nav-links a {
    text-decoration: none;
    font-style: normal;
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 16.5px; /* 91.667% */
  }
  /* a {
    text-decoration: none;
    color: #272727;
  } */
  .menu {
    display: none;
    margin: 0 20px;
    cursor: pointer;
  }
  .bar {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fff;    
    margin: 5px 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .nav-button {
    width: 187px;
    height: 55px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #f9d326;
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 16.5px; /* 91.667% */
    cursor: pointer;
  }
  @media (max-width: 780px) {
    .menu {
      display: block;
    }
    .menu.active .bar:nth-child(2) {
      opacity: 0;
    }
    .menu.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .menu.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
    .nav-menu {
      position: fixed;
      left: -120%;
      top: 88px;
      gap: 40px;
      flex-direction: column;
      background: rgba(92, 79, 5, 0.44);
      width: 100%;
      text-align: center;
      transition: 0.3s;
      z-index: 99;
    }
    .nav-links a {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .nav-links:last-child {
      padding-bottom: 40px;
    }
    .nav-menu.active {
      left: 0;
    }
    .bag {
      display: block;
    }
    .nav-right {
      gap: 15px;
    }
  }

  @media (max-width: 580px) {
  }
`;
