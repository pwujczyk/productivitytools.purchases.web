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
    return {
        type:STORE_USER,
        payload:user
    }
}