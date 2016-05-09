{
  type: FETCHING_USERS_DUCKS,
  error: 'Error fetching Users Duck Ids',
}

{
  type: FETCHING_USERS_DUCKS_ERROR,
  uid,
}

{
  type: FETCHING_USERS_DUCKS_SUCCESS,
  uid,
  duckIds,
  lastUpdated,
}

{
  type: ADD_SINGLE_USERS_DUCK,
  uid,
  duckId,
}
