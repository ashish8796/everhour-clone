import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
  <FooterCont>
    <div>
      <div>
        <Logo>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1' alt=""/>
          </Logo>
          <ul>
            <li>Company</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li>Product</li>
            <li>Tour</li>
            <li>Pricing</li>
            <li>Request a demo</li>
            <li>Costomers</li>
            <li>API & docs</li>
            <li>Status <i>.</i></li>
          </ul>

          <ul>
            <li>Solutions</li>
            <li>Time tracking</li>
            <li>Project budgeting</li>
            <li>Visual planning</li>
            <li>Expenses</li>
            <li>Reporting</li>
            <li>Invoicing</li>
            <li>Time card calculator</li>
            <li>Weekly timesheet templete</li>
            <li>Invoicing generator</li>
          </ul>

          <ul>
            <li>Integrations</li>
            <li>Asana</li>
            <li>Basecamp</li>
            <li>Trello</li>
            <li>Jira</li>
            <li>Github</li>
            <li>ClickUp</li>
            <li>All</li>
          </ul>

          <ul>
            <li>Learn</li>
            <li>Guides</li>
            <li>Help center</li>
            <li>Blog</li>
            <li>Product updates</li>
          </ul>

          <ul>
            <li>Download</li>
            <li>Media kit</li>
            <li>Browser extension</li>
            <li>iPhone app <button>Beta</button></li>
          </ul>
      </div>

      <div>
        <div>
          &#169; 2021 Everhour |
          <Link to="">Terms | </Link>
          <Link to="">Privacy | </Link>
          <Link to="">Cookies | </Link>
          <Link to="">Sitemap </Link>
        </div>

        <div>
        <i className="fab fa-facebook fa-lg"></i>
        <i className="fab fa-twitter-square fa-lg"></i>
        <i className="fab fa-linkedin fa-lg"></i>
        <i className="fab fa-youtube fa-lg"></i>
        </div>
      </div>
    </div>
  </FooterCont>
  );
}

const FooterCont = styled.footer`
  background-color:#151717;
  padding:60px 0px;
  font-size:17px;
  color:white;
  & > div{
    width:90%;
    margin:auto;
  }
  &  > div > div:first-child{
    display:flex;
    justify-content:space-around;
  }
  ul > li:first-child{
    color:#A1A2A2;
  }
  ul > li{
    margin-bottom:14px;
    font-weight:100;
    i{
      margin-left:6px;
      font-size:1px;
      padding:4px px; 
      background-color:#58BC71;
      border-radius:50%;
      border:none;
    }
  }
  ul > li:hover{
    color:#A1A2A2;
    cursor: pointer;
  }

  &  > div > div:nth-child(2){
    display:flex;
    justify-content:space-between;
    font-size:16px;
    margin-top:40px;

    a{
      color:white;
      text-decoration:none;
      margin:0px 4px
    }
    i{
      margin:0px 4px;
      padding:4px;
    }
  }

`;

const Logo = styled.div`
  img{
    width:40px;
  }
`
