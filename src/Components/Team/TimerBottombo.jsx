import React, { useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getTimerDetails} from "../../store/Team/action"
import styled from "styled-components"

const Th = styled.th`
    color:#666666;
    font-size:20px;
    /* width:15%; */
    /* margin-right:80px;
    margin-bottom:100px; */
`
const Bigrow = styled.th`
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

const TimerBottombo = () => {

    const {data,isLoading,isError} = useSelector((state) => state.team,shallowEqual)
    console.log(data)
    console.log("hi")
    const dispatch  = useDispatch()

    useEffect(() => {
        dispatch(getTimerDetails())
    },[dispatch])

    return isLoading?<div>...Loading</div>:
        isError?<div>Something went wrong</div>:
        (
        <Bottom>
            <div>{data.length === 0 && <h3>No Activity</h3>}</div>
            {data?.map(info => {
                return (
                    <table>
                        <thead>
                            <tr>
                                <Bigrow>Activity</Bigrow>
                                <Th>Time</Th>
                                <Th>Commit</Th>
                                <Th>Total</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{info.user.name} {info.status}</td>
                                <td>{info.startedAt}</td>
                                <td>{info.comment}</td>
                                <td>{info.duration}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </Bottom>
    )
}

export default TimerBottombo
