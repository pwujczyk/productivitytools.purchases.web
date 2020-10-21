import React, {useState, useEffect} from 'react';
import {signOutRedirect} from '../services/userService'

function List(){
    const[unSececured,setUnsecured]=useState([])
    const[secured,setSecured]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:58197/Test/Hi`,{
            mode:'cors',
            crossDomain:true,
            method:"GET",
        })
        .then(res=>res.json())
        .then(json=>setUnsecured(json))

        fetch(`http://localhost:58197/Test/HiSecure`,{
            mode:'cors',
            crossDomain:true,
            method:"GET",
        })
        .then(res=>res.json())
        .then(json=>setSecured(json))
    },[]);

    
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