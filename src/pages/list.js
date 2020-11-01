import React, {useState, useEffect} from 'react';
import {signOutRedirect} from '../services/userService'
import * as apiService from '../services/apiService'

function List(){
    const[list,setList]=useState([])

    useEffect(()=>{
        getPurchaseList();

    },[]);

    async function getPurchaseList(){
        const r=await apiService.getPurchaseList();
        setList(r);
    }
   
    function signOut(){
        signOutRedirect();
    }

    return (
        <div>
            <button onClick={()=>signOut()}>sign out</button>
            <p>This is listpage</p>
            <p>Unsecured</p>
            
            <p>
                {list.map(l=>(
                    <div key={l.id}>{l.id}</div>
                ))}
            </p>
        </div>
    )
}

export default List