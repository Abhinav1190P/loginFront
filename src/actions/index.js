import axios from 'axios'

export function singIN(data){

    const request = axios.post('https://login1x.herokuapp.com/usersignup',data)
    .then(response=>response.data)


return{
    type: "sign_in",
    payload:request
}

}