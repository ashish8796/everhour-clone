import React, { useEffect } from "react";
import { useParams } from "react-router";
import queryString from "query-string";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  createSection,
  setAllSections,
  setSpecProjects,
} from "../../../store/task/actions";
import { setTasksOfProject } from "../../../store/task/actions";
import MainpageNav from "../../MainpageNavbar/MainpageNav";
import styles from "./ProjectTask.module.css";
import { filterTaskBySection } from "./../../../utils/filterData";
import CreateTaskBySection from "./CreateTaskBySection";

const ProjectTask = () => {
  const [sectionText, setSectionText] = React.useState("");
  const { tasksOfProject } = useSelector((state) => state.projects);

  var query = window.location.href;
  var lenQuery = query.length;
  let params = query.slice(27, lenQuery);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(setTasksOfProject(params));
      await dispatch(setSpecProjects(params));
      await dispatch(setAllSections(params));
    })();
  }, [dispatch]);

  //   const createSectionData = {
  //     name: "Authentication",
  //     id: params,
  //   };

  //   const createTasksData = {
  //     name: "Debugging",
  //     sec_id: 12,
  //     id: params,
  //   };

  const sections = useSelector((state) => state.sections, shallowEqual);

  let taskBySection;
  if (tasksOfProject.length > 0) {
    taskBySection = filterTaskBySection(tasksOfProject);
  }

  // let TasksData = dispatch(setTasksOfProject(params));
  // const SectionData = dispatch(setAllSections(params));

  console.log(sections.sections);

  return (
    <div className={styles.BodyPageSection}>
      <MainpageNav />
      <div className={styles.MainTaskDiv}>
        <div className={styles.headerSection}>
          <h2>{sections.project_name.name}</h2>

          <h3 className={styles.listCont}>List</h3>
        </div>

        <div>
          {sections.sections.length > 0 &&
            sections.sections.map((section) => (
              <CreateTaskBySection
                key={section.id}
                tasks={taskBySection[section.id]}
                projectId={params}
                section={section}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export { ProjectTask };
