import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {loginUser } from '../../../store/Auth/action'
import { Chatbot } from '../../Chatbot/Chatbot'
import Footer from '../../Footer/Footer'
import { Navbar } from '../../Navbar/Navbar'

const Login = () => {
  const [userEmail,setUserEmail] = useState("");
  const [userPassword,setUserPassword] = useState("");

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const isLoading = useSelector(state => state.auth.isLoading);
  const isError = useSelector(state => state.auth.isError);

  const handleLogin = () => {
    dispatch(loginUser({userEmail,userPassword}))
    setUserEmail("");
    setUserPassword("");
  }

  if(isAuth){
    return <Redirect to="/projects"/>
  }

  console.log(isAuth);
  return(
    <div>
       <Navbar />
       <Chatbot />
       <div>
         <Headings>
          <h1>Log in to Everhour</h1>
          <h3>Using the former version of Everhour? Please <Link to="">login here</Link></h3>
         </Headings>

         <Formbox>
           <div>
            <Firstdiv>
              <div>
                <div>
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F2x%2Fgoogle-logo.png&f=1&nofb=1" alt=""/>
                  <div>
                    <p>Log in with Google</p>
                  </div>
                </div>

                <p>or</p>

                {isError ? <div style={{color:"red",textAlign:'center',marginBottom:"20px",fontSize:"17px"}}>Invalid email/password</div>: null}


                <input type="email" value={userEmail} placeholder="Enter your email..." onChange={(e) => setUserEmail(e.target.value)}/>
                <input type="password" value={userPassword} placeholder="Password..." onChange={(e) => setUserPassword(e.target.value)}/>
                <div>
                  <button onClick={handleLogin}>Log in</button>
                  <div><Link to="">Reset password</Link> <Link to="">More login options</Link></div>
                </div>
              </div>
            </Firstdiv>
            
            <Seconddiv>
              <div>
                <h3>NEWS</h3>
                <h4>Schedule Dashboard</h4>
                <p>Evaluate the time spent and see the amount of planned time in the future. <Link to="">Learn more</Link></p>

                <h4>Time off Request for Members</h4>
                <p>Everhour team members can now request time off, which team admins can then approve.<Link to="">Learn more</Link></p>

                <h4>Scheduled Tasks Now Sync into Timesheet</h4>
                <p>The tasks of the assignments that you create on the Schedule page are now automatically synced to the Timeshee... <Link  to="">Learn more</Link></p>
              </div>
            </Seconddiv>
           </div>
         </Formbox>
       </div>

       <TryFree>
        <div>
          <h2>New to Everhour?</h2>
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
      </TryFree>
      <Footer />
    </div>
  )
}

export {Login}


const Headings = styled.div`
  margin-top:140px;
  text-align:center;
  h1{
    font-size:46px;
    margin:10px 0px;
    font-weight:bold;
  }
  h3{
    font-size:23px;
    margin:20px 0px 36px;
    color:#767676;
  }
  a{
    color:#4B8FE2;
    text-decoration:underline;
    font-size:23px;
  }
`


const Formbox = styled.div`
  /* background:url('https://d3bnlkto289wdc.cloudfront.net/assets/illustrations/illo-c-2-person-scene-64506049637bebef1d29708ca19b08a92d09d06cd811fa4547d25278c54f0a99.svg'); */
  
  & > div {
    z-index:200;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:70%;
    padding:3%;
    margin:auto;
    box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
  }

`

const Firstdiv = styled.div`
  flex:1;
  padding:20px;
  /* margin-top:14px; */
  border-right:1px solid rgb(0 0 0 / 17%);
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
  input + input{
    margin-top:16px;
  }

  input+div{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    button{
      border-radius:6px;
      width:40%;
      padding:16px 0px;
      font-size:16px;
      margin:30px auto;
      color:white;
      background-color: #58BC71;
    }
    a{
      color:#333;
      margin:0px 10px;
      text-decoration:underline;
    }
  }
  

`
const Seconddiv = styled.div`
  flex:1;
  padding:20px;
  & > div{
    width:86%;
    margin:auto;

    h3{
      color:red;
      font-size:17px;
    }
    h4{
      font-weight:bold;
      margin-top:20px;
      font-size:19px;
    }
    p{
      font-size:17px;
      color:#767676;
    }
    a{
      color:#4B8FE2;
      text-decoration:underline;
    }
  }
  
`


const TryFree = styled.div`
  margin:80px auto;
  width:42%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  text-align:center; 

  &  > div{
    width:100%;
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
      width:54%;
      border:1px solid black;
      border-radius:6px;
      font-size:16px;
      padding:2.3% 3%;
    }
    img{
      width:24px;
      margin-right:10px;
    }

    & > div:last-child{
      display:flex;
      justify-content:center;
      align-items:center;
    }
  }
`
