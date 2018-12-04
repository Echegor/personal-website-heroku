const express = require('express')
const Mailjet = require('node-mailjet');
const path = require('path')
const PORT = process.env.PORT || 5000

var MailjetClient = Mailjet.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

// console.log("Starting. ENV variables = %o",process.env)

function done(event) {
    console.log("Deployed on port ", PORT)
}

function handlePostResponse(response){
    console.log("Handling post response %o", response)
}

function handleError(response){
    console.log("Handling error %o", response)
}

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    console.log("Browsed home");
    res.sendFile(path.join(__dirname, 'public', 'index.html'), done);
});


app.get('/email/', function (req, res) {
    console.log("Browsed to email. Params ,%o",req.query);
    //TODO validate params

    var sendEmail = MailjetClient.post('send');

    var emailData = {

        'FromEmail': 'web.luis@echegorri.com',
        'FromName': req.query.name,
        'Subject': req.query.subject,
        'Text-part': req.query.content,
        'To' : 'luis.echegorri@gmail.com',
        'Cc' : req.query.theirEmail
        // 'Attachments': [{
        //     "Content-Type": "text-plain",
        //     "Filename": "test.txt",
        //     "Content": "VGhpcyBpcyB5b3VyIGF0dGFjaGVkIGZpbGUhISEK", // Base64 for "This is your attached file!!!"
        // }]
    }

    // res.sendStatus(200);
    console.log("Sending email with data %o",emailData);
    sendEmail
        .request(emailData)
        .then((data) => {
            console.log("Successfully sent email.");
            res.send(data)
        })
        .catch((error) => {
            console.log("An error has occured %o" , error);
            res.sendStatus(500)
        });
});



app.listen(PORT, console.log(`Listening on ${ PORT }`));

process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); // err.message is "foobar"
});





  
