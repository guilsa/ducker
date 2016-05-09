function fetchingDuck () {
  return {
    type: FECTHING_DUCK,
  }
}

function fetchingDuckError (error) {
  return {
    type: FETCHING_DUCK_ERROR,
    error: 'Error fetching Duck',
  }
}

function fetchingDuckSuccess (duck) {
  return {
    type: FETCHING_DUCK_SUCCESS,
    duck,
  }
}

function removeFetching () {
  return {
    type: REMOVE_FETCHING,
  }
}

function addDuck (duck) {
  return {
    type: ADD_DUCK,
    duck,
  }
}

function addMultipleDucks (ducks) {
  return {
    type: ADD_MULTIPLE_DUCKS,
    ducks,
  }
}

const initialState = {
  isFetching: true,
  error: '',
}

function ducks (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DUCK :
      return {
        ...state,
        isFetching: true,
      }
    case ADD_DUCK :
    case FETCHING_DUCK_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_DUCK_SUCCESS :
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck,
      }
    case REMOVE_FETCHING :
      return {
        ...state,
        error: '',
        isFetching: false,
      }
    case ADD_MULTIPLE_DUCKS :
      return {
        ...state,
        ...action.ducks,
      }
    default :
      return state
  }
}
