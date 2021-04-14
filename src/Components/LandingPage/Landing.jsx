import React from 'react'
import styled from 'styled-components'
import { Intro } from './Intro/Intro'
import { WhatsInside } from './WhatsInside/WhatsInside'

const Container = styled.div`
  position:absolute;
  top:140px;
  left:0px;
  width:100%;
  &  > div{
    /* width:70%; */
    margin:auto;
    /* border:1px solid red; */
  }
`

const Landing = () => {
  return (
  <Container>
    <div>
      <Intro />
      <WhatsInside />
    </div>
  </Container>
  )
}

export {Landing}