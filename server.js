
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname));
console.log(""+__dirname);
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname + index.html));
});
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);

