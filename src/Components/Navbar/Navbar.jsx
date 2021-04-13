import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return(
    <Nav>
      <div>
        <ul>
          <Link to="/">
            <Logo>
              <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1' alt=""/>
              <p>Everhour</p>
            </Logo>
          </Link>
          <li><Link to="/tour">Tour</Link> </li>
          <li><Link to="/integrations">Integrations</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/demo">Demo</Link></li>
          
        </ul>
        <div>
          <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femojipedia-us.s3.dualstack.us-west-1.amazonaws.com%2Fthumbs%2F120%2Ftwitter%2F154%2Fflag-for-united-kingdom_1f1ec-1f1e7.png&f=1&nofb=1" alt=""/>
            <p>{`EN >`}</p> 
          </div>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>
    </Nav>
  )
}

export {Navbar}



const Nav = styled.nav`
  position:relative;
 &  > div{
  position: fixed;
  z-index:100;
  background-color:#FFFFFF;
  top:0;
  left:0;
   display:flex;
   justify-content:space-between;
   align-items:center;
   width:96%;
   margin:auto;
   padding:40px 20px 20px;
 }
 ul {
   display:flex;
   justify-content:space-between;
   align-items:center;
   flex-basis:36%;
   a{
    color:black;
    font-size:18px;
   }
 }
 ul > li{
  font-size:18px;
 }
 ul + div{
   div{
     display:flex;
     justify-content:space-between;
    align-items:center;
    p{
      margin-left:8px;
    }
   }
   img{
     width:30px;
   }
   display:flex;
   justify-content:space-between;
   align-items:center;
   flex-basis:20%;
   button{
     padding:8px 14px;
     font-size:17px;
     border-radius:5px;
   }
   button + button{
     background-color:#58BC71;
     color:white

   }
 }
`
const Logo = styled.li`
  display:flex;
  justify-content:center;
  align-items:center;
  img{
    width:30px;
  }
  p{
    margin-left:8px;
  }
`