import React, {useState, useEffect} from 'react';
import {signOutRedirect} from '../services/userService'
import * as apiService from '../services/apiService'

function List(){
    const[unSececured,setUnsecured]=useState([])
    const[secured,setSecured]=useState([])

    useEffect(()=>{
        getHi();
        getHiSecured();
    },[]);

    async function getHi(){
        debugger;
        const hi=await apiService.getHi();
        setUnsecured(hi);
    }

    async function getHiSecured(){
        debugger;
        const hisecured=await apiService.getHiSecured();
        setSecured(hisecured);
    }
    
    function signOut(){
        signOutRedirect();
    }

    return (
        <div>
            <button onClick={()=>signOut()}>sign out</button>
            <p>This is listpage</p>
            <p>Unsecured</p>
            <p>{unSececured.hi}</p>

            <p>Secured</p>
            <p>{secured.hi}</p>
        </div>
    )
}

export default List