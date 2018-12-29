const path = require('path');
const express =require('express');
const socketIO = require('socket.io');
const http = require('http');


const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
 io.on('connect',(socket)=>{
console.log('new user connected');

socket.on('disconnect',()=>{
    console.log('user was disconnected ');
})
// socket.emit('newEmail',{
//     from:'a@a.com',
//     text:'hey whats up',
//     time:'123'
// });

socket.emit('newMessage',{
    from:'a@a.com',
    text:'hey whats up',
    time:'123'
});
// socket.on('createEmail', function(newEmail){
//     console.log('  createEmail',newEmail);
// });

socket.on('createMessage', function(newMessage){
    console.log('  createMessage',newMessage);
});
 });
app.use(express.static(publicPath));
//app.set('view engine', 'html');

server.listen(port,()=>{
    console.log('app up and running on port number',port);
    
})