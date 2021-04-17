import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getMockDataApi } from '../../../api/api';


const InvoiceSheet = () => {
  const [clientDetails,setClientDetails] = useState("");

  const date = useSelector(state => state.invoice.date);

  const {id}= useParams();


  useEffect(() => {
    getMockDataApi(Number(id)).then((res) => {
      setClientDetails(res.data)
    }).catch(err => console.log(err))
    
  },[])

  console.log(clientDetails);

  return (
    <Container>
      <div>
        <div>
          <div>
            <h3>Invoice to {clientDetails.name}</h3>
            <button>Save Invoice</button>
            <button>Cancel</button>
          </div>

          <div>
            <h3>Invoice Date: {date}</h3>
            <h4></h4>
          </div>

          <div>
            <h3>Invoice Item: {clientDetails.projectName}</h3>
            <h4>Project ID: {clientDetails.projectId}</h4>
            <div></div>
          </div>

          <div>
            <h3>Total Amount(USD): ${clientDetails.budget}</h3>
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