const url = require('url')

const urlLink = new URL("http://sample.web.com:4000?name=sagar&age=19")

console.log(urlLink.href)
console.log(urlLink.host)
console.log(urlLink.port)

console.log(urlLink.searchParams)