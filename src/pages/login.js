import React from 'react'
import {signinRedirect} from '../services/userService'

function Login() {


    function login(){
        signinRedirect();
    }

    return (
        <div>
            <p>login page</p>
            <button onClick={()=>login()}>login</button>
        </div>)
}

export default Login