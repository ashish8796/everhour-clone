import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const Bottom = () => {
    const {isLoading,isError,client} = useSelector(state => state.client,shallowEqual)
    return isLoading?<div>...loading</div>:
            isError?<div>something went wrong</div>:
            <div>
                {
                    client?.map((name,project,comment) => {
                        return (
                            <div>
                                <div>{name}</div>
                                <div>{project}</div>
                                <div>{comment}</div>
                            </div>
                        )
                    })
                }
            </div>
}

export default Bottom
