import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import queryString from 'query-string'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setAllSections } from '../../../store/task/actions';
import { setTasksOfProject } from '../../../store/task/actions';
import MainpageNav from '../../MainpageNavbar/MainpageNav';


const ProjectTask =(name)=>{
    // const paramURL = useParams();
    // console.log(paramURL)
    console.log("N",name)
    var query = window.location.href;
    var lenQuery = query.length;
    let params = query.slice(27,lenQuery);

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

    const sections = useSelector((state) => state.sections, shallowEqual);
    console.log(sections);
    // let TasksData = dispatch(setTasksOfProject(params));
    // const SectionData = dispatch(setAllSections(params));
    
    return (
        <div>
            <MainpageNav />
            <div></div>
            {sections.sections.map((el)=>(<>
                <div>{el.name}</div>
            </>))}
            {sections.tasksOfProject.map((item)=><h2>{item.name} - {item.iteration}</h2>)}
        </div>
    )
}

export {ProjectTask}