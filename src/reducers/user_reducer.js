export default function foo(state={},action){

switch(action.type){


case "sign_in":
    return {...state,userDATA: action.payload}

    case "login_in":
    return {...state,userDATA: action.payload}

    case "get_req":
        return {...state,getDATA: action.payload}

default:
    return state;
}


}