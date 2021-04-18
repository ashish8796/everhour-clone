import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setAllClients } from "../../store/Client/action";
import { setAllProjects } from "../../store/projects/actions";
import { createAllProjects } from "../../store/projects/actions";

import { setAllUsers, setUser } from "../../store/user/actions";

import {
  filterData,
  filterSort,
  filterSortReverse,
} from "../../utils/filterData";

import MainpageNav from "../MainpageNavbar/MainpageNav";
import CreateProjectModal from "./CreateProjectModal";
import styles from "./project.module.css";
import { ProjectSmallInfo } from "./ProjectSmallInfo/ProjectSmallInfo";

const Project = () => {
  const [createProjectTitle, setCreateProjectTitle] = React.useState("");
  const [projectData, setProjectData] = React.useState([]);
  const [projectSearch, setProjectSearch] = React.useState("");
  const [filterBySort, setFilterBySort] = React.useState(null);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const createData = {
    type: "board",
    users: [1304, 1543],
  };
  const handleCreateProject = () => {
    setIsModalVisible(true);
    // const payload = {
    //   name: createProjectTitle,
    // };
    // console.log(payload);
    // if (payload.name !== "") {
    //   dispatch(createAllProjects({ ...createData, ...payload }));
    // } else {
    //   alert("Please fill your project name");
    // }
  };

  const findProjectPage = (e) => {
    setProjectSearch(e.target.value);
    //console.log(projectSearch)
    //console.log(projects.projects.name)
    // let projects = useSelector((state) => state.projects, shallowEqual);
    //let data = projectSearch

    setProjectData(filterData(projects.projects, projectSearch));
    // setProjectData(dataSearch);
    // console.log(projectData);
    //console.log(projects.projects);
  };
  const sortData = (e) => {
    if (e === "Ascending") {
      setProjectData(filterSort(copyData));
    } else if (e === "Descending") {
      setProjectData(filterSortReverse(copyData));
    }
  };

  //projects.projects = filterData(projects.projects, projectSearch)

  const projects = useSelector((state) => state.projects, shallowEqual);
  const copyData = projects.projects.map((item) => item);

  useEffect(() => {
    setProjectData(copyData);
  }, []);

  useEffect(() => {
    (async () => {
      dispatch(setAllProjects());
      dispatch(setAllClients());
      await dispatch(setUser());
      await dispatch(setAllUsers());
    })();
  }, [dispatch]);

  console.log("H", copyData);
  //setProjectSearch(projects);
  //console.log(projects.projects);
  return (
    <div style={{ fontFamily: "Lato,sans-serif" }}>
      <MainpageNav />
      {isModalVisible && (
        <CreateProjectModal
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
      )}

      <div className={`${styles.divProjectMain} border-lightgray`}>
        <div className={styles.divProject1}>
          <h3 className="primary-color">Projects</h3>
          <button onClick={handleCreateProject}>Create Project</button>
        </div>
        <div className={`${styles.divProject2} flex align-center`}>
          <div className={`${styles.divProject2sub1} flex align-center`}>
            <input type="checkbox" />
            <label htmlFor="">Select all</label>
          </div>
          <div className={styles.divProject2sub2}>
            {/* <select>
              <option value="None">Group-By</option>
              <option value="Client">Client</option>
              <option value="Billing">Billing</option>
              <option value="Budget">Budget</option>
            </select> */}
            <select
              onChange={(e) => sortData(e.target.value)}
              className={`border-lightgray`}
            >
              <option value="None">Filter</option>
              <option value="Client">All</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
            <input
              style={{ marginLeft: "30%" }}
              type="text"
              placeholder="Search projects..."
              onChange={(e) => findProjectPage(e)}
              className="background-white border-lightgray"
            />
          </div>
        </div>
        <div className={styles.divProject3}>
          {(projectData.length > 0 &&
            projectData.map((el) => (
              <ProjectSmallInfo key={el.id} project={el} />
            ))) ||
            copyData.map((item) => (
              <ProjectSmallInfo key={item.id} project={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export { Project };
