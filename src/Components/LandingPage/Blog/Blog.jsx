import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const boxes = [
  {
    title: "How to create a Simple Timesheet Template Using Google Spreadsheet",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/blog/free-timesheet-template-using-google-spreadsheet@2x.webp",
  },
  {
    title: "Performance Improvement Plan: How To Do It Right",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/blog/performance-improvement-plan@2x.webp",
  },
  {
    title: "Pros and Cons of 14 Best Project Management Tools",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/blog/best-project-management-tools@2x.webp",
  },
  {
    title: "How to Use JIRA - Complete Hands-on Guide",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/blog/how-to-use-jira@2x.webp",
  },
]

const Blog = () => {
  return(
    <Container>
      <div>
        <div>
          <h1>We have a blog!</h1>
          <p>Time management insights, project management guides,<br/> work from home tips, and more</p>
        </div>

        <div>
          {boxes.map((({title,img}) => {
            return (
              <div>
                <img src={img} alt=""/>
                <h3>{title}</h3>
              </div>
            )
          } ))}
        </div>
        <div>
          <Link>More helpful guides</Link>
        </div>
      </div>

      <TryFree>
        <div>
          <h2>Take the pulse of your business</h2>
          <p>Try Everhour for free and see if it works for your business</p>
          <div>
            <input type="text" placeholder="Work email..."/>
            <button>Try free</button>
          </div>
          <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F2x%2Fgoogle-logo.png&f=1&nofb=1" alt=""/>
            <p>Or sign up with Google Account</p>
          </div>
        </div>

        <ul>
          <li>
            <i></i>
            <p>Track time from the apps you already use</p>
          </li>

          <li>
            <i></i>
            <p>Know where your team’s time is going</p>
          </li>

          <li>
            <i></i>
            <p>Keep projects on budget</p>
          </li>

          <li>
            <i></i>
            <p>Increase transparency</p>
          </li>

          <li>
            <i></i>
            <p>Make your workflow more efficient</p>
          </li>

          <li>
            <i></i>
            <p>Spot burnout before it happens</p>
          </li>
        </ul>
        
      </TryFree>
    </Container>
  )
}

export {Blog}

const Container = styled.div`
  & > div{
    width:96%;
    margin:40px auto 100px;

    & > div:first-child{
      text-align:center;
      margin-bottom:40px;
      h1{
        font-size:38px;
        font-weight:500;
        margin-bottom:10px;
      }
      p{
        font-size:20px;
        color:#767676;
      }
    }

    & > div:nth-child(2){
      display:flex;
      justify-content:space-between;

      & > div{
        width:100%;
        margin:0px 1%;
        padding:24px;
        box-shadow:1px 1px 1px silver, -1px -1px 1px silver;
        /* border:1px solid red; */
        transition: box-shadow 0.4s ease-in;
        img{
          max-width:100%;
        }
        h3{
          width:90%;
          margin-top:10px;
          line-height:1.4;
          word-spacing:3px;
          font-size:24px;
          font-weight:545;
          transition: color 0.2s ease-in;
        }
      }
      & > div:hover h3{
        color:#58BC71;
      }
      & > div:hover{
        box-shadow:2px 2px 2px silver, -2px -2px 2px silver;
      }
    }
    & > div:nth-child(3){
      width:100%;
      margin:32px auto;
      text-align:center;
      a{
        font-size:18px;
        color:#4B8FE2;
        text-decoration:underline;
      }
    }
  }
`


const TryFree = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  &  > div{
    text-align:left !important;
    h2{
      font-size:35px;
      font-weight:540;
      margin-bottom:10px;
    }
    p{
      font-size:18px;
      color:#767676;
    }
    button{
      border-radius:6px;
      width:30%;
      padding:16px;
      font-size:16px;
      margin:30px 16px;
      background-color:#58BC71;
      color:white;
    }

    input{
      width:60%;
      border:1px solid black;
      border-radius:6px;
      font-size:16px;
      padding:3% 3%;
    }
    img{
      width:24px;
      margin-right:10px;
    }

    & > div:last-child{
      display:flex;
      align-items:center;
    }
  }


  ul{
    li{
      display:flex;
      align-items:center;
      margin:18px 0px;
      i{
        margin-right:12px;
        font-size:12px;
        padding:6px;
        background-color:#58BC71;
        border-radius:50%;
        border:none;
      }
      p{
        font-size:19px;
        font-weight:540;
      }
    }
  }


 
`

