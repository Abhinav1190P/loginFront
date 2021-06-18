import axios from 'axios'


export function singIN(data){

    const request = axios.post('https://loginback1.herokuapp.com/usersignup',data)
    .then((response)=>{
       return response.data
    })


return{
    type: "sign_in",
    payload:request
}

}


export function logIn(data){

    const request = axios.post('https://loginback1.herokuapp.com/userlogin',data)
    .then((response)=>{
        return response.data
    })

    return {
        type:"login_in",
        payload:request
    }

}


