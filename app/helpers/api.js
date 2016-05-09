import { ref } from 'config/constants'

function saveToDucks (duck) {
  const duckId = ref.child('ducks').push().key() // not pushing anything,
                                                // returns a reference to
                                                // specific endpoint
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
