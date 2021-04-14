import React from 'react'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'

const Outerbox = styled.div`
    width:85%;
    margin:15vh auto 0 auto;
    border:1px solid lightgray;
    padding:30px;
    height:25vh;
    color:#444444;
    span{
        font-size:30px;
        font-weight:600px;
    }
    div{
        display:flex,
        
    }
`
const Blocks = styled.div`
    margin-top:40px;
    a{color:#444444;
    padding-bottom:10px;
    font-size:25px;
    margin-right:40px;
    }
    a:hover{
        color:black;
        border-bottom:3px solid #24be6a;
    }
`

const Mainbox = () => {
    return (
        <div>
            <Outerbox>
                <span>Team</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>...</span>
                <Blocks>
                    <NavLink to={"timers"}>Timers</NavLink>
                    <NavLink to={"/timesheet"}>TimeSheet</NavLink>
                    <NavLink to={"/members"}>Members</NavLink>
                </Blocks>
            </Outerbox>
        </div>
    )
}

export default Mainbox
