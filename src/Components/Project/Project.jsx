import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setAllProjects } from "../../store/projects/actions";
import { createAllProjects } from "../../store/projects/actions";
import { filterData } from "../../utils/filterData";
import MainpageNav from "../MainpageNavbar/MainpageNav";
import CreateProjectModal from "./CreateProjectModal";
import styles from "./project.module.css";
import { ProjectSmallInfo } from "./ProjectSmallInfo/ProjectSmallInfo";

const Project = () => {
  const [createProjectTitle, setCreateProjectTitle] = React.useState("");
  const [projectData, setProjectData] = React.useState([]);
  const [projectSearch, setProjectSearch] = React.useState("");
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      dispatch(setAllProjects());
    })();
  }, [dispatch]);

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

  //projects.projects = filterData(projects.projects, projectSearch)

  const projects = useSelector((state) => state.projects, shallowEqual);
  const copyData = projects.projects.map((item) => item);

  React.useEffect(() => setProjectData(copyData), []);
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
          <input
            type="text"
            placeholder="Title Of the project"
            onChange={(e) => setCreateProjectTitle(e.target.value)}
          />
          <button onClick={handleCreateProject}>Create Project</button>
        </div>
        <div className={styles.divProject2}>
          <div className={styles.divProject2sub1}>
            <input type="checkbox" />
            <label htmlFor="">Select all</label>
          </div>
          <div className={styles.divProject2sub2}>
            <select>
              <option value="None">Group-By</option>
              <option value="Client">Client</option>
              <option value="Billing">Billing</option>
              <option value="Budget">Budget</option>
            </select>
            <select>
              <option value="None">Filter</option>
              <option value="Client">All</option>
              <option value="Billing">Active</option>
              <option value="Budget">Favourites</option>
            </select>
            <input
              type="text"
              placeholder="Search projects..."
              onChange={(e) => findProjectPage(e)}
            />
          </div>
        </div>
        <div className={styles.divProject3}>
          {(projectData.length > 0 &&
            projectData.map((el) => (
              <ProjectSmallInfo key={el.id} {...el} />
            ))) ||
            copyData.map((item) => (
              <ProjectSmallInfo key={item.id} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export { Project };
