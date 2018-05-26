// WARNING: beware object mutable
import cloneDeep from 'lodash/cloneDeep'
/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
  const subjects = Object.keys(scores)
  const storeResult = cloneDeep(store)

  const addStore = (store, subject, name, score) => ({
    subject, students: [{ name, score }]
  })
  const updateStore = (store, target, subject, name, score) => {
    const updatedTarget = Object.assign(
      { },
      target,
      { subject, students: [...target.students, { name, score }] }
    )
    const targetIndex = store.findIndex((item) => item.subject === subject)
    store[targetIndex] = updatedTarget
    return store
  }

  // call
  for (const subject of subjects) {
    const targetIdx = store.findIndex((item) => item.subject === subject)
    if (targetIdx === -1) {
      storeResult.push(addStore([], subject, name, scores[subject]))
    } else {
      const targetItem = store[targetIdx]
      updateStore(storeResult, targetItem, subject, name, scores[subject])
    }
  }
  return (storeResult)
}

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
  // code here
}

/**
 * @params {Object} store
 */
exports.transformData = store => {
  // code here
}
