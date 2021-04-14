import React from 'react';
import styles from './project.module.css'
import { ProjectSmallInfo } from './ProjectSmallInfo/ProjectSmallInfo';

const Project = () => {

    return (
        <div className={styles.divProjectMain}>
            <div className={styles.divProject1}>
                <h3>Project</h3>
                <button>Create Project</button>
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
                <ProjectSmallInfo />
                <ProjectSmallInfo />
                <ProjectSmallInfo />
                <ProjectSmallInfo />
                <ProjectSmallInfo />
            </div>
        </div>
    )
}

export {Project}