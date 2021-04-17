import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { deleteProject } from "../../../store/projects/actions";
import { findItem } from "../../../utils/findItem";
import { loadData } from "../../../utils/localStorage";
import CreateUserImg from "./CreateUserImg";
import Favourite from "./Favourite";
import styles from "./ProjectSmallInfo.module.css";

const ProjectSmallInfo = ({ project }) => {
  const { name, createdAt, id, users } = project;
  const [billingVisible, setBillingVisible] = React.useState(false);
  const [redProjectTask, setRedProjectTask] = React.useState(false);
  const [favourite, setFavourite] = React.useState(false);
  let history = useHistory();
  const [redURL, setRedURL] = React.useState("");
  const dispatch = useDispatch();
  const imgUrl = loadData("avatar");
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
  };

  const handleProjectTask = () => {
    setRedProjectTask(true);
    history.push("/projects");
    setRedURL("/task/" + id);
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
