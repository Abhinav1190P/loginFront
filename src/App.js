import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import signup from './components/signup'
import Login from './components/login'
import View from './components/userview'

const App=()=> {
  return (
    <div>
<BrowserRouter>
<Route path = "/" exact component = {signup}/>
<Route path = "/login" exact component = {Login}/>
<Route path = "/userview" exact component = {View}/>
</BrowserRouter>

    </div>
  )
}

export default App;
