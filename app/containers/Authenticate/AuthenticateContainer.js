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
    console.log(user);
    this.props.dispatch(userActionCreators.fetchingUser())
    auth().then((user) => {
      // Remember!
      // Always wrap action creators invocations in dispatch
      this.props.dispatch.userActionCreators.fetchingUserSuccess(user.uid, user, Date.now())
      this.props.dispatch.userActionCreators.authUser(user.uid)
    })
    .catch((error) => this.props.dispatch(userActionCreators.fetchingUserFailure(error)))
  },
  render () {
    console.log(this.props.isFetching)
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  },
})

function mapStateToProps (state) {
  console.log('STATE', state);
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps)(AuthenticateContainer)
