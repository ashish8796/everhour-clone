import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllclients, putMockDataApi } from "../../../api/api";
import { emptyUserProjects, getAllclientsDetails } from "../../../store/Invoices/action";
import { deleteProject } from "../../../store/projects/actions";
import { loadData } from "../../../utils/localStorage";
import { ProjectTask } from "../Task/ProjectTask";
import styles from "./ProjectSmallInfo.module.css";
import { findItem } from "../../../utils/findItem";
import Favourite from "./Favourite";
import CreateUserImg from "./CreateUserImg";

const postDataMock = {
  projectName: "",
  projectId: 0,
  budget: 0,
  createdDate: "",
};
const ProjectSmallInfo = ({ project }) => {
  const { name, createdAt, id, users } = project;
  const [budgetTrack, setBudgetTrack] = React.useState(0);
  const [postMock, setPostMock] = React.useState(postDataMock);
  //const {projectName, projectId, budget, createdDate} = postMock;
  const [client, setClient] = useState("");
  const [hideAllClients, setHideAllClients] = useState(false);
  const [clientId, setClientId] = useState("");
  const [billingVisible, setBillingVisible] = React.useState(false);
  const [redProjectTask, setRedProjectTask] = React.useState(false);
  const [favourite, setFavourite] = React.useState(false);
  let history = useHistory();
  const [redURL, setRedURL] = React.useState("");
  const dispatch = useDispatch();
  const imgUrl = loadData("avatar");
  const allClients = useSelector((state) => state.invoice.allClients);
  const { allUsers } = useSelector((state) => state.user);
  const [selectedClient,setSelectedClient] = useState("");


  const billingSmallInfo = (id) => {
    console.log(id);
    setBillingVisible(true);
  };

  const handleOnChange = (e) => {
    const {name,value} = e.target;
    const val = value.split(',')
    console.log(val)
    setSelectedClient(val);
  } 


  const handleDeleteSmallInfo = (id) => {
    const idType = id.slice(0, 2);
    if (idType === "ev") {
      console.log("Suceess");
      dispatch(deleteProject(id));
    } else {
      alert("This is Created from Github so from here it is not possible");
    }
  };
  const handleBillingSave = () => {

    console.log(name, createdAt, id, users )
    const payloadMockApi = {
      id: selectedClient[0],
      name: selectedClient[1],
      projectName:name,
      projectId: id,
      budget: budgetTrack,
      createdDate: createdAt,
    };
    putMockDataApi(selectedClient[0], payloadMockApi);
    setBillingVisible(false)
  };
  const handleProjectTask = () => {
    setRedProjectTask(true);
    history.push("/projects");
    setRedURL("/task/" + id);
  };
  const handleFavourite = (e, id) => {
    setFavourite(!favourite);
    console.log(favourite, id);
  };
  const hanldeSelectClient = (id, name) => {
    setClientId(id);
    setClient(name);
    setHideAllClients(true);
  };

  const handleGetClients = () => {
    console.log("hello");
    // dispatch(getAllclients());
  };


  useEffect(() => {
    dispatch(getAllclientsDetails())
  },[])


  const projectDetails = () => {
    return (
      <>
        <div className={styles.logo}>
          <img src="/assets/Everhour_logo.svg" alt="logo" />
        </div>

        <div className={`${styles.taskName}`}>
          <h6 onClick={() => handleProjectTask(id)}>{name}</h6>
          <p>{createdAt}</p>
        </div>
      </>
    );
  };

  return !billingVisible && !redProjectTask ? (
    <div className={styles.divPartMain}>
      <section className={`${styles.projectDetailsCont} flex`}>
        {projectDetails()}

        <div className={styles.favourite} title="Favourite">
          <Favourite setFavourite={setFavourite} />
        </div>
      </section>

      <section className={`${styles.projectOption} grid`}>
        <div className={styles.divPartMember}>
          {allUsers.length > 0 &&
            users.map((userId) => (
              <CreateUserImg key={userId} user={findItem(userId, allUsers)} />
            ))}
        </div>

        <div className={`${styles.dollar} `}>
          <button onClick={() => billingSmallInfo(id)}>$</button>
        </div>

        <div title="Delete" className={`${styles.delete} flex align-center`}>
          <button onClick={() => handleDeleteSmallInfo(id)}>
            <img src="/assets/delete.svg" alt="delete" />
          </button>
        </div>
      </section>
    </div>
  ) : !redProjectTask ? (
    <div className={styles.divPartBilling}>
      <h3 className="flex justify-between">
        <span>Project Billing</span>{" "}
        <span
          className="text-lightgray"
          onClick={(e) => {
            e.preventDefault();
            setBillingVisible(false);
          }}
        >
          X
        </span>
      </h3>

      <div className={styles.divPartBillingFlex}>{projectDetails()}</div>

        <Label>Client</Label>
        <div > 
            <Select
              name="selectClient"
              // value={selectedClient}
              onChange={handleOnChange}
            >
              <option value="Select client...">
                Select client...
              </option>
              {allClients.map(({id,name,projects}) => {
                return <option key={id} value={[id,name,projects[0]]}>{name}</option>
              })}
            </Select>
          </div>

      <Label htmlFor="">Budget</Label>

      <div >
        <Input type="number" placeholder="$ Budget" onChange={(e) => {setBudgetTrack(e.target.value)}}/>
      </div>

      <button onClick={() => handleBillingSave()}>Save</button>
    </div>
  ) : (
    <div>
      <>
        <Redirect to={redURL} />
      </>
    </div>
  );
};

export { ProjectSmallInfo };



const Input = styled.input`
box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
  padding:8px;
  display:block;
  width:86%;
  margin:auto;
  border:none;
  margin-bottom:25px;
`;



const Select = styled.select`
  box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
    padding:8px;
    display:block;
    width:86%;
    margin:auto;
    border:none;
    margin-bottom:25px;
`;

const Label = styled.div`
  margin-bottom:20px;
  display:block;
  width:86%;
  margin:16px auto;
`