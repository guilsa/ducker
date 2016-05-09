import { ref } from 'config/constants'

function saveToDucks (duck) {
  const duckId = ref.child('ducks').push().key() // not pushing anything,
                                                // returns a reference to
                                                // specific endpoint
    // spread operator creates a brand new obj
    // which has all of the properties of duck
    // as well as our new duckId on it.
    // So it adds duckId to the object.
  const duckPromise = ref.child(`ducks/${duckId}`).set({...duck, duckId})

  return {
    duckId,
    duckPromise
  }
}

function saveToUsersDucks (duck, duckId) {}

function saveLikeCount (duckId) {}

function saveDuck (duck) {
  const { duckId, duckPromise } = saveToDucks(duck)

  return Promise.all([
    duckPromise,
    saveToUsersDucks(duck, duckId),
    saveLikeCount(duckId),
  ]).then(() => ({...duck, duckId}))
}
