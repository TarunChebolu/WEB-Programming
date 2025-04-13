const WebSocket = require("ws");
const { createServer } = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8765;

// Create HTTP Server to serve index.html
const server = createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading page");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
});

const wss = new WebSocket.Server({ server });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

wss.on("connection", (ws) => {
    console.log("Client connected (Receiving Screen)");

    ws.on("message", (data) => {
        // Broadcast the screen image to all connected clients (webpage viewers)
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });

    ws.on("close", () => console.log("Client disconnected"));
});

server.listen(PORT);
