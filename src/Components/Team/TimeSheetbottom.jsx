import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimeSheetDetails } from '../../store/Team/action'
import styled from "styled-components"

const Bottom = styled.table`
    margin:0 auto;
    width:85%;
    th{
        font-size:22px;
        font-weight:500;
    }
    th,td{
        padding:10px 20px;
        border:1px solid lightgray;
        img{
            border-radius:50px;
        }
    }
` 



const TimeSheetbottom = () => {
    const data = useSelector((state) => state.team.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTimeSheetDetails())
    },[dispatch])

    return (
        <Bottom>
            <thead>
            <tr>
                <th>No</th>
                <th>Members</th>
                <th>Started</th>
                <th>Ended</th>
            </tr>
            </thead>
            {
                data?.map(({user,dailyTime},i) => {
                    return (
                       <tbody>
                            <tr>
                            <td>{i+1}</td>
                            <td><img src={user.avatarUrl} alt={user.email}/>{user.email} {user.status}</td>
                            <td>{dailyTime[0].date}</td>
                            <td>{dailyTime[1].date}</td>
                        </tr>
                       </tbody>
                    )
                })
            }
        </Bottom>
    )
}

export default TimeSheetbottom
