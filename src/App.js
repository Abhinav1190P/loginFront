import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import signup from './components/signup'
import Login from './components/login'
import View from './components/userview'

import Home from './components/home'
const App=()=> {
  return (
    <div>
<BrowserRouter>
<Switch>
<Route path = "/" exact component = {Home}/>
<Route path = "/sign" exact component = {signup}/>
<Route path = "/login" exact component = {Login}/>
<Route path = "/userview" exact component = {View}/>
</Switch>
</BrowserRouter>

    </div>
  )
}

export default App;
