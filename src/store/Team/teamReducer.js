import { TIMERFAILURE, TIMERREQUEST, TIMERSUCCESS, TIMESHEETFAILURE, TIMESHEETREQUEST, TIMESHEETSUCCESS,ADDMEMBERFAILURE,ADDMEMBERSUCCESS,ADDMEMBERREQUEST,DELETEMEMBERSUCCESS,DELETEMEMBERFAILURE,DELETEMEMBERREQUEST} from "./actionType";

const init = {
    isLoading:false,
    isError:false,
    data:[],
    members:[]
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
            case ADDMEMBERREQUEST:
                return{
                    ...state,
                    isLoading:true
                }
            case ADDMEMBERSUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    members:[...state.members,payload]
                }
                case ADDMEMBERFAILURE:
                return{
                    ...state,
                    isLoading:false,
                    isError:true
                }
            default:
                return state;
    }
}