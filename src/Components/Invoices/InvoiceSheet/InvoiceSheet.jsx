import React from 'react'
import styled from 'styled-components'


const InvoiceSheet = () => {
  return (
    <Container>
      <div>
        <div>
          <div>
            <h3>Invoice to </h3>
            <button>Save Invoice</button>
            <button>Cancel</button>
          </div>

          <div>
            <h3>Invoice Date</h3>
            <h4></h4>
          </div>

          <div>
            <h3>Invoice Item</h3>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export {InvoiceSheet}


const Container = styled.div`
  position:absolute;
  background-color:rgb(0 0 0 / 17%);
  top:0;
  left:0;
  height:100vh;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  

  & > div{
    width:80%;
    height:90%;
    box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
    z-index:50;
    background-color:white;
  }
`