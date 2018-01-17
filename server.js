// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get('/',(req,res) => {
    var headers = req.headers;
    var os = headers['user-agent'];
    os = os.slice( os.indexOf('(') + 1, os.indexOf(')'));
    var language = headers['accept-language'];
    language = language.slice(0, language.indexOf(','))
    var clientIp = req.headers['x-forwarded-for'];
    clientIp = clientIp.slice(0, clientIp.indexOf(','))


    var obj = {"ipaddress": clientIp,"software":os,"language":language, }
    res.send(obj);
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
