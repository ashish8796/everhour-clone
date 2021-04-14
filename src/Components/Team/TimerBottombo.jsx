import React, { useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getTimerDetails} from "../../store/Team/action"

const TimerBottombo = () => {

    const data = useSelector((state) => state.team.data)
    const dispatch  = useDispatch()

    useEffect(() => {
        dispatch(getTimerDetails())
    },[dispatch])

    return (
        <div>
            <div>{data.length === 0 && "No Activity"}</div>
            {data?.map(info => {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>Activity</th>
                                <th>Time</th>
                                <th>Commit</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{info.username} {info.status}</th>
                                <th>{info.duration}</th>
                                <th>{info.task.name}</th>
                                <th>{info.time.total}</th>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
}

export default TimerBottombo
