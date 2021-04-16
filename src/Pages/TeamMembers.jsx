import React, { useEffect, useState } from 'react'
import MainpageNav from '../Components/MainpageNavbar/MainpageNav'
import Bottombox from '../Components/Team/Bottombox'
import Mainbox from '../Components/Team/Mainbox'
import Middlebox from '../Components/Team/Middlebox'
import styled from "styled-components"
import {  useDispatch } from 'react-redux'
import {addMemberData} from "../store/Team/action"
const Relative = styled.div`
    position:relative;

`
const Abosulte = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    right:150px;
    top:200px;
    button{
    width:100px;
    color:#fff;
    padding: 10px;
    background-color:#24be6a;
    text-align:center;
    align-items:center;
    cursor:pointer;
    }
    input{
        border:1px solid #24be6a;
        padding-left:10px;
        height:40px;
    }
`


const TeamMembers = () => {
    const [member,setMember] = useState("")
    const dispatch = useDispatch()

    const addMembers = () => {
        dispatch(addMemberData(member))
        setMember("")
    }
  
    return (
        <div>
            <MainpageNav/>
            <Relative>
                <Mainbox/>
            </Relative>
            <Abosulte>
                <input type="text" placeholder="add team member" value={member} onChange={(e =>setMember(e.target.value))}/>
                <button onClick={addMembers}>Invite Members</button>
            </Abosulte>
            <Middlebox/>
            <Bottombox/>
        </div>
    )
}

export default TeamMembers
