import { TIMERFAILURE, TIMERREQUEST, TIMERSUCCESS, TIMESHEETFAILURE, TIMESHEETREQUEST, TIMESHEETSUCCESS } from "./actionType";

const init = {
    isLoading:false,
    isError:false,
    data:[]
}

export const teamReducer = (state=init,{type,payload}) => {
    switch(type){
        case TIMERREQUEST:
            return{
                ...state,
                isLoading:true
            }
        case TIMERSUCCESS:
            return{
                ...state,
                isLoading:false,
                data:payload
            }
        case TIMERFAILURE:
        return{
            ...state,
            isLoading:false,
            isError:true
        }
        case TIMESHEETREQUEST:
            return{
                ...state,
                isLoading:true
            }
        case TIMESHEETSUCCESS:
            return{
                ...state,
                isLoading:false,
                data:payload
            }
            case TIMESHEETFAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
            default:
                return state;
    }
}