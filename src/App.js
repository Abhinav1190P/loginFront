import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import signup from './components/signup'
import Login from './components/login'
import View from './components/userview'
import Home from './components/home'

import Auth from './components/auth'

const App=()=> {
  return (
    <div>
<BrowserRouter>
<Switch>
<Route path = "/" exact component = {Auth(Home,null)}/>
<Route path = "/sign" exact component = {Auth(signup,null)}/>
<Route path = "/login" exact component = {Auth(Login,false)}/>
<Route path = "/userview" exact component = {Auth(View,true)}/>
</Switch>
</BrowserRouter>

    </div>
  )
}

export default App;
