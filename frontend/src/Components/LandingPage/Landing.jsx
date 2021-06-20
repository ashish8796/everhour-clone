import React from "react";
import styled from "styled-components";
import { Chatbot } from "../Chatbot/Chatbot";
import { Blog } from "./Blog/Blog";
import { Integeration } from "./Integeration/Integeration";
import { Intro } from "./Intro/Intro";
import { Review } from "./Review/Review";
import { WhatsInside } from "./WhatsInside/WhatsInside";

const Container = styled.div`
  font-family: "Lato", sans-serif;
  /* position:absolute; */
  margin-top: 140px;
  /* top:140px;
  left:0px;
  width:100%; */
  & > div {
    margin: auto;
  }
`;

const Landing = () => {
  return (
    <Container>
      <div>
        <Intro />
        <Chatbot />
        <WhatsInside />
        <Integeration />
        <Review />
        <Blog />
      </div>
    </Container>
  );
};

export { Landing };
