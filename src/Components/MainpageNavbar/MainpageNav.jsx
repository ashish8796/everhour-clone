import React from 'react'
import Navlinks from './Navlinks/Navlinks'
import styled from "styled-components"

const Navbar = styled.div`
    display:flex;
    padding:5px 20px;
    margin:0;
    justify-content:space-between;
    align-items:center;
    border:1px solid lightgray;
    img{
        width:45px;
    }
`
const Pages = styled.div`
    color:#333333;

    a:hover{
        border-bottom:3px solid #24be6a;
        padding-bottom:15px;
    }
`
const Right = styled.div`
    display:flex;
    align-items:center;
    div{
        color:blue;
        cursor:pointer;
    }
    span{
        cursor:pointer;
        margin-left:30px;
        width:40px;
        height:40px;
        padding-top:10px;
        border-radius:50px;
        background-color:purple;
        color:white;
        text-align:center;
        align-items:center;
    }
`

const MainpageNav = () => {
    return (
        <Navbar>
            <div>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1' alt="everhour logo"/>
            </div>
            <Pages>
                <Navlinks/>
            </Pages>
            <Right>
                <div>Subscribe now</div>
                <span>S</span>
            </Right>
        </Navbar>
    )
}

export default MainpageNav
