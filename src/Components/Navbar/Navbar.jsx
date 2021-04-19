import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loadData } from "../../utils/localStorage";

const Navbar = () => {

  const fullName = loadData("fullName");
  console.log(fullName)

  return (
    <Nav>
      <div>
        <ul>
          <Link to="/">
            <Logo>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1"
                alt="everhour logo"
              />
              <p>Everhour</p>
            </Logo>
          </Link>
          <li>
            <Link to="/tour">Tour</Link>{" "}
          </li>
          <li>
            <Link to="/integrations">Integrations</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
        </ul>
        <div>
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femojipedia-us.s3.dualstack.us-west-1.amazonaws.com%2Fthumbs%2F120%2Ftwitter%2F154%2Fflag-for-united-kingdom_1f1ec-1f1e7.png&f=1&nofb=1"
              alt=""
            />
            <p>{`EN >`}</p>
          </div>
          <Link to="/login">
            <button>{fullName ? fullName : "Log in"}</button>
          </Link>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </Nav>
  );
};

export { Navbar };

const Nav = styled.nav`
  position: relative;
  font-family: lato, sans-serif;
  & > div {
    position: fixed;
    z-index: 100;
    background-color: #ffffff;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 40px 60px 20px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 36%;
    a {
      color: black;
      font-size: 18px;
    }
  }
  ul > li {
    font-size: 18px;
  }
  ul + div {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin-left: 8px;
      }
    }
    img {
      width: 30px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 20%;
    button {
      padding: 8px 14px;
      font-size: 17px;
      border-radius: 5px;
    }
    a + a > button {
      background-color: #58bc71;
      color: white;
    }
  }
`;
const Logo = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30px;
  }
  p {
    margin-left: 8px;
  }
`;
