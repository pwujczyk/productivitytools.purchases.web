import React, {useState, useEffect} from 'react';
import {signOutRedirect} from '../services/userService'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as apiService from '../services/apiService'

function Home(){
    const user = useSelector(state => state.auth.user)
    const history=useHistory()
    const[unSececured,setUnsecured]=useState([])
    const[secured,setSecured]=useState([])

    useEffect(()=>{
        getHi();
        getHiSecured();
        /*fetch(`http://localhost:58197/Test/Hi`,{
            mode:'cors',
            crossDomain:true,
            method:"GET",
        })
        .then(res=>res.json())
        .then(json=>setUnsecured(json))
*/
        /*fetch(`http://localhost:58197/Test/HiSecure`,{
            mode:'cors',
            crossDomain:true,
            method:"GET",
        })
        .then(res=>res.json())
        .then(json=>setSecured(json))*/
    },[]);

    async function getHi(){

        const hi=await apiService.getHi();
        setUnsecured(hi);
    }

    async function getHiSecured(){

        const hisecured=await apiService.getHiSecured();
        setSecured(hisecured);
    }

    
    function signOut(){
       
        signOutRedirect();
    }
    function list(){
        
        history.push('/List')
    }

    return (
        <div>
            <button onClick={()=>signOut()}>sign out</button>
            <p>This is homepage</p>
            <p>Unsecured</p>
            <p>{unSececured.hi}</p>

            <p>Secured</p>
            <p>{secured.hi}</p>
            <button color="primary" variant="contained" onClick={()=>list()}>Lista</button>
        </div>
    )
}

export default Home