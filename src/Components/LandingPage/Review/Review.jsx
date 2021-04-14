import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bracketComments from './Images/bracketComments.png'

const Review = () => {
  return(
    <Container>
      <div>
      <div>
        <div>
        <h2> Everhour has helped 145,000+ people </h2>
        <h1>Complete over 78 million tasks <br/> in 2 million projects</h1>

        <div>
          <span>
            <img src={bracketComments} alt=""/>
          </span>
          <div>
            <p>Everhour helps us track our engineering hours which is a requirement for several Government grants we have received. Without Everhour, we would be unable to accurately track the hours associated with each individual project we are working on as a company. The reports are easily customizable which allows me to extract the data I need. Everhour is a great tool for our time tracking needs!</p>
            <h3>Kelly Bonneau, CPA</h3>
            <h4>Accounting Manager at 7shifts</h4>
            <Link to="/">Read more</Link>

          </div>
          </div>
        </div>
      </div>

      <div>
        <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly@2x.webp" alt=""/>
      </div>
      </div>
    </Container>
  )
}

export {Review}


const Container = styled.div`
  & > div{
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 6%;
    &  > div:first-child{
      flex:2;
      /* border:1px solid red; */
      & > div{
        width:80%;
        padding:10px;
        h2{
          color:#767676;
          font-size:21px;
        }
        h1{
          font-size:35px;
          font-weight:540;
        }

        & > div{
          display:flex;
          
          span{
            width:16%;
            height:80px;
            img{
              max-width:100%;
              max-height:100px;
            }
          }
          div{
            width:84%;
            padding-top:40px;
            p{
              font-size:20px;
              word-spacing:3px;
              color:#333;
            }
            h3{
              margin-top:14px;
              font-size:20px;
              font-weight:550;
            }
            h4{
              font-size:20px;
              margin-bottom:20px;
            }
            a{
              font-size:18px;
              color:#4B8FE2;
              text-decoration:underline;
            }
          }
        }


      }
    }
    &  > div:nth-child(2){
      flex:1;
      img{
        width:100%;
      }
    }
  }
  
`