import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../../store/projects/actions';
import styles from './ProjectSmallInfo.module.css';

const ProjectSmallInfo = ({name, createdAt, id}) => {
    const [billingVisible, setBillingVisible] = React.useState(false);
    const dispatch = useDispatch();

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
    return !billingVisible?(
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
                <button onClick={()=>billingSmallInfo(id)}>$</button>
            </div>
        </div>
    ):(
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
    )
}

export {ProjectSmallInfo}