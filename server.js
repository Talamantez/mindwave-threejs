const express = require('express');
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

app.use(express.static(__dirname+'/app'));

app.get('/', function(req,res){
  res.sendFile('/Users/roberttalamantez/Documents/Projects/neurosky/mindwaveMobileNpmModule-experiment/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


server.listen(process.env.PORT || 3000);