const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

function done(event){
	console.log("Deployed on port ",PORT)
}

express()
  .use(express.static(path.join(__dirname, 'public')))
//  .get('/home', (req, res) => res.sendFile(path.join(__dirname, 'public','index.html'),done))
  .get('*', (req, res) => res.sendFile(path.join(__dirname,'public','index.html'),done))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
