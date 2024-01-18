import Navbar from "./components/Navbar";
import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Carousel from "./components/Carousel";

function App() {
  return (
    <DIV>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <Carousel/>
    </DIV>
  );
}

export default App;
const DIV = styled.div`
  background-color: #0e0e0e;
  height: 400vh;
`;
