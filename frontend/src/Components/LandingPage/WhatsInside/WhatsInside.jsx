import React, { useState } from 'react'
import styled from 'styled-components';
import payment from './Images/payment.png'
import folder from './Images/folder.png'
import receipt from './Images/receipt.png'
import stopwatch from './Images/stopwatch.png'
import day from './Images/day.png'
import expensive from './Images/expensive.png'
import barGraph from './Images/barGraph.png'




const insideItems = [
  {
    title:"Billing and budgeting",
    desc: "Simple and flexible projects billing. Set budgets to track progress in real time. Receive timely notifications",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2@2x.webp",
    icon:payment,
  },
  {
    title:"Time tracking",
    desc: "Easy-to-use time tracker. Know the time spent on tasks, hours of work and breaks for each employee",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/team-timesheet-v2@2x.webp",
    icon:stopwatch,
  },
  {
    title:"Task management",
    desc: "Create tasks, organize them in sections, add time estimates to keep everyone in the loop and on track",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-board-view-v2@2x.webp",
    icon:folder,
  },
  {
    title:"Schedule",
    desc: "View your team’s schedule, know how busy or available someone is, compare plan to the actual time spent",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2@2x.webp",
    icon:day,
  },
  {
    title:"Expenses",
    desc: "Track work-related expenses with ease. Reimburse employees, use costs in project budgets, add to client invoices",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses@2x.webp",
    icon:expensive,
  },
  {
    title:"Reports",
    desc: "Reports and dashboards to dive deep into how your team spends time, money and resources",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/reports@2x.webp",
    icon:barGraph,
  },
  {
    title:"Invoicing",
    desc: "Easily create an invoice based on tracked time and expenses. Connect with QuickBooks, Xero or FreshBooks",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp",
    icon:receipt,
  },
]


const WhatsInside = () => {
  const [imgUrl, setImgUrl] = useState(insideItems[0].url);
  const [show, setShow] = useState(0);


  const handleImgChange = (url,index) => {
    setImgUrl(url)
    setShow(index)
  }
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>What’s inside?</h1>
          <ul>
            {insideItems.map(({title,desc,url,icon},index) => {
            return show ===index ? <li key={title} style={{backgroundColor:"#F0FBF5"}}> 
              <div>
              <img src={icon} alt="icon"/>
              </div>
              <div>
                <h3 onClick={() => handleImgChange(url,index)} >{title}</h3>
                <p>{desc}</p>
              </div>
            </li> : <li key={title}> 
              <div>
              <img src={icon} alt="icon"/>
              </div>
              <div>
                <h3 onClick={() => handleImgChange(url,index)} >{title}</h3>
              </div>
            </li>
            })}
            <button>Product tour</button>
          </ul>
        </div>
        <div>
          <img src={imgUrl} alt="IMG"/>
        </div>
      </Wrapper>
    </Container>
    )
}

export {WhatsInside}


const Container = styled.div`
  width:96%;
  margin:auto;
  position:relative;
`

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  &  > div{
    margin:0px 1%;
  }
  & > div:first-child{
    flex-basis:30%;
    padding-left:30px;
  }
  & > div:nth-child(2){
    overflow-x:hidden;
    position:absolute;
    top:0;
    left:36%;
    img{
      max-width:120%;
    }
  }
  h1{
      font-size:36px;
      font-weight:500;
    }
  h3{
    font-size:21px;
    font-weight:400;
    border-bottom:22px;
  }
  p{
    font-size:17px;
    word-spacing:2px;
    color:#767676;
  }
  li {
    display:flex;
    margin:16px 0px;
    /* background-color:#F0FBF5; */
    padding:15px 18px;
    width:90%;
  }
  li img{
    max-width:26px;
    margin-right:10px;
  }
  
  li + button{
    border-radius:6px;
      padding:16px 22px;
      font-size:16px;
      margin:30px 16px;
      background-color:#58BC71;
      color:white;
  }
  li > div:first-child{
    margin-right:4px;
  }
`