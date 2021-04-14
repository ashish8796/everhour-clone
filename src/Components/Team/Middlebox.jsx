import React from 'react'
import styled from "styled-components"

const Outerbox = styled.div`
    width:85%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid lightgray;
    padding:40px;
    height:10vh;
    span{
        margin-right:15px;
    }
    select{
        border:1px solid #24be6a;
        padding:10px;
        :hover{
            outline:none;
            border:1px solid #24be6a;
        }
    }
    option{
        padding:25px;
        :hover{
            background-color:#24be6a;
        }
    }
    input{
        border:1px solid #24be6a;
        height:39px;
        padding-left: 10px;
    }
`
const Input = styled.div`
    display:flex;
    align-items:center;
    label{
        margin-left:10px
    }
`

const Middlebox = () => {
    return (
        <Outerbox>
            <Input>
                <input type="checkbox"  />
                <label >Select all</label>
            </Input>
            <div>
                <span>
                <select name="role" >
                    <option value="None">None</option>
                    <option value="Role">Role</option>
                    <option value="Status">Status</option>
                </select>
                </span>
                <span>
                <select name="all" >
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Invite">Invite</option>
                </select>
                </span>
                <span>
                    <input type="text" placeholder="Search users..." />
                </span>
            </div>
        </Outerbox>
    )
}

export default Middlebox
