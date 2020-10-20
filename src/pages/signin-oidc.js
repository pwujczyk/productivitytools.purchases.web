
import React, {useEffect} from 'react'
import {signInRedirectCallback} from '../services/userService.js'
import {useHistory} from 'react-router-dom'

function SignInOidc(){

        const history=useHistory()
    useEffect(()=>{
        async function signInAsync(){
            await signInRedirectCallback();
        }
        signInAsync()
    },[history])

    return(
        <div>
            Redirecting...
        </div>
    )
}

export default SignInOidc