import React from 'react'
import MainpageNav from '../Components/MainpageNavbar/MainpageNav'
import Mainbox from '../Components/Team/Mainbox'
import TimerBottombo from '../Components/Team/TimerBottombo'
import TimerMiddlebox from '../Components/Team/TimerMiddlebox'

const TeamTimer = () => {
    return (
        <div>
            <MainpageNav/>
            <Mainbox/>
            <TimerMiddlebox/>
            <TimerBottombo/>
        </div>
    )
}

export default TeamTimer
