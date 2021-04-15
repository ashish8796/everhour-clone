import React from 'react';
import { useParams } from 'react-router';
import queryString from 'query-string'


const ProjectTask =({id})=>{
    // const paramURL = useParams();
    // console.log(paramURL)
    console.log(id)
    var query = window.location.href;
    var lenQuery = query.length;
    console.log(query.slice(27,lenQuery))
    return (
        <div style={{background: "red"}}>
            <h1>Helo</h1>
        </div>
    )
}

export {ProjectTask}