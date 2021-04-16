import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logoutSuccess } from '../../../store/Auth/action'

const ProfileSection = () => {
  const dispatch = useDispatch();
  return(
    <Container>
      <div>
        <Link to="#">My Profile</Link>
        <Link to="#">Integrations</Link>
        <Link to="#">Help Docs</Link>
        <Link style={{color:"red"}} to="#" onClick={() => dispatch(logoutSuccess())}>Sign Out</Link>
      </div>
    </Container>
  )
}
export {ProfileSection}

const Container = styled.div`
  position:absolute;
  background-color:white;
  right:30px;
  top:60px;
  z-index:60;
  box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
  width:13%;
  padding:4px 14px;
  & > div{
    display:flex;
    flex-direction:column;

    a{
      color:#333;
      margin:10px 0px;
    }
  }
`