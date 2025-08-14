const WebSocket = require('ws');
const { getListUpdates } = require('../controllers/listController');

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Handle incoming messages if needed
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Broadcast updates to all connected clients
function broadcastUpdate(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

// Listen for updates from the list controller
function listenForListUpdates() {
    getListUpdates((data) => {
        broadcastUpdate(data);
    });
}

module.exports = {
    wss,
    listenForListUpdates,
};