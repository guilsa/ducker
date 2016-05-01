import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import users from 'redux/modules/users'
import thunk from 'redux-thunk' // middleware between action <-> reducer

// --- createStore ---
// Receives a reducing function
// that returns the next state tree
// given the current state tree
// and an action to handle as its first
// argument.
const store = createStore(users, applyMiddleware(thunk))

//   --- Provider ---
//   Is the property that react-redux gives us in order to
//   make it so any component who wants to grab information
//   from the store can is called.

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)
