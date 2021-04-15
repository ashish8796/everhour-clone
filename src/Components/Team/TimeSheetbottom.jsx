import React from 'react'
import { useSelector } from 'react-redux'

const TimeSheetbottom = () => {
    const data = useSelector((state) => state.team.data)

    return (
        <div>
            {
                data?.map()
            }
        </div>
    )
}

export default TimeSheetbottom
