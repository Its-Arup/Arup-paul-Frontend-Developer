import Navbar from "./components/Navbar";
import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Rodemap from "./components/Rodemap";
import OurToken from "./components/OurToken";
import Footer from "./components/Footer";

function App() {
  return (
    <DIV>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <Rodemap/>
      <OurToken/>
      <Footer/> 
    </DIV>
  );
}

export default App;
const DIV = styled.div`
  background-color: #0e0e0e;
`;
