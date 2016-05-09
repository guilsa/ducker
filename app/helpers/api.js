function saveToDucks (duck) {}

function saveToUsersDucks (duck, duckId) {}

function saveLikeCount (duckId) {}

function saveDuck (duck) {
  return Promise.all([
    saveToDucks(duck),
    saveToUsersDucks(duck, duckId),
    saveLikeCount(duckId),
  ]).then(() => ({...duck, duckId}))
}
