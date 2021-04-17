import { createClient,getClient } from "../../api/api"
import { CREATE_CLIENT_ERROR, CREATE_CLIENT_LOADING, CREATE_CLIENT_SUCCESS, GET_CLIENT_ERROR, GET_CLIENT_LOADING, GET_CLIENT_SUCCESS } from "./actionTypes"

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

const getClientLoading = () => {
    return{
        type:GET_CLIENT_LOADING
    }
}

const getClientSuccess = (payload) => {
    return{
        type:GET_CLIENT_SUCCESS,
        payload
    }
}

const getClientFailure = () => {
    return{
        type:GET_CLIENT_ERROR
    }
}
const createClientData = (payload) => (dispatch) => {
    dispatch(createClientLoading())

    return createClient(payload)
    .then(res => dispatch(createClientSuccess(res.data)))
    .catch(err => dispatch(createClientFailure()))
    
}

const getClientData = payload => dispatch => {
    dispatch(getClientLoading())

    return getClient(payload)
    .then(res => dispatch(getClientSuccess(res.data)))
    .catch(err => dispatch(getClientFailure()))
}

export {createClientData,getClientData}