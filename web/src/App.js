import './App.less';
import React, { Component } from 'react'
import {Switch,Route,Redirect,BrowserRouter as Router} from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'
import NotFound from './views/errors/404'
import Forbid from './views/errors/402'
import AuthCallback from './views/Login/AuthCallback'

export default class App extends Component {
  getRemSize = ()=>{
    let whdef = 100/1920
    let wW = window.innerWidth
    let rem = wW * whdef
    document.documentElement.style.fontSize = rem + 'px'
  }

  componentDidMount = ()=>{
    window.resize = ()=>{
      this.getRemSize()
    }
    this.getRemSize()
  }

  render() {
    return (
      <div id="App">
        <Router>
          <Switch>
            <Route path={"/authcallback"} component={AuthCallback}></Route>
            <Route path={"/login"} component={Login} exact></Route>
            <Route path={"/home"} component={Home}></Route>
            <Route path={"/402"} component={Forbid} exact></Route>
            <Redirect to={'/login'}></Redirect>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

