import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import queryString from 'query-string'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { createSection, createTask, setAllSections, setSpecProjects } from '../../../store/task/actions';
import { setTasksOfProject } from '../../../store/task/actions';
import MainpageNav from '../../MainpageNavbar/MainpageNav';
import styles from './ProjectTask.module.css';


const ProjectTask =()=>{
    // const paramURL = useParams();
    // console.log(paramURL)
    //console.log("N",name)

    var query = window.location.href;
    var lenQuery = query.length;
    let params = query.slice(27,lenQuery);
    //console.log(params)

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
        dispatch(setTasksOfProject(params));
        })();
    }, [dispatch]);

    useEffect(() => {
        (async () => {
          dispatch(setAllSections(params));
        })();
    }, [dispatch]);

    useEffect(() => {
        (async () => {
          dispatch(setSpecProjects(params));
        })();
    }, [dispatch]);

    const createSectionData = {
        name: "Authentication",
        id: params
    }

    const handleCreateSection = () => {
        dispatch(createSection(createSectionData.id, createSectionData.name));
    }

    const createTasksData = {
        name: "Designing",
        sec_id: "517803",
        id: params
    }
    const handleCreateTask = () => {
        dispatch(createTask(createTasksData.id ,createTasksData.sec_id,createTasksData.name))
    }

    const sections = useSelector((state) => state.sections, shallowEqual);
    console.log(sections);
    // let TasksData = dispatch(setTasksOfProject(params));
    // const SectionData = dispatch(setAllSections(params));
    
    return (
        <div className={styles.BodyPageSection}>
        <MainpageNav />
        <div className={styles.MainTaskDiv}>
            
            <div className={styles.headerSection}>
                <h1>{sections.project_name.name}</h1>
            </div>
            <h3 style={{fontSize: "20px", color: "rgb(68,68,68)", borderBottom: "5px solid green", width: "30px"}}>list</h3>
            <hr style={{width: "90%", color: "#7e7e7e"}}/><br/>
            <div>
            <div className={styles.DivTaskFlex}>
                <h2>Listed Sections</h2>
                <button onClick={handleCreateSection}>Add Section</button>
                </div>
            {sections.sections.map((el)=>(<>
                <h4>{el.name}</h4>
            </>))}
            </div>
            <br/><br/>
            <div>
                <div className={styles.DivTaskFlex}>
                <h2>Listed Tasks</h2>
                <button onClick={handleCreateTask}>Add Task</button>
                </div>
                {sections.tasksOfProject.map((item)=><h4>{item.name} - {item.iteration}</h4>)}
            </div>
        </div>
        </div>
    )
}

export {ProjectTask}