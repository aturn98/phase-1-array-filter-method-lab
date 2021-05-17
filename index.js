function findMatching(array, name) {
    return array.filter((x) => x.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array, string) {
    return array.filter((x) => x[0] === string[0])
}

function matchName(array, name) {
   return array.filter((x) => x.name === name)
}
