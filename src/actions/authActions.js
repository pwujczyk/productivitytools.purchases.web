import { setAuthHeader } from "../utils/axiosHeaders";
import { 
    STORE_USER,
    LOADING_USER
 } from "./types"


export function storeUserError(){
    return {
        type: LOADING_USER
    }
}

export function storeUser(user){
    debugger;
    setAuthHeader(user.access_token)
    return {
        type:STORE_USER,
        payload:user
    }
}