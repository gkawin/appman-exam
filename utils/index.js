// WARNING: beware object mutable
import cloneDeep from 'lodash/cloneDeep'
import { uniq, compact, merge } from './tools'
/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
// NOTE: my opinion, I think it could be better if I refactor code kind of removing the cloneDeep out of this function.
// The clonedeep function is great. But the huge impact for the performance. It will cache in every nest in the object to the other memory address.
exports.updateStudentScore = (store, { name, scores }) => {
  const subjects = Object.keys(scores)
  const storeResult = cloneDeep(store)
  const addStore = (subject, name, score) => ({
    subject, students: [{ name, score }]
  })
  // NOTE: store argument will be mutated.
  const updateStore = (store, target, subject, name, score) => {
    const dupStudent = target.students.some((item) => item.name === name)
    const updatedStudents = target.students.map((item) => (item.name === name)
      ? Object.assign({}, item, { score })
      : item
    )
    const updatedTarget = Object.assign(
      { },
      target,
      { subject, students: compact([...updatedStudents, !dupStudent && { name, score }]) }
    )
    const targetIndex = store.findIndex((item) => item.subject === subject)
    store[targetIndex] = updatedTarget
    return store
  }

  // call
  for (const subject of subjects) {
    const targetIdx = store.findIndex((item) => item.subject === subject)
    if (targetIdx === -1) {
      storeResult.push(addStore(subject, name, scores[subject]))
    } else {
      const targetItem = store[targetIdx]
      updateStore(storeResult, targetItem, subject, name, scores[subject])
    }
  }
  return storeResult
}

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
  return store.map((item) => {
    if (item.subject === subject) {
      const removedStudent = item.students.filter((std) => std.name !== name)
      return Object.assign({}, item, { subject: item.subject, students: removedStudent })
    }
    return item
  })
}

/**
 * @params {Object} store
 */
exports.transformData = store => {
  const students = uniq(merge(store.reduce((acc, item) => {
    if (!acc) return acc
    acc.push((item.students.map((std) => std.name)))
    return acc
  }, [])))

  return students.map((std) => {
    let subjectScore = {}
    store.forEach((item) => {
      subjectScore = Object.assign({}, subjectScore, {
        [item.subject]: item.students.find((val) => val.name === std).score
      })
    })
    return { name: std, ...subjectScore }
  })
}
