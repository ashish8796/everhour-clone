import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllclients } from '../../../store/Invoices/action';

const CreateInvoice = ({setShowCreateInvoiceBox}) => {
  const [client, setClient] = useState("");
  const [hideAllClients, setHideAllClients] = useState(false);
  const [clientId, setClientId] = useState("");

  const [projects, setProjects] = useState("");
  const allClients = useSelector(state => state.invoice.allClients);

  const dispatch = useDispatch()

  const handleGetClients = () => {
    console.log("hello")
    dispatch(getAllclients())
  }

  const hanldeSelectClient = (id,name) => {
    setClientId(id);
    setClient(name)
    setHideAllClients(true);
  }

  const handleGetProjects = () => {

  }
  return (
    <Container>
      <div>
        <div>
          <h2>Create Invoice</h2>
          <button onClick={() => {setShowCreateInvoiceBox(false)}}>X</button>
        </div>

        <Formdiv>
          <div>
            <div>
              <label>Clients</label>
              <input type="text" value={client} onClick={handleGetClients} onChange={(e) => {setClient(e.target.value)}}/>

              <ClientsData>{!hideAllClients && allClients.length > 0 ? allClients.map(({id,name}) => {
              return <div onClick={() => hanldeSelectClient(id,name)} key={id}>{name}</div>
              }) : null}</ClientsData>
            </div>
           
            <div>
              <label>Projects</label>
              <input type="text" value={projects} onClick={handleGetProjects}onChange={(e) => {setProjects(e.target.value)}}/>
            </div>
            

            <label>Period</label>
            <div><input type="date"/></div>
          </div>

          <button>Create Inovice</button>
          <button onClick={() => {setShowCreateInvoiceBox(false)}}>Cancel</button>
        </Formdiv>
      </div>
    </Container>
  )
}


export {CreateInvoice}


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
    width:30%;
    height:63%;
    box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
    z-index:50;
    & > div:first-child{
      display:flex;
      justify-content:space-between;
      align-items:center;
      height:12%;
      background-color:#FAFAFA;
      padding:10px 16px;


      h2,button{
        font-size:20px;
      }

    }
  }
`


const Formdiv = styled.div`
  background-color:white;
  padding:10px 16px;
  height:88%;

  div:first-child, div:nth-child(2){
    position:relative;
  }

  label{
    font-size:16px;
    display:block;
    margin-bottom:12px;
  }
  input{
    box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
    padding:8px;
    display:block;
    width:100%;
    margin-bottom:25px;
  }

  button{
    width:28%;
    border-radius:3px;
    margin-top:10px;
    margin-right:4%;;
    background-color:#12A252;
    color:white;
    font-size:14px;
    padding:13px 0;
  }
  button+button{
    background-color:white;
    color:#767676;
  }
`


const ClientsData = styled.div`
  box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
  width:100%;
  z-index:50;
  background-color:white;
  position:absolute;
  top:62px;
  div{
    padding:6px 6px;
    box-shadow:0 2px 8px 0 rgb(0 0 0 / 17%),0 -2px 8px 0 rgb(0 0 0 / 17%);
  }
`