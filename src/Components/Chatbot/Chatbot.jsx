import React, { useState } from 'react'
import styled from 'styled-components'

const Chatbot = () => {
  const [showMsg,setShowMsg] = useState(false);

  return(
    <Container>
      <div onClick={() => setShowMsg(!showMsg)}>
        {!showMsg ? <i class="far fa-comment fa-lg"></i> :
        <i class="fas fa-times fa-lg"></i> }
      </div>
      {showMsg ?
      <div>
        <div>
          <h4>Send a message</h4>
          <div>
            <div>
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F04%2FHappy-Person-Free-Download-PNG-180x180.png&f=1&nofb=1" alt=""/>
            </div>

            <div>
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.drillpal.com%2Fsites%2Fprod.drillpal.com%2Ffiles%2FC17_People_physical_appearance_docx_image5_6.png&f=1&nofb=1" alt=""/>
            </div>

            <div>
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2%2FAngry-Person-PNG-180x180.png&f=1&nofb=1" alt=""/>
            </div>

            <div>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cordialcup.com%2Fmedia%2Fkontakt%2F000332.png&f=1&nofb=1" alt=""/>
            </div>
          </div>
          <h3>How can we help?</h3>
          <p>We usually respond in a few hours</p>
        </div>
        <div>
          <div>
            <input type="text" placeholder="Your name"/>
            <input type="text" placeholder="Subject"/>
            <input type="text" placeholder="Email address"/>
            <div><textarea name="" id="" cols="20" rows="5" placeholder="How can we help?"></textarea>
            <span>
              <i class="fas fa-image fa-lg"></i>
              <i class="fas fa-smile fa-lg"></i>
            </span>
            </div>
            <button>Send a message</button>
          </div>
        </div>
      </div> : null}
    </Container>
  )
}

export {Chatbot}


const Container = styled.div`
  & > div:first-child{
    position:fixed;
    z-index:100;
    background-color:#58BC71;
    bottom:40px;
    right:60px;
    padding:22px;
    border-radius:50%;
    width:62px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    cursor: pointer;
  }

  & > div:nth-child(2){
    width:25%;
    text-align:center;
    color:white;
    position:fixed;
    bottom:120px;
    right:56px;
    z-index:100;
    border-radius:6px;
    overflow:hidden;
    box-shadow:1px 1px 1px #767676, -1px -1px 1px #767676;
    & > div:first-child{
      background-color:#58BC71;
      padding:20px 10px;
      h4{
        margin-bottom:20px;
      }
      h3{
        margin:20px 0px 2px;
      }
      p{
        color:#C4E7CD;
      }
      h4+div{
        display:flex;
        justify-content:center;
        align-items:center;
      div{
        background-color:#58BC71;
        width:50px;
        height:50px;
        border-radius:50%;
        overflow:hidden;
        border:2px solid white;
        img{
          width:100%;
          height:100%;
          }
        }
      }
    }
    & > div:nth-child(2){
      background-color:#F9FAFA;
      & > div{
        width:90%;
        margin:auto;
        padding:30px 0px 40px;
        input,div{
          border:1px solid #767676;
          color:#767676;
          opacity:0.6;
          padding:10px;
          width:100%;
          margin-top:10px;
        }
        div{
          background-color:white;
          textarea{
            border:none;
            width:100%;
            outline:none;
          }
          i{
            text-align:right;
            margin:0px 3px;
          }
          span{
            width:100%;
            display:flex;
            justify-content:flex-end;
          }
        }
        
        button{
          background-color:#58BC71;
          width:100%;
          margin-top:16px;
          color:white;
          padding:16px 10px;
          border-radius:4px;
        }
      }
    }
  }


`

