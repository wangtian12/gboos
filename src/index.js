import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Dashboard from './containers/dashboard/dashboard'


ReactDOM.render((
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));