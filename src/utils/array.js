export const group = (array, n, fill = null) => {
  const groups = []
  array.forEach((el, i) => {
    const grp = i % n === 0 ? [] : groups[groups.length - 1]
    grp.push(el)
    if (i % n === 0) {
      groups.push(grp)
    }
  })

  if (fill !== undefined) {
    const lastGroup = groups[groups.length - 1]
    while (lastGroup.length < n) {
      lastGroup.push(fill)
    }
  }
  return groups
}
