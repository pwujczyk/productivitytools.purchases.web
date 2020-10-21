import React from 'react'
import {useSelector} from 'react-redux'
import {Route, Redirect } from 'react-router-dom';

function PrivateRoute({children, component: Component, ...rest}){
    
    const state=useSelector(state=>state);
    const user=useSelector(state=>state.auth.user);

    return user 
    ? (<Route {...rest} component={Component}></Route>)
    : (<Redirect to={'/login'}/>)
}
export default PrivateRoute