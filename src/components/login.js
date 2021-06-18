
import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
class Login extends Component {

state = {
email:'',
firstPass:''

}


emailHandle = (event) =>{
event.preventDefault();

this.setState({
    email: event.target.value
})
}

passwordHandle = (event) =>{
    event.preventDefault();
    this.setState({
        firstPass: event.target.value
    })
}

subIT = (event) =>{
    event.preventDefault();
    this.props.logIn(this.state)
}

    render() {
        return (
            <div>
                <form onSubmit = {this.subIT}>

<input type = "email" value = {this.state.email} onChange= {this.emailHandle} placeholder = "Enter email"/>
<br/>
<br/>
<input type = "password" value = {this.state.password} onChange={this.passwordHandle} placeholder = "Enter password"/>
<br/>
<br/>
<button type = "submit">Submit</button>


                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
return{

    data: state.user.userDATA
}
}


export default connect(mapStateToProps,actions)(Login)