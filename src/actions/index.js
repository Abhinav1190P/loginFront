import axios from 'axios'

export function singIN(data){

    const request = axios.post('/usersignup',data)
    .then((response)=>{
       return response.data
    })


return{
    type: "sign_in",
    payload:request
}

}