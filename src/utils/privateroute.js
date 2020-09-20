import React from 'react'
import {useSelector} from 'react-redux'

function PrivateRoute(){
    const user=useSelector(state=>state.auth);
    return user 
    ? (<div>user not empty</div>)
    : (<div>user empty</div>)
}
export default PrivateRoute