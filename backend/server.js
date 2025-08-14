const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = require('./app');
const db = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to the database
db();

// Create HTTP server
const server = http.createServer(app);

// Set up WebSocket server
const io = socketIo(server);

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    // Additional event handlers can be added here
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});