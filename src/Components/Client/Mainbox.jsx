import React, { useState } from 'react'
import styled from "styled-components"
import Modal from './Modal'

const Main = styled.div`
width:85%;
margin:50px auto 0 auto;
border:1px solid lightgray;
padding:20px 40px;
display:flex;
justify-content:space-between;
    span{
        font-size:25px;
    }
    div{
        color:#fff;
    padding: 10px;
    background-color:#24be6a;
    text-align:center;
    align-items:center;
    cursor:pointer;
    }

`

const Mainbox = () => {
    const [showpop,setShowpop] = useState(false)
    return (
        <div>
            <Main>
            <span>Clients</span>
            <div onClick={() => setShowpop(true)} >Create Clients</div>
            </Main>
            {
                showpop ? <Modal setShowpop={setShowpop}/> : null
            }
        </div>
    )
}

export default Mainbox
