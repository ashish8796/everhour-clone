import React from 'react'
import styled from "styled-components"

const Middlebox = styled.div`
     width:85%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid lightgray;
    padding:40px;
    height:10vh;

`

const Left = styled.div`
     select{
        border:1px solid #24be6a;
        padding:10px;
        :hover{
            outline:none;
            border:1px solid #24be6a;
        }
    }
`

const Right = styled.div`

    select{
        border:1px solid #24be6a;
        padding:10px;
    }
    input{
        border:1px solid #24be6a;
        margin-left:20px;
        height:39px;
        padding-left: 10px;
    }

`

const TimerMiddlebox = () => {
    return (
        <Middlebox>
            <Left>
                <span>Members:-</span>
                <select>
                    <option value="all">all</option>
                    <option value="only one">ANY ONE</option>
                </select>
            </Left>
            <Right>
                <select>
                    <option value="Today">Today</option>
                    <option value="Yesterday">Yesterday</option>
                    <option value="last week">last week</option>
                    <option value="this week">this week</option>
                </select>
                <input type="text" placeholder="Search members"/>
            </Right>
        </Middlebox>
    )
}

export default TimerMiddlebox
