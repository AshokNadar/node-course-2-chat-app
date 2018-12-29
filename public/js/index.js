var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    // socket.emit('createEmail', {
    //     to: 'abc@a.com',
    //     text: 'hey whats up',
    //     time: '123'
    // });
    socket.emit('createMessage', {
        to: 'abc@a.com',
        text: 'hey whats up',
        createdAt: '123'
    });
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

// socket.on('newEmail', function (email) {
//     console.log(' new  Email', email);
// });


socket.on('newMessage', function (msg) {
    console.log(' new  Message', msg);
});