import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
  <FooterCont>
    <div>
      <ul>
        <Logo>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1' alt=""/>
            <p>Everhour</p>
          </Logo>
      </ul>
    </div>
  </FooterCont>
  );
}

const FooterCont = styled.footer`
`;

const Logo = styled.li`
`