import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  },
  // get access to react-router
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => this.context.router.replace('feed'))
  },
  render () {
    // console.log(this.props.isFetching)
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  },
})

function mapStateToProps (state) {
  // console.log('STATE', state);
  // console.log('userActionCreators', userActionCreators);
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

// Argument `dispatch` is needed in order to be able to
// dispatch a specific action to your reducer functions.
function mapDispatchToProps (dispatch) {
  // bindActionCreators
  // Turns an object whose values are action creators
  // into an object with the same keys, but with every
  // action creator wrapped into a dispatch call
  // so they may be invoked directly.
  return bindActionCreators(userActionCreators, dispatch)
}

// Passes in "dispatch" as a prop to component
export default connect(
  mapStateToProps, // which part of the state the component needs
  mapDispatchToProps // helper for binding a specific dispatch with an object with action creators
)(AuthenticateContainer) // pass in our container
