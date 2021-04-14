import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {

    const links = [
        {
            to:"/mainhome",
            exact:true,
            title:"Home"
        },
        {
            to:"/schedule",
            exact:false,
            title:"Schedule"
        },
        {
            to:"/time",
            exact:false,
            title:"Time"
        },
        {
            to:"/projects",
            exact:false,
            title:"Projects"
        },
        {
            to:"/clients",
            exact:false,
            title:"Clients"
        },
        {
            to:"/timer",
            exact:false,
            title:"Team"
        },
        {
            to:"/reports",
            exact:false,
            title:"Reports"
        }
    ]
    return (
        <div>
            {
                links.map(({to,exact,title}) => <NavLink style={{color:"#666666", textDecoration:"none",marginRight:"30px"}} to={to} exact={exact}>{title}</NavLink>)
            }
        </div>
    )
}

export default Navlinks
