// WARNING: beware object mutable
/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
  const subjects = Object.keys(scores)
  return subjects.map((subject) => {
    const storeData = store.find((item) => item.subject === subject)
    return Object.assign(
      {},
      storeData,
      { students: [...storeData.students, { name, score: scores[subject] }] }
    )
  })
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
