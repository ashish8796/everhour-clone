import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setAllProjects } from '../../store/projects/actions';
import { createAllProjects } from '../../store/projects/actions';
import styles from './project.module.css'
import { ProjectSmallInfo } from './ProjectSmallInfo/ProjectSmallInfo';

const Project = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      (async () => {
        dispatch(setAllProjects());
      })();
    }, [dispatch]);

    const createData = {
        "name": "Clone of Hi",
        "type": "board",
        "users": [
          1304,
          1543
        ]
    }
    const handleCreateProject = () => {
        dispatch(createAllProjects(createData));
    }

    const projects = useSelector((state) => state.projects, shallowEqual);
    console.log(projects.projects)
    return (
        <div className={styles.divProjectMain}>
            <div className={styles.divProject1}>
                <h3>Project</h3>
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
                    <input type="text" placeholder="Search projects..." />
                </div>
            </div>
            <div className={styles.divProject3}>
                {projects.projects.length>0 && projects.projects.map((el)=>(
                    <ProjectSmallInfo key={el.id} {...el}/>
                ))}
            </div>
        </div>
    )
}

export {Project}