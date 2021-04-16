import { CREATE_CLIENT_ERROR, CREATE_CLIENT_LOADING, CREATE_CLIENT_SUCCESS } from "./actionTypes"

const init = {
    client:[],
    isLoading:false,
    isError:false
}

export const clientReducer = (state=init,{type,payload}) => {
    switch(type){
        case CREATE_CLIENT_LOADING:
            return{
                ...state,
                isLoading:true
            }
            case CREATE_CLIENT_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    client:[...state.client,payload],
                }
                case CREATE_CLIENT_ERROR:
                    return{
                        ...state,
                        isError:true
                    }
            default:
                return state;
    }
} 