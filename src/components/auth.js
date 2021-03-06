import React, { Component } from 'react'
import Load from './load'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

export default function Auth(ComposedClass,reload){
    class AuthenticationCheck extends Component{


state = {
    loading: true
}

componentWillMount(){
    this.props.auTh();
}

componentWillReceiveProps(nextProps){

this.setState({loading:false})

if(!nextProps.data.getDATA.isAuth){
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

const mapStateToProps = (state) =>{
    return{
        data: state.user
    }
}

return connect(mapStateToProps,actions)(AuthenticationCheck)

}

