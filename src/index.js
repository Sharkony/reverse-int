module.exports = function reverse (n) {
  let strNum = Math.abs(n).toString()
  let revStr = Array.from(strNum).reverse().join('')

  return revStr
}
