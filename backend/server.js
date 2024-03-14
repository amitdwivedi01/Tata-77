const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// const server = http.createServer(app);
// const io = socketIo(server,{
//   cors: {
//     origin: 'http://localhost:5173', // Update with your frontend URL
//     methods: ['GET', 'POST'],
//   },
//   pingTimeout: 80000,
// });
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
// let data = [
//     { name: 'John', companyName: 'ABC Corp', tagId: '001', action: '' },
//     { name: 'Alice', companyName: 'XYZ Inc', tagId: '002', action: '' },
//     // Add more data as needed
// ];

// io.on('connection', (socket) => {
//     console.log('Client connected');

//     socket.emit('initialData', data);

//     socket.on('performAction', ({name, companyName}) => {
//         console.log(name, companyName,"toucheddata");
//         const value = {
//           name,
//           companyName
//         }
//         io.emit('dataUpdated', value);
//     });

//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });
let data;
// POST API to handle incoming JSON data
app.post('/postData', (req, res) => {
  data = req.body; // Get the JSON data from request body
  res.json({ message: 'Data received successfully', data});
});

// GET API to send a sample object
app.get('/getData', (req, res) => {  
  res.json(data);
});

app.listen(PORT, () => {
    console.log('Server running on port 4000');
});