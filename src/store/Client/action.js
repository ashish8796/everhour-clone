import { createClient } from "../../api/api"
import { CREATE_CLIENT_ERROR, CREATE_CLIENT_LOADING, CREATE_CLIENT_SUCCESS } from "./actionTypes"

const createClientLoading = () => {
    return{
        type:CREATE_CLIENT_LOADING
    }
}

const createClientSuccess = (payload) => {
    return{
        type:CREATE_CLIENT_SUCCESS,
        payload
    }
}

const createClientFailure = () => {
    return{
        type:CREATE_CLIENT_ERROR
    }
}

const createClientData = (payload) => (dispatch) => {
    dispatch(createClientLoading())

    return createClient(payload)
    .then(res => dispatch(createClientSuccess(res.data)))
    .catch(err => dispatch(createClientFailure()))
    
}

export {createClientData}