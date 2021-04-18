import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { putMockDataApi } from "../../../api/api";
import { getAllclientsDetails } from "../../../store/Invoices/action";
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

  const billingSmallInfo = (id) => {
    console.log(id);
    setBillingVisible(true);
  };
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
    setBillingVisible(false);

    const payloadMockApi = {
      id: clientId,
      name: client,
      projectName: name,
      projectId: id,
      budget: budgetTrack,
      createdDate: createdAt,
    };

    putMockDataApi(clientId, payloadMockApi);
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

      <label htmlFor="">Billing</label>

      <div className={styles.divPartBillingInput}>
        <select name="" id="">
          <option value="Non-Billible">Non-Billible</option>
          <option value="Hourly(Project Hours)">Hourly(Project Hours)</option>
          <option value="Hourly(Member Rate)">Hourly(Member Rate)</option>
          <option value="Fixed Fee">Fixed Fee</option>
        </select>

        <input type="number" placeholder="$ Amount" />
      </div>

      <label htmlFor="">Budget</label>

      <div className={styles.divPartBillingInput}>
        <select name="" id="">
          <option value="No-Budget">No-Budget</option>
          <option value="Total Project Hours">Total Project Hours</option>
          <option value="Total Project Fees">Total Project Fees</option>
          <option value="Fixed Fee">Fixed Fee</option>
        </select>

        <input type="number" placeholder="$ Budget" />
      </div>

      {/* 
      <label htmlFor="">Client Name</label>
      <input
        type="text"
        value={client}
        onClick={handleGetClients}
        onChange={(e) => {
          setClient(e.target.value);
        }}
      /> */}

      <ClientsData>
        {!hideAllClients && allClients.length > 0
          ? allClients.map(({ id, name }) => {
              return (
                <div onClick={() => hanldeSelectClient(id, name)} key={id}>
                  {name}
                </div>
              );
            })
          : null}
      </ClientsData>

      <button onClick={() => handleBillingSave(id)}>Save</button>
    </div>
  ) : (
    <div>
      <>
        {/* {console.log(redURL)} */}
        <Redirect to={redURL} />
      </>
    </div>
  );
};

export { ProjectSmallInfo };

const ClientsData = styled.div`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 17%), 0 -2px 4px 0 rgb(0 0 0 / 17%);
  width: 25%;
  z-index: 50;
  background-color: #dddddd;
  position: absolute;
  top: 200px;
  left: 150px;

  div {
    padding: 6px 6px;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 17%), 0 -2px 8px 0 rgb(0 0 0 / 17%);
  }
`;
