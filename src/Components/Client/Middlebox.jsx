import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { filterData } from '../../utils/filterData'

const Middle =styled.div`
    width:85%;
    margin:0 auto;
    padding:20px 40px 20px 50%;  
    border:1px solid lightgray;
     select{
        padding:10px;
        border:1px solid #24be6a;
        margin-right:10px;
    }

    input{
        padding:10px;
        border:1px solid #24be6a;
    }
`
const Middlebox = ({query,setQuery}) => {

    const searchClient = (e) => {
        setQuery(e.target.value)
    }
    return (
        <Middle>
            <select>
                <option value="none">none</option>
                <option value="budgets">budgets</option>
                <option value="projects">projects</option>
            </select>
            <select>
                <option value="none">none</option>
                <option value="budgets">budgets</option>
                <option value="projects">projects</option>
            </select>
            <input type="text" placeholder="search clients" value={query} onChange={searchClient}/>
            
        </Middle>
    )
}

export default Middlebox
