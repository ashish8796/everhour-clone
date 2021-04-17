import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { putMockDataApi } from '../../../api/api';
import { getAllclients, getAllclientsDetails } from '../../../store/Invoices/action';
import { deleteProject } from '../../../store/projects/actions';
import { loadData } from '../../../utils/localStorage';
import { ProjectTask } from '../Task/ProjectTask';
import styles from './ProjectSmallInfo.module.css';

const postDataMock = {
    projectName: "",
    projectId: 0,
    budget: 0,
    createdDate: ""
}
const ProjectSmallInfo = ({name, createdAt, id}) => {
    const [budgetTrack, setBudgetTrack] = React.useState(0);
    const [postMock, setPostMock] = React.useState(postDataMock);
    //const {projectName, projectId, budget, createdDate} = postMock;
    const [client, setClient] = useState("");
    const [hideAllClients, setHideAllClients] = useState(false);
    const [clientId, setClientId] = useState("");

    const [billingVisible, setBillingVisible] = React.useState(false);
    const [redProjectTask, setRedProjectTask] = React.useState(false);
    const [favourite, setFavourite] =React.useState(false)
    let history = useHistory();
    const [redURL, setRedURL] = React.useState("");
    const dispatch = useDispatch();
    const imgUrl = loadData("avatar");
    const allClients = useSelector(state => state.invoice.allClients);

    const billingSmallInfo = (id) => {
        console.log(id);
        setBillingVisible(true)
    }
    const handleDeleteSmallInfo = (id) => {
        const idType = id.slice(0,2)
        if(idType === "ev"){
            console.log("Suceess");
            dispatch(deleteProject(id))
        } else {
            alert("This is Created from Github so from here it is not possible")
        }
    }
    const handleBillingSave = () => {
        setBillingVisible(false)
        //console.log(budgetTrack,id,name,createdAt);
        const payloadMockApi = {
            id: clientId,
            name: client,
            projectName: name,
            projectId: id,
            budget: budgetTrack,
            createdDate: createdAt
        }
        //console.log(payloadMockApi)
        putMockDataApi(clientId, payloadMockApi);
    }
    const handleProjectTask =()=>{
        setRedProjectTask(true);
        history.push("/projects");
        setRedURL("/task/"+id);
    }
    const handleFavourite = (e, id) => {
        setFavourite(!favourite);
        console.log(favourite, id)
    }
    const hanldeSelectClient = (id,name) => {
        //console.log(id, name)
        setClientId(id);
        setClient(name)
        setHideAllClients(true);
    }
    const handleGetClients = () => {
        console.log("hello")
        // dispatch(getAllclients())
        dispatch(getAllclientsDetails())
      }
    
    return !billingVisible && !redProjectTask?(
        <div className={styles.divPartMain}>
            <div>
                <button onClick={()=>handleProjectTask(id)}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/></button>
            </div>
            <div>
                <h6>{name}</h6>
                <p>{createdAt}</p>
            </div>
            <div title="Favourite">
                <input type="checkbox" onChange={(e)=>handleFavourite(e, id)} />
                <label htmlFor="">Favourite</label>
            </div>
            <div title="Delete">
                <button onClick={()=>handleDeleteSmallInfo(id)}>Delete</button>
            </div>
            <div className={styles.divPartMember}>
                <img style={{width: "28px"}} src={imgUrl} alt=""/>
            </div>
            <div>
                <button onClick={()=>billingSmallInfo(id)}>$</button>
            </div>
        </div>
    ):!redProjectTask?(
        <div className={styles.divPartBilling}>
            <h3>Project Billing</h3>
            <div className={styles.divPartBillingFlex}>
                <div>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/>
                </div>
                <div>
                    <h6>{name}</h6>
                    <p>{createdAt}</p>
                </div>
            </div>
            {/* <label htmlFor="">Client Name</label> */}
            <div className={styles.divPartBillingInput}>
                {/* <select name="" id="" >
                    <option value="Non-Billible">Non-Billible</option>
                    <option value="Hourly(Project Hours)">Hourly(Project Hours)</option>
                    <option value="Hourly(Member Rate)">Hourly(Member Rate)</option>
                    <option value="Fixed Fee">Fixed Fee</option>
                </select> */}
                <label htmlFor="">Client Name</label>
                <input type="text" value={client} onClick={handleGetClients} onChange={(e) => {setClient(e.target.value)}}/>

                <ClientsData>{!hideAllClients && allClients.length > 0 ? allClients.map(({id,name}) => {
                return <div onClick={() => hanldeSelectClient(id,name)} key={id}>{name}</div>
                }) : null}</ClientsData>
                {/* <input type="number" placeholder="$ Amount" /> */}
            </div>
            {/* <label htmlFor="">Budget</label> */}
            <div className={styles.divPartBillingInput}>
                {/* <select name="" id="" >
                    <option value="No-Budget">No-Budget</option>
                    <option value="Total Project Hours">Total Project Hours</option>
                    <option value="Total Project Fees">Total Project Fees</option>
                    <option value="Fixed Fee">Fixed Fee</option>
                </select> */}
                
                <label htmlFor="">Budget</label>
                <input type="number" placeholder="$ Budget" onChange={(e)=>setBudgetTrack(e.target.value)} />
            </div>
            <button onClick={()=>handleBillingSave(id)}>Save</button>
        </div>
    ):(
        <div><>
            {/* {console.log(redURL)} */}
            <Redirect to={redURL} />
            </>
        </div>
    )
}

export {ProjectSmallInfo}

const ClientsData = styled.div`
  box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
  width:25%;
  z-index:50;
  background-color:#dddddd;
  position:absolute;
  top:200px;
  left: 150px;
  div{
    padding:6px 6px;
    box-shadow:0 2px 8px 0 rgb(0 0 0 / 17%),0 -2px 8px 0 rgb(0 0 0 / 17%);
  }
`