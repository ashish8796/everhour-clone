import React from 'react'
import MainpageNav from '../Components/MainpageNavbar/MainpageNav'
import Bottombox from '../Components/Team/Bottombox'
import Mainbox from '../Components/Team/Mainbox'
import Middlebox from '../Components/Team/Middlebox'

const TeamMembers = () => {
    return (
        <div>
            <MainpageNav/>
            <Mainbox/>
            <Middlebox/>
            <Bottombox/>
        </div>
    )
}

export default TeamMembers
