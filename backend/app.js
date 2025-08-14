const express = require('express');
const mongoose = require('mongoose');
const listRoutes = require('./routes/listRoutes');
const dbConfig = require('./config/db');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
dbConfig();

// Set up routes
app.use('/api/lists', listRoutes);

// WebSocket connection handling
wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    // Additional WebSocket event handling can be added here
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});