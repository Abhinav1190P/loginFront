export default function foo(state={},action){

switch(action.type){


case "sign_in":
    return {...state,userDATA: action.payload}

default:
    return state;
}


}