import React, { useEffect } from "react";
import { useParams } from "react-router";
import queryString from "query-string";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  createSection,
  createTask,
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
  const [taskText, setTaskText] = React.useState("");
  const [sectionChoose, setSectionChoose] = React.useState("");
  const { tasksOfProject } = useSelector((state) => state.projects);

  var query = window.location.href;
  var lenQuery = query.length;
  let params = query.slice(27, lenQuery);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setTasksOfProject(params));
      dispatch(setAllSections(params));
      dispatch(setSpecProjects(params));
    })();
  }, [dispatch]);

  const createSectionData = {
    name: "Authentication",
    id: params,
  };

  const handleCreateSection = () => {
    //console.log(sectionText);
    dispatch(createSection(createSectionData.id, sectionText));
  };

  const createTasksData = {
    name: "Debugging",
    sec_id: 12,
    id: params,
  };
  const handleCreateTask = () => {
    dispatch(createTask(createTasksData.id, sections.sections[0].id, taskText));
  };

  const sections = useSelector((state) => state.sections, shallowEqual);
  console.log(sections);

  let taskBySection;
  if (tasksOfProject.length > 0) {
    taskBySection = filterTaskBySection(tasksOfProject);
  }

  // let TasksData = dispatch(setTasksOfProject(params));
  // const SectionData = dispatch(setAllSections(params));

  return (
    <div className={styles.BodyPageSection}>
      <MainpageNav />
      <div className={styles.MainTaskDiv}>
        <div className={styles.headerSection}>
          <h2>{sections.project_name.name}</h2>

          <h3 className={styles.listCont}>List</h3>
        </div>

        <div>
          {taskBySection &&
            Object.keys(taskBySection).map((key) => (
              <CreateTaskBySection
                key={key}
                tasks={taskBySection[key]}
                section={sections.sections.find(
                  (section) => section.id === Number(key)
                )}
              />
            ))}

          <div className={styles.DivTaskFlex}>
            <h2>Listed Sections</h2>
            <input
              className={styles.inputTaskPage}
              type="text"
              placeholder="Enter New section Name"
              onChange={(e) => setSectionText(e.target.value)}
            />
            <button onClick={handleCreateSection}>Add Section</button>
          </div>
          {sections.sections.map((el) => (
            <>
              <h4>{el.name}</h4>
            </>
          ))}
        </div>

        <div>
          <div className={styles.DivTaskFlex}>
            <h2>Listed Tasks</h2>
            <input
              className={styles.inputTaskPage}
              type="text"
              placeholder="Enter New Task Name"
              onChange={(e) => setTaskText(e.target.value)}
            />
            {/* <input className={styles.inputTaskPage} type="text" placeholder="Enter Existing Section Name" onChange={(e)=>setSectionChoose(e.target.value)}/> */}
            <button onClick={handleCreateTask}>Add Task</button>
          </div>
          {sections.tasksOfProject.map((item) => (
            <div className={styles.tasksDivOfProject}>
              <div
                style={
                  item.status === "open"
                    ? {
                        background: "green",
                        width: "15px",
                        height: "15px",
                        borderRadius: "8px",
                      }
                    : {
                        background: "dimgrey",
                        width: "15px",
                        height: "15px",
                        borderRadius: "8px",
                      }
                }
              ></div>
              <h4>
                {item.name} - {item.iteration}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { ProjectTask };
