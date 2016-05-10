const ADD_LISTENER = 'ADD_LISTENER'

function addListener (listenerId) {
  return {
    ADD_LISTENER,
    listenerId
  }
}

export default function listeners (state = {}, action) {
  switch (action.type) {
    case ADD_LISTENER :
      return {
        ...state,
        [action.listenerId]: true,
      }
    default :
      return state
  }
}
