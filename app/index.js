import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from 'config/routes'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' // middleware between action <-> reducer
import { checkIfAuthed } from 'helpers/auth'
import * as reducers from 'redux/modules'

// --- thunk
// Receives `dispatch` in order to dispatch that an event
// occurred and receives `getState` so you can grab something off
// the current state or dispatch actions only under certain state conditions.

// --- createStore ---
// Receives a reducing function
// that returns the next state tree
// given the current state tree
// and an action to handle as its first
// argument.

// --- combineReducers
// When you use combineReducers, the resulting reducer
// calls every child reducer and gathers their returned values
// into a single state object. The new state of your app will be the
// returned value of every reducer that was a key on the object
// you passed to combineReducers.

// ** Indepently manages state **: Allows you to split your reducing function
// into seperate functions, each managing independent parts of the state.

// Takes in one parameter which is an object who's values are different
// reducing functions.

// Since createStore needs a single reducer function, that's what
// combineReducers creates.
const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

// nextState: is an object which contains
// info on the route we're entering
// replace: allows us to redirect to another route
function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store) // check firebase if we're authenticated
  const nextPathName = nextState.location.pathname
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed === true) {
      replace('/feed')
    }
  } else {
    if (isAuthed !== true) {
      replace('/auth')
    }
  }
}

//   --- Provider ---
//   Is the property that react-redux gives us in order to
//   make it so any component who wants to grab information
//   from the store can is called.

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app')
)
