import React from 'react'
import MainpageNav from '../Components/MainpageNavbar/MainpageNav'
import Mainbox from '../Components/Team/Mainbox'
import TimerMiddlebox from '../Components/Team/TimerMiddlebox'
import TimeSheetbottom from '../Components/Team/TimeSheetbottom'

const TeamTimesheet = () => {
    return (
        <div>
            <MainpageNav/>
            <Mainbox/>
            <TimerMiddlebox/>
            <TimeSheetbottom/>
        </div>
    )
}

export default TeamTimesheet
