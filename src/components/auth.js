import React, { Component } from 'react'
import Load from './load'
import {connect} from 'react-redux'


export default function(ComposedClass,reload){
    class AuthenticationCheck extends Component{


state = {
    loading: true
}

componentWillReceiveProps(nextProps){

this.setState({loading:false})

if(!nextProps.data.userDATA.isAuth){
    if(reload === true){
        this.props.history.push('/login')
    }
}    
else{
    if(reload === false){
        this.props.history.push('/home')
    }
}

}


        render(){
            if(this.state.loading){
                return <Load/>
            }

return(
<ComposedClass/>
)

        }
    }

function mapStateToProps(state){
    return{
        data: state.userDATA
    }
}

return connect(mapStateToProps)(AuthenticationCheck)

}

