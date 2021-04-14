import React from 'react';
import styles from './ProjectSmallInfo.module.css';

const ProjectSmallInfo = () => {
    return (
        <div className={styles.divPartMain}>
            <div>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/>
            </div>
            <div>
                <h6>Bio</h6>
                <p>Prasun</p>
            </div>
            <div title="Favourite">
                <input type="checkbox"/>
                <label htmlFor="">Favourite</label>
            </div>
            <div title="Action">
                <button>...Action</button>
            </div>
            <div className={styles.divPartMember}>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHBXKGKLIMtFw/profile-displayphoto-shrink_200_200/0/1596092838135?e=1623888000&v=beta&t=MHN3wmj1gf1JrlyJnfHcU00xsBG0uUpsRcPWofguqW8" alt=""/>
            </div>
            <div>
                <button>$</button>
            </div>
        </div>
    )
}

export {ProjectSmallInfo}