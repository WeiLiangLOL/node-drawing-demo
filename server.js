const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static('./public'));

io.on('connection', (socket) => {
    console.log(`[Client] ${socket.id} connected.`);
    socket.on('disconnect', () =>
        console.log(`[Client] ${socket.id} has left.`));

    socket.on('mouse', data => io.emit('mouse', data));
});

server.listen(80, () => console.log('[Server] Server started!'));