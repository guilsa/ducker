import React from 'react'
import { Router, hashHistory, IndexRoute, Route } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Router path='/' component={MainContainer}>
        <Route path='auth' component={AuthenticateContainer} />
        <Route path='feed' component={FeedContainer} />
        <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
)

export default routes
