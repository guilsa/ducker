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
