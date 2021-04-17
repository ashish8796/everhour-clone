import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { createClientData, getClientData } from '../../store/Client/action'

const Modalbg = styled.div`
    position:fixed;
    width:100%;
    height:100vh;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    justify-content:center;
    align-items:center;
`
const ModalMain = styled.div`
    padding:25px;
    width:40%;
    height:60%;
    background-color:#fff;
    font-family: 'Lato', sans-serif;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    
    div{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:left;
    };
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
const Head = styled.div`
    text-align:center;
    font-size:25px;

`
const Button = styled.div`
        /* width:100px; */
        display:flex;
    button{
        color:#fff;
    padding: 10px;
    background-color:#24be6a;
    text-align:center;
    align-items:center;
    cursor:pointer;
    }
    span{
border:1px solid lightgray;
    padding: 10px;
    color:#24be6a;
    text-align:center;
    align-items:center;
    cursor:pointer;
    }
`

const init = {
    name:"",
    project:"select All",
    comment:""
}
const Modal = ({setShowpop}) => {
    const [state,setState] = useState(init)
    const dispatch = useDispatch()

    const handleChange = e => {
        const {name,value} = e.target

        setState({
            ...state,
            [name]:value
        })
    }
    const createClient = () => {
        dispatch(createClientData(state))
        .then(() => {
            dispatch(getClientData())
        })
        setShowpop(false)
    }
    useEffect(() => {
        dispatch(getClientData())
    },[dispatch])
    return (
        <Modalbg>
            <ModalMain>
                <div>
                    <Head>Create Client</Head>
                </div>
                <div>
                    <div>Label</div>
                    <input type="text" placeholder="enter client name" value={state.name} name="name" onChange={handleChange}/>
                </div>
                <div>
                    <div>Select Project</div>
                    <select name="project" onChange={handleChange}>
                        <option value="selectAll">Select All</option>
                        <option value="clone">Clone</option>
                        <option value="samurai">Samurai</option>
                    </select>
                </div>
                <div>
                    <div>Buisness</div>
                    <textarea name="comment" placeholder="enter your comment" value={state.comment} onChange={handleChange} cols="10" rows="5"></textarea>
                </div>
                <Button>
                    <button onClick={createClient}>Create Client</button>
                    <span onClick={() => setShowpop(false)}>cancel</span>
                </Button>
            </ModalMain>
        </Modalbg>
    )
}

export default Modal
