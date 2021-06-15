import React, { Component } from 'react'


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


    render() {
        return (
            <div>
                <form>

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
export default Login