import React from 'react'
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom';

function PrivateRoute(){
    const user=useSelector(state=>state.auth);
    return user 
    ? (<div>user not empty</div>)
    : (<Redirect to={'/login'}/>)
}
export default PrivateRoute