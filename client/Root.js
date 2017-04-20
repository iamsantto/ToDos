import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { configureStore } from './store'
import { routes } from './routes'

const initialState = {}

const store = configureStore(initialState)

const browserHistory = useRouterHistory(createHistory)({ basename: '/sample-app' })
const history = syncHistoryWithStore(browserHistory, store)

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history} routes={routes} />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

injectTapEventPlugin()

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
