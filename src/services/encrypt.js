import sha512 from 'js-sha512'

export default ({domain, salt, length}) => {
  if (!domain || !salt || length <= 2) {
    return ''
  }
  let ret = Array.apply(null, {length: 3})
    .reduce(value => sha512(value + salt), domain)
    .substr(0, length)
    .split('')
  ret[0] = isNaN(ret[0]) ? ret[0].toUpperCase() : String.fromCharCode(65 + parseInt(ret[0]))
  ret[1] = isNaN(ret[1]) ? ret[1].toLowerCase() : String.fromCharCode(97 + parseInt(ret[1]))
  ret[2] = isNaN(ret[2]) ? ret[2].charCodeAt(0) % 10 : ret[2]
  return ret.join('')
}
