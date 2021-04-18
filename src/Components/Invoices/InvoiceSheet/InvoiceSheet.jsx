import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getMockDataApi } from '../../../api/api';
import { saveInovices } from '../../../store/Invoices/action';
import MainpageNav from '../../MainpageNavbar/MainpageNav';


const InvoiceSheet = () => {
  const [clientDetails,setClientDetails] = useState("");
  const date = useSelector(state => state.invoice.date);
  const [status,setStatus] = useState("DRAFT");
  const {id}= useParams();
  const dispatch = useDispatch();

  const {pathname} = useLocation();

  const saveInvoice = ( ) => {
    setStatus("SENT")
    dispatch(saveInovices(pathname))
  }

  useEffect(() => {
    getMockDataApi(Number(id)).then((res) => {
      setClientDetails(res.data)
    }).catch(err => console.log(err))
    
  },[])

  

  console.log(clientDetails);
  
  return (
    <>
    <Container>
      <div>
        <Head>
          <h1>Invoice</h1>
          {status === "DRAFT" ? <button>{status}</button> : <button style={{backgroundColor:"#EAEAEA", color:"#767676"}}>{status}</button>}
        </Head>
        <div>
          <Top>
            <button className={status} onClick={() => saveInvoice()}>Mark as Sent</button>
            {/* <button>Save Invoice</button> */}
          </Top>

          <Mid> 
            <div>
              <div>
                <h3><span>Billed To :</span> {clientDetails.name}</h3> 
                <p></p> 
              </div>

              <div>
                <h2>INVOICE</h2>
                <h3>Date of Issue: {date}</h3>
              </div>
            </div>
          </Mid>
          

          <Bottom>
            <div>
              Description
               <h3>Total Amount(USD)</h3>
            </div>
            <div>
              {`${clientDetails.name} :: ${clientDetails.projectName} :: ${date}`}
               <h3>${clientDetails.budget}</h3>
            </div>
          </Bottom>
        </div>
      </div>
    </Container>
  </>
  )
}

export {InvoiceSheet}


const Container = styled.div`
  background-color:#FAFAFA;
  height:100vh;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  

  & > div{
    width:80%;
    height:72%;
    box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
    z-index:50;
    background-color:white;
  }
`

const Head = styled.div`
  font-size:26px;
  background-color:#FAFAFA;
  padding:10px 20px ;
  display:flex;
  justify-content:space-between;
  button{
    font-size:10px;
    margin-left:20px;
    padding:0px 14px;
    border-radius:20px;
    background-color:#12A252;
    color:white;
    border:1px solid rgb(0 0 0 / 17%);
  }
`

const Top = styled.div`
  background-color:#FAFAFA;
  padding:4px 20px 30px;

  button{
    width:10%;
    border-radius:3px;
    margin-right:2%;;
    background-color:#12A252;
    color:white;
    font-size:14px;
    padding:10px 0;
  }
  button+button{
    background-color:white;
    color:#767676;
    box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);

  }
`
const Mid = styled.div`
  padding:40px 100px 40px 40px;;
  & > div{
    display:flex;
    justify-content:space-between;
    align-items:center;
    span{
      font-size:20px;
      font-weight:bold;
    }

    h3{
      font-size:22px;
    }
    h2{
      font-size:68px;
      color:#767676;
      margin-bottom:40px;
    }
  }


`
const Bottom = styled.div`
  margin-top:50px;
  padding:10px 80px;
  & > div{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
  }
  & > div:first-child{
    background-color:#FAFAFA;
  }
`