const http = require('http');

const data = JSON.stringify({
  name: 'product'
})

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/products',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const request = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += "" + chunk; })
  res.on('end', () => { console.log('Ответ:', body) })
  res.on('close', () => { console.log('Соединение закрыто') })
})

request.end(data);
