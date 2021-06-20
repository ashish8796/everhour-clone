import React, { useState } from 'react'
import styled from 'styled-components'
import allIntegration from './Images/allIntegration.png'

const sliderImgs = ['https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary@2x.webp','https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary@2x.webp','https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary@2x.webp']

const Integeration = () => {
  const [presentImg,setPresentImg] = useState(0);

  const handleSliderImg = (val) => {
    let value = presentImg+val;
    if(value < 0){
      value = 2
    }else if(presentImg+val > 2){
      value = 0
    }
    setPresentImg(value);
   
  }

  return (
    <Container>
      <div>
        <h1>Estimate tasks, set budgets, customize reports & track time. Directly in your project management tool!</h1>
        <div>
          <div>
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2015/11/asana-logo11.jpg" alt="asana-logo"/>
            <p>Asana</p>
          </div>
          <div>
            <img src="https://cdn1.iconfinder.com/data/icons/designer-skills/128/trello-512.png" alt="Trello"/>
            <p>Trello</p>
          </div>
          <div>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/37_Basecamp_logo_logos-512.png" alt="Basecamp"/>
            <p>Basecamp</p>
          </div>
          <div>
            <img src="https://symbols-electrical.getvecta.com/stencil_85/33_jira-icon.6a60be29f8.png" alt="Jira"/>
            <p>Jira</p>
          </div>
          <div>
            <img src="http://pngimg.com/uploads/github/github_PNG40.png" alt="Github"/>
            <p>Github</p>
          </div>
          <div>
            <img src="https://uploads-ssl.webflow.com/5e6aa3e3f001fae105b8e1e7/5f6373cf912c290d648d81de_clickup.png"/>
            <p>ClickUp</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={sliderImgs[presentImg]} alt=""/>
        </div>
        <button onClick={() => handleSliderImg(1)}><i className="fas fa-chevron-left fa-2x"></i></button>
        <button onClick={() => handleSliderImg(-1)}><i className="fas fa-chevron-right fa-2x"></i></button>
      </div>

      <div>
        <div>
          <h1>1</h1>
          <div>
            <h2>Quick setup</h2>
            <p>Connect Everhour with your tool and start tracking time right away. No manual project setup required.</p>
          </div>
        </div>

        <div>
          <h1>2</h1>
          <div>
            <h2>Native integration</h2>
            <p>Time tracking controls natively appears inside your project management tool, making it easy to track time.</p>
          </div>
        </div>

        <div>
          <h1>3</h1>
          <div>
            <h2>Automatic updates</h2>
            <p>Everhour syncs changes automatically. That means your reports will always show the freshest data.</p>
          </div>
        </div>
      </div>

      <AllIntegration>
        <img src={allIntegration} alt=""/>
        {/* <button>All Integration</button> */}
      </AllIntegration>
    </Container>
  )
}

export {Integeration}


const Container = styled.div`

  & > div:first-child{
    width:56%;
    margin:auto;
    text-align:center;
    h1{
      font-size:44px;
      margin:60px 0px;
      font-weight:540;
    }

    h1+div{
      display:flex;
      justify-content:space-between;
      align-items:center;
      div{
        display:flex;
        justify-content:space-around;
        align-items:center;
      }
      img{
        width:40px;
        margin-right:4px;
        background-color:white;
      }
      p{
        font-weight:500;
        font-size:22px;
      }
    }
  }

  & > div:nth-child(2){
    width:84%;
    margin:80px auto 40px;
    position: relative;
    div{
      display:flex;
      justify-content:center;
      align-items:center;
    }
    img{
      max-width:87%;
    }
    button{
      position: absolute;
      padding:12px 15px;
      border-radius:50%;
      transform:translate(0,-50%);
      border:1px solid silver;
      color:silver;
    }
    div+button{
    top:50%;
    left:0;
  }
  button+button{
    top:50%;
    right:0;
  }
  }
  
  & > div:nth-child(3){
    width:78%;
    margin:auto;
    display:flex;
    justify-content:space-between;

    & > div{
      flex:1;
      padding:1% 2%;
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      h1{
        font-size:28px;
        margin-right:20px;
        padding:1% 4%;
        border-radius:50%;
        background-color:#F0FBF5;
      }
      h2{
        font-size:22px;
        margin-bottom:12px;
        font-weight:540;
      }
      p{
        font-size:19px;
        word-spacing:3px;
        color:#767676;
      }
    }
  }
  
`
const AllIntegration = styled.div`
  width:100vw;
  margin-top:10px;
  position: relative;
  img{
    max-width:100%;
  }
  /* button{
    border-radius:6px;
      padding:16px 22px;
      font-size:16px;
      margin:30px 16px;
      background-color:#58BC71;
      color:white;
      position:absolute;
      top:50%;
      left:50%;
  } */
`