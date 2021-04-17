//MainNavBar
import React, { useState } from "react";
import Navlinks from "./Navlinks/Navlinks";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProfileSection } from "./ProfileSection/ProfileSection";

const Navbar = styled.div`
  background-color: #fff;
  font-family: lato, sans-serif;
  display: flex;
  padding: 5px 20px;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  img {
    width: 45px;
  }
`;
const Pages = styled.div`
  color: #333333;

  a:hover {
    border-bottom: 3px solid #24be6a;
    padding-bottom: 15px;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  div {
    color: #4a90e2;
    cursor: pointer;
  }
  span {
    cursor: pointer;
    margin-left: 30px;
    width: 40px;
    height: 40px;
    /* padding-top:10px; */
    border-radius: 50px;
    /* border:1px solid red; */
    /* background-color:purple; */
    color: white;
    text-align: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;

const MainpageNav = () => {
  const avatar = useSelector((state) => state.auth.avatar);
  const [showProfileSection, setShowProfileSection] = useState(false);

  return (
    <Navbar>
      <div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1"
          alt="everhour logo"
        />
      </div>
      <Pages>
        <Navlinks />
      </Pages>
      <Right>
        <div>Subscribe now</div>
        <span onClick={() => setShowProfileSection(!showProfileSection)}>
          <img src={avatar} alt="" />
        </span>
      </Right>
      {showProfileSection ? <ProfileSection /> : null}
    </Navbar>
  );
};

export default MainpageNav;
