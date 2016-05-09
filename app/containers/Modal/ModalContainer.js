import React from 'react'
import { Modal } from 'components'
import { connect } from 'react-redux'

const ModalContainer = React.createClass({
  render () {
    return (<Modal />)
  },
})

function mapStateToProps ({modal, users}) {
  const duckTextLength = modal.duckText.length
  return {
    user: users[users.authedId] ? users[users.authedId.info] : {},
    duckText: modal.duckText,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength < 140,
  }
}

export default ModalContainer
