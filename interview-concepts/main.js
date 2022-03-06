const l = console.log

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12, 13, 14, 15],
]

l([].concat(...arr))
l(arr.flat(2))

function flatten(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr)
  }, [])
}
l(flatten(arr))
