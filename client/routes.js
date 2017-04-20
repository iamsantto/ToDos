import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { App, Dashboard, Login } from './containers'
import { NotFound } from './components'

let redirect = () => {}
let requireAuth = () => {}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute onEnter={redirect} />
    <Route path="login" component={Login} onEnter={redirect}/>
    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    <Route path="*" component={NotFound} />
  </Route>
)

export { routes }
