import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../Footer/Footer'
import { Navbar } from '../../Navbar/Navbar'

const Signup = () => {
  return(
    <div>
       <Navbar />
       <Headings>
          <h1>Let’s get you started</h1>
          <h3>Start with a 14-day free trial to see if Everhour works for your business. <br/>
            No credit card required. No obligations.
          </h3>
         </Headings>

       <Formdiv>
              <div>
                <div>
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F2x%2Fgoogle-logo.png&f=1&nofb=1" alt=""/>
                  <div>
                    <p>Sign up with Google</p>
                  </div>
                </div>
                <p>or</p>
                <input type="text" placeholder="Work email..."/>
                <div>
                  <button>Get Started</button>
                </div>
              </div>
            </Formdiv>
            <Policy>
              By registering, you agree to our  and <Link>Terms of service</Link><Link>Privacy policy</Link>
          </Policy>
          <Footer />
    </div>
  )
}

export {Signup}


const Headings = styled.div`
  margin-top:140px;
  text-align:center;
  h1{
    font-size:43px;
    margin:10px 0px;
    font-weight:bold;
  }
  h3{
    font-size:21px;
    margin:20px 0px;
    color:#767676;
  }
  
`

const Formdiv = styled.div`
  margin:auto;  
  padding:10px 20px;
  width:30%;
  & > div{
    width:86%;
    margin:auto;
    & > p{
      text-align:center;
      margin:12px 0px;
    }
  }
 & > div > div:first-child{
  border:1px solid green;
  border-radius:6px;
  display:flex;
  padding:10px;
  align-items:center;
  img{
    width:24px;
  }
  div{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    /* border:1px solid red; */
  }
 }
  input{
    border:1px solid #767676;
    border-radius:6px;
    color:#333;
    padding:14px 10px;
    width:100%;
    cursor:	auto;
  }
  input+div{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    button{
      border-radius:6px;
      width:56%;
      padding:17px 0px;
      font-size:16px;
      margin:30px auto;
      color:white;
      background-color: #58BC71;
    }
  }
`

const Policy = styled.div`
  text-align:center;
  color:#767676;
  a{
    margin:0px 10px;
    color:#4B8FE2;
    text-decoration:underline;
  }

  margin-bottom:80px;
`