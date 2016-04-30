import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { connect } from 'react-redux'

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  },
  handleAuth () {
    auth().then((user) => {
      console.log('Auth User', user)
    })
  },
  render () {
    return (
      <Authenticate
        isFetching={false}
        error=''
        onAuth={this.handleAuth} />
    )
  },
})

export default connect()(AuthenticateContainer)
