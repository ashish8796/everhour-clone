import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../../store/projects/actions';
import styles from './ProjectSmallInfo.module.css';

const ProjectSmallInfo = ({name, createdAt, id}) => {
    const dispatch = useDispatch();

    const handleSmallInfo = (id) => {
        console.log(id);
    }
    const handleDeleteSmallInfo = (id) => {
        const idType = id.slice(0,2)
        if(idType === "ev"){
            console.log("Suceess");
            dispatch(deleteProject(id))
        } else {
            alert("This is Created from Github so from here it is not possible")
        }
    }
    return (
        <div className={styles.divPartMain}>
            <div>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/>
            </div>
            <div>
                <h6>{name}</h6>
                <p>{createdAt}</p>
            </div>
            <div title="Favourite">
                <input type="checkbox"/>
                <label htmlFor="">Favourite</label>
            </div>
            <div title="Delete">
                <button onClick={()=>handleDeleteSmallInfo(id)}>Delete</button>
            </div>
            <div className={styles.divPartMember}>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHBXKGKLIMtFw/profile-displayphoto-shrink_200_200/0/1596092838135?e=1623888000&v=beta&t=MHN3wmj1gf1JrlyJnfHcU00xsBG0uUpsRcPWofguqW8" alt=""/>
            </div>
            <div>
                <button onClick={()=>handleSmallInfo(id)}>$</button>
            </div>
        </div>
    )
}

export {ProjectSmallInfo}