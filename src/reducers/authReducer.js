import {STORE_USER} from "../actions/types"

const intialState={
    user:null,
    isLoadingUser:false
}

export default function(state=intialState,action){
    switch(action.type){
        case STORE_USER:
            return{
                ...state,
                isLoadingUser:false,
                user: action.payload
            }
            /*todo: get from local storage*/
        default:
            return state
    }
}