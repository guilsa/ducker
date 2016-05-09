import React from 'react'
import { default as ReactModal } from 'react-modal'
import {
  newDuckTop, pointer, newDuckInputContainer,
  newDuckInput, submitDuckBtn, darkBtn } from './styles.css'

const { object, string, func, bool } = PropTypes
Modal.PropTypes = {
  duckText: string.isRequired,
  isOpen: bool.isRequired,
  user: object.isRequired,
  isSubmitDisabled: bool.isRequired,
  openModal: func.isRequired,
  closeModal: func.isRequired,
  updateDuckText: func.isRequired,
}

export default function Modal (props) {
  return (
    <div>Modal</div>
  )
}
