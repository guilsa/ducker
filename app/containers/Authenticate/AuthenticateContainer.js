import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'

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
    console.log(this.props)
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  },
})

function mapStateToProps (state) {
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps)(AuthenticateContainer)
