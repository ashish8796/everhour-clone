import React from 'react'
import styled from 'styled-components'
import { Integeration } from './Integeration/Integeration'
import { Intro } from './Intro/Intro'
import { WhatsInside } from './WhatsInside/WhatsInside'

const Container = styled.div`
  position:absolute;
  top:140px;
  left:0px;
  width:100%;
  &  > div{
    margin:auto;
  }
`

const Landing = () => {
  return (
  <Container>
    <div>
      <Intro />
      <WhatsInside />
      <Integeration />
    </div>
  </Container>
  )
}

export {Landing}