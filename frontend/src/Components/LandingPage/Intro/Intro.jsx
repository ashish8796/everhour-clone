import React from 'react'
import styled from 'styled-components'

const Intro = () => {
  return (
  <Conatiner>
    <div>
      <h1>Powerful time tracking software with hassle-free integrations</h1>
      <h3>Accurate time tracker for budgeting, client invoicing and painless payroll.
       <br/> Perfect for <a href="#">Asana </a>· <a href="#">Trello</a>  · <a href="#">Basecamp</a> · <a href="#">Jira</a> · <a href="#">ClickUp</a> </h3>
       <button>Try free</button>
       <button>Book a demo</button>
    </div>
    <div>
      
    </div>
    <div>
      <p>Trusted by over 3,000 companies</p>
    </div>
  </Conatiner>
  )
}

export {Intro}



const Conatiner = styled.div`
  text-align:center;

  & > div:first-child{
    width:60%;
    margin:auto;
    h1{
      font-size:48px;
      font-weight:bold;
      color:#333333;
    }
    h3{
      color:#767676;
      margin-top:16px;
      font-size:22px;
      line-height:1.4;
      a{
        color:#4B8FE2;
        text-decoration:underline;
      }
    }
    button{
      border-radius:6px;
      width:20%;
      padding:16px 0px;
      font-size:16px;
      margin:30px 16px;
      color:#58BC71;
      border:1px solid #58BC71;
    }
    h3+button{
      background-color:#58BC71;
      color:white;
    }
  }

  & > div:nth-child(2){
    width:70%;
    margin:40px auto;
    height:400px;
    background-image:url('https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/home-covid@2x.webp');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
  }
  & > div:nth-child(3){
    p{
      font-size:20px;
      color: #767676;
      margin-bottom:80px;
    }
  }
`
