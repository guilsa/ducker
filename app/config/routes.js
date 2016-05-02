import React from 'react'
import { Router, hashHistory, IndexRoute, Route } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'

// -- onEnter callback --
// each route can have an onEnter callback
// before it transitions to a route

export default function getRoutes (checkAuth) {
    return (
      <Router history={hashHistory}>
        <Router path='/' component={MainContainer}>
            <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
            <Route path='feed' component={FeedContainer} onEnter={checkAuth} />
            <IndexRoute component={HomeContainer} onEnter={checkAuth} />
        </Router>
      </Router>
    )
}
