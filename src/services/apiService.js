import axios from 'axios'

async function getHi(){
    debugger;
    const response=await axios.get('http://localhost:58197/Test/Hi')
    return response.data;
}

async function getHiSecured(){
    debugger;
    const response=await axios.get('http://localhost:58197/Test/HiSecure')
    return response.data;
}

export {
    getHi,
    getHiSecured
}