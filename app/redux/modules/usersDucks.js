function addSingleUsersDuck (uid, duckId) {
  return {
    type: 'ADD_SINGLE_USERS_DUCK',
    uid,
    duckId,
  }
}

function fetchingUsersDucks (error) {
  return {
    type: FETCHING_USERS_DUCKS,
    error: 'Error fetching Users Duck Ids',
  }
}

function fetchingUsersDucksError (uid) {
  return {
    type: FETCHING_USERS_DUCKS_ERROR,
    uid,
  }
}

function fetchingUsersDucksSuccess (uid, ducksIds, lastUpdated) {
  return {
    type: FETCHING_USERS_DUCKS_SUCCESS,
    uid,
    duckIds,
    lastUpdated,
  }
}

function fetchingUsersDucks (uid, duckId) {
  return {
    type: ADD_SINGLE_USERS_DUCK,
    uid,
    duckId,
  }
}
