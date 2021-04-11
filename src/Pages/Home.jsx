import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeCont>
      <Header />
      <Footer />
    </HomeCont>
  );
}

const HomeCont = styled.div``;
