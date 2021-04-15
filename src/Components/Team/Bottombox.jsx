import React from 'react'
import styled from "styled-components"

const Bigrow = styled.div`
    width:350px;
    font-size:22px;
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
                <tbody>
                    <tr>
                        <Bigrow>Smith Rakesh</Bigrow>
                        <Td>$50</Td>
                        <Td>"30"</Td>
                        <Td>unlimited</Td>
                        <Td>20</Td>
                        <Td>1</Td>
                    </tr>
                </tbody>
            </table>
        </Bottom>
    )
}

export default Bottombox
