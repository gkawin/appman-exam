/* eslint-disable no-labels */
export function uniq (arr) {
  // Set iterator is store the unique item. and the performance better than filter and indexOf.
  if (arr.length <= 1) return arr
  const len = arr.length
  let seen = new Set()
  let result = []
  outer:
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    if (seen.has(item)) continue outer
    seen.add(item)
    result.push(item)
  }
  return result
}

export function compact (array) {
  let resIndex = 0
  const result = []
  if (array == null) {
    return result
  }
  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export function merge (items) {
  const arr = [].concat.apply([], items)
  return arr
}
