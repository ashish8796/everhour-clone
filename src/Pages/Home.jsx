import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styled from "styled-components";
import { Navbar } from "../Components/Navbar/Navbar";
import { Landing } from "../Components/LandingPage/Landing";

export default function Home() {
  return (
    <HomeCont>
      <Navbar />
      <Landing />
      <Header />
      <Footer />
    </HomeCont>
  );
}

const HomeCont = styled.div``;
