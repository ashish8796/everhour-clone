import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import styled from "styled-components"

const Bigrow = styled.div`
    width:350px;
    font-size:22px;
    span{
        color:blue;
        margin-left:15px;
    }
`
const Bottom = styled.div`
    width:85%;
    margin:auto;
    border:1px solid lightgray;
    padding:0 40px;
    color:#333333;
   
`
const Th = styled.th`
    color:#666666;
    font-size:20px;
    padding-right:80px;
    margin-bottom:100px;
`
const Td = styled.td`

`


const Bottombox = () => {
    const {members} = useSelector((state) => state.team,shallowEqual)
    return (
        <Bottom>
            <table>
                <thead>
                    <tr>
                        <Bigrow>
                            <input type="checkbox"/>
                            Admin</Bigrow>
                        <Th>Rate</Th>
                        <Th>Cost</Th>
                        <Th>Capacity</Th>
                        <Th>Limit</Th>
                        <Th>Team Groups</Th>
                    </tr>
                </thead>
                {
                    members?.map(({name,active,rate,cost,capacity,limit,teamGroups}) => {
                        return (
                            <tbody>
                            <tr>
                            <Bigrow>{name} <span>{active ? "active" : "not active"}</span></Bigrow>
                            <Td>{rate}</Td>
                            <Td>{cost}</Td>
                            <Td>{capacity}</Td>
                            <Td>{limit}</Td>
                            <Td>{teamGroups}</Td>
                            </tr>
                           </tbody>
                        )
                    })
                }
            </table>
        </Bottom>
    )
}

export default Bottombox
