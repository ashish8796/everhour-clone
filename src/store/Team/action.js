import {TIMERFAILURE,TIMERREQUEST,TIMERSUCCESS,TIMESHEETFAILURE,TIMESHEETREQUEST,TIMESHEETSUCCESS} from "./actionType"
import {getTimer} from "../../api/api"
import {getTimeSheet} from "../../api/api"

const timerRequest = () => {
    return{
        type:TIMERREQUEST
    }
}

const timerSuccess = payload => {
    return{
        type:TIMERSUCCESS,
        payload
    }
}

const timerFailure = () => {
    return{
        type:TIMERFAILURE
    }
}

const timeSheetRequest = () => {
    return{
        type:TIMESHEETREQUEST
    }
}

const timeSheetSuccess = payload => {
    return{
        type:TIMESHEETSUCCESS,
        payload
    }
}

const timeSheetFailure = () => {
    return{
        type:TIMESHEETFAILURE
    }
}

const getTimerDetails = payload => dispatch => {
    dispatch(timerRequest())
    return getTimer()
    .then(res => dispatch(timerSuccess(res.data)))
    .catch(res => dispatch(timerFailure()))
} 

const getTimeSheetDetails = payload => dispatch => {
    dispatch(timeSheetRequest())
    return getTimeSheet()
    .then(res => dispatch(timeSheetSuccess(res.data)))
    .catch(res => dispatch(timeSheetFailure()))
} 

export {getTimeSheetDetails,getTimerDetails}