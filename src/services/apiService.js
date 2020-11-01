import axios from 'axios'

async function getHi(){
    
    /*const response=await axios.get('http://localhost:58197/Test/Hi')*/
    const response=await axios.get('http://purchase.productivitytools.tech:8088/Test/Hi')

    axios({
        method:'get',
        url:'http://purchase.productivitytools.tech:8088/Test/Hi'
    })

    return response.data;
}

async function getHiSecured(){
    
    const response=await axios.get('http://purchase.productivitytools.tech:8088/Test/HiSecure')
    return response.data;
}

async function getPurchaseList()
{
    const response = await axios.get('http://purchase.productivitytools.tech:8088/Purchase/List')
    return response.data;
}

export {
    getHi,
    getHiSecured,
    getPurchaseList
}