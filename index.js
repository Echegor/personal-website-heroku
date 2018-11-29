const express = require('express')
const Mailgun = require('mailgun').Mailgun;
const path = require('path')
const PORT = process.env.PORT || 5000

var mailgun = new Mailgun({apiKey: api_key});
var api_key = '4b36ce373becc14ce758e6316f66122c-059e099e-cf85a125';
//Your domain, from the Mailgun Control Panel
var domain = 'luis.echegorri@gmail.com';
//Your sending email address
var from_who = 'luis.echegorri@gmail.com.com';

function done(event) {
    console.log("Deployed on port ", PORT)
}

//docs
//https://www.mailgun.com/blog/how-to-send-transactional-email-in-a-nodejs-app-using-the-mailgun-api
//https://libraries.io/npm/mailgun
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    console.log("Browsed home");
    res.sendFile(path.join(__dirname, 'public', 'index.html'), done);
});
app.get('/email/:mail', function (req, res) {
    console.log("Browsed to email");
    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var data = {
        //Specify email data
        from: from_who,
        //The email to contact
        to: req.params.mail,
        //Subject and text data
        subject: 'Hello from Mailgun',
        html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + req.params.mail + '">Click here to add your email address to a mailing list</a>'
    }
    //Invokes the method to send emails given the above data with the helper library
    console.log("got here");
    mailgun.sendText(from_who, ['luis.echegorri@gmail.com'],
        'This is the subject',
        'This is the text',
        from_who, {},
        function (err) {
            if (err) {
                console.log('Oh noes: ' + err);
                res.sendStatus(500);
            }
        else {
                console.log('Success');
                res.sendStatus(200);
            }
        });
});
app.listen(PORT, console.log(`Listening on ${ PORT }`));

process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); // err.message is "foobar"
});


  
