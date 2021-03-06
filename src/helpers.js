export const arrayHasValue = (value, otherValues) => {
  for (let i = 0, l = otherValues.length; i < l; i++) {
    if (value === otherValues[i]) {
      return true
    }
  }

  return false
}

export const isValuePresent = (value) => {
  return !/^\s*$/.test(value || '')
}

export default {
  arrayHasValue,
  isValuePresent
}
