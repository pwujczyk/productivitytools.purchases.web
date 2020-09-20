import React, {useState, useEffect} from 'react';

function Home(){
    const[unSececured,setUnsecured]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:58197/Test/Hi`,{
            mode:'cors',
            crossDomain:true,
            method:"GET",
        })
        .then(res=>res.json())
        .then(json=>setUnsecured(json))
    },[]);

    return (
        <div>
            <p>This is homepage</p>
            <p>{unSececured.hi}</p>
        </div>
    )
}

export default Home;