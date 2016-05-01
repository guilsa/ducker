import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import users from 'redux/modules/users'

const store = createStore(users) // createStore receives a reducing function
                                 // that returns the next state tree
                                 // given the current state tree
                                 // and an action to handle as its first
                                 // argument.

//   Provider -
//   Is the property that react-redux gives us in order to
//   make it so any component who wants to grab information
//   from the store can is called.

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)
