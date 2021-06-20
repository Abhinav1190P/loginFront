
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
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

redirect = (rec) =>{
rec.isAuth ? <Redirect to = '/userview'/>:null
}


    render() {

let just = this.props.data
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

{
just ?
this.redirect(just.userDATA)
:null

}


                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
return{

    data: state.user
}
}


export default connect(mapStateToProps,actions)(Login)