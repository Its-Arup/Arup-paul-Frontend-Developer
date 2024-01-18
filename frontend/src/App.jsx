import Navbar from "./components/Navbar";
import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <DIV>
      <Navbar />
      <HeroSection/>
    </DIV>
  );
}

export default App;
const DIV = styled.div`
  background-color: #0e0e0e;
  height: 200vh;
`;
