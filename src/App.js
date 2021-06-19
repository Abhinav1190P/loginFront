import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import signup from './components/signup'
import Login from './components/login'
import View from './components/userview'
import Auth from './components/auth'
import Home from './components/home'
const App=()=> {
  return (
    <div>
<BrowserRouter>
<Route path = "/" exact component = {Auth(signup,false)}/>
<Route path = "/home" exact component = {Auth(Home,null)}/>
<Route path = "/login" exact component = {Auth(Login,false)}/>
<Route path = "/userview" exact component = {Auth(View,true)}/>
</BrowserRouter>

    </div>
  )
}

export default App;
