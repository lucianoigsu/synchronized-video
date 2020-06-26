var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3100;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req, res) => res.status(204));

io.on('connection', (socket) => {
    console.log("clients",io.sockets.clients().server.engine.clientsCount);

    socket.on('play', () => {
        io.emit('play');
    });
    socket.on('pause', () => {
        io.emit('pause');
    });
    socket.on('current time', (time) => {
        io.emit('set current time',time);
    });
});
