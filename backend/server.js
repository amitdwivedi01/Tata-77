const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors')

const app = express();

const server = http.createServer(app);
const io = socketIo(server,{
  cors: {
    origin: 'http://localhost:5173', // Update with your frontend URL
    methods: ['GET', 'POST'],
  },
  pingTimeout: 80000,
});

app.use(cors());

let data = [
    { name: 'John', companyName: 'ABC Corp', tagId: '001', action: '' },
    { name: 'Alice', companyName: 'XYZ Inc', tagId: '002', action: '' },
    // Add more data as needed
];

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.emit('initialData', data);

    socket.on('performAction', ({name, companyName}) => {
        console.log(name, companyName,"toucheddata");
        const value = {
          name,
          companyName
        }
        io.emit('dataUpdated', value);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(4000, () => {
    console.log('Server running on port 4000');
});