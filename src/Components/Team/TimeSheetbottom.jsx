import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimeSheetDetails } from '../../store/Team/action'
import styled from "styled-components"

const Bottom = styled.div`
    margin:0 auto;
    width:85%;
` 

const Days = styled.div`
    display:flex;
    justify-content:space-between;
    div{
        border:1px solid lightgray;
        padding:10px;
    }
     div:first-child{
        padding:10px 20px;
    }
`


const TimeSheetbottom = () => {
    const data = useSelector((state) => state.team.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTimeSheetDetails())
    },[dispatch])

    return (
        <Bottom>
            <Days>
                <div>trigger</div>
                <div>mon</div>
                <div>tue</div>
                <div>wed</div>
                <div>thu</div>
                <div>fri</div>
                <div>sat</div>
                <div>sun</div>
            </Days>
            {
                data?.map(({clockIn,clockOut,trigger}) => {
                    return (
                        <div>
                            <div>{clockIn}</div>
                            <div>{clockOut}</div>
                            <div>{trigger}</div>
                        </div>
                    )
                })
            }
        </Bottom>
    )
}

export default TimeSheetbottom
