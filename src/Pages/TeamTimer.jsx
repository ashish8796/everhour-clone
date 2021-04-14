import React from 'react'
import MainpageNav from '../Components/MainpageNavbar/MainpageNav'
import Mainbox from '../Components/Team/Mainbox'
import TimerMiddlebox from '../Components/Team/TimerMiddlebox'

const TeamTimer = () => {
    return (
        <div>
            <MainpageNav/>
            <Mainbox/>
            <TimerMiddlebox/>
        </div>
    )
}

export default TeamTimer