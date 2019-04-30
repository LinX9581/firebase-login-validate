var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});


http.listen(port, function() {
    console.log('listening on *:' + port);
});