const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/home', (req, res) => res.sendFile(__dirname, 'public','index.html'))
  .get('*', (req, res) => res.sendFile(__dirname, 'public','index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))