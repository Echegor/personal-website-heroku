const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('*', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//const express = require('express');
//const path = require('path');

//const app = express();

// Serve only the static files form the dist directory

//app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + index.html));
});

//var server = app.listen(process.env.PORT || 8080, function () {
//    var port = server.address().port;
//    console.log("App now running on port", port);
//});