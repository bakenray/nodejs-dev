const url = require('url')
let urlObj =  {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.google.com',
    port: null,
    hostname: 'www.google.com',
    hash: null,
    search: '?q=node.js',
    query: 'q=node.js',
    pathname: '/',
    path: '/?q=node.js',
}
let urlAdress = url.format(urlObj)
console.log(urlAdress)
  