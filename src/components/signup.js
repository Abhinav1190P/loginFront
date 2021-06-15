import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions/index'



class signup extends Component {

state = {
    name: '',
    lastname: '',
    email: '',
    firstPass: '',
  
}

nameHandle = (event) =>{
event.preventDefault();
this.setState({
    name: event.target.value
})
}
lastnameHandle = (event) =>{
    event.preventDefault();
this.setState({
    lastname: event.target.value
})
}

emailHandle = (event) =>{
    event.preventDefault();
this.setState({
    email: event.target.value
})
}

firstpassHandle = (event) =>{
    event.preventDefault();
this.setState({
    firstPass: event.target.value
})
}
subMit = (event) =>{
    event.preventDefault();
    this.props.singIN(this.state)
}




    render() {
        console.log(this.props.data)
        return (
            <div>
                <form>
<input type = "text" onChange={this.nameHandle} value={this.state.name} placeholder = "Enter name"/>
<br/>
<br/>
<input type = "text" onChange={this.lastnameHandle} value={this.state.lastname} placeholder = "Enter lastname"/>
<br/>
<br/>
<input type = "email" onChange={this.emailHandle} value={this.state.email} placeholder = "Enter email"/>
<br/>
<br/>
<input type = "password" onChange={this.firstpassHandle} value={this.state.firstPass} placeholder = "Enter password"/>
<br/>
<br/>

<br/>
<button type = "submit" onSubmit={this.subMit}>Submit</button>

<p>Already signed in?,then <Link to='/login' >login</Link> </p>

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


export default connect(mapStateToProps,actions)(signup)
