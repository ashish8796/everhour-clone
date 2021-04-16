import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../../store/projects/actions';
import { loadData } from '../../../utils/localStorage';
import { ProjectTask } from '../Task/ProjectTask';
import styles from './ProjectSmallInfo.module.css';

const ProjectSmallInfo = ({name, createdAt, id}) => {
    const [billingVisible, setBillingVisible] = React.useState(false);
    const [redProjectTask, setRedProjectTask] = React.useState(false);
    let history = useHistory();
    const [redURL, setRedURL] = React.useState("");
    const dispatch = useDispatch();
    const imgUrl = loadData("avatar");

    const billingSmallInfo = (id) => {
        console.log(id);
        setBillingVisible(true)
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
    const handleBillingSave = () => {
        setBillingVisible(false)
    }
    const handleProjectTask =()=>{
        setRedProjectTask(true);
        history.push("/projects");
        setRedURL("/task/"+id);
    }
    return !billingVisible && !redProjectTask?(
        <div className={styles.divPartMain}>
            <div>
                <button onClick={()=>handleProjectTask(id)}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/></button>
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
                <img style={{width: "28px"}} src={imgUrl} alt=""/>
            </div>
            <div>
                <button onClick={()=>billingSmallInfo(id)}>$</button>
            </div>
        </div>
    ):!redProjectTask?(
        <div className={styles.divPartBilling}>
            <h3>Project Billing</h3>
            <div className={styles.divPartBillingFlex}>
                <div>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/>
                </div>
                <div>
                    <h6>{name}</h6>
                    <p>{createdAt}</p>
                </div>
            </div>
            <label htmlFor="">Billing</label>
            <div className={styles.divPartBillingInput}>
                <select name="" id="" >
                    <option value="Non-Billible">Non-Billible</option>
                    <option value="Hourly(Project Hours)">Hourly(Project Hours)</option>
                    <option value="Hourly(Member Rate)">Hourly(Member Rate)</option>
                    <option value="Fixed Fee">Fixed Fee</option>
                </select>
                <input type="number" placeholder="$ Amount" />
            </div>
            <label htmlFor="">Budget</label>
            <div className={styles.divPartBillingInput}>
                <select name="" id="" >
                    <option value="No-Budget">No-Budget</option>
                    <option value="Total Project Hours">Total Project Hours</option>
                    <option value="Total Project Fees">Total Project Fees</option>
                    <option value="Fixed Fee">Fixed Fee</option>
                </select>
                <input type="number" placeholder="$ Budget" />
            </div>
            <button onClick={()=>handleBillingSave(id)}>Save</button>
        </div>
    ):(
        <div><>
            {/* {console.log(redURL)} */}
            <Redirect to={redURL} />
            </>
        </div>
    )
}

export {ProjectSmallInfo}