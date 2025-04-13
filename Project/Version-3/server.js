const WebSocket = require("ws");
const { createServer } = require("http");
const screenshot = require("screenshot-desktop");

const PORT = 8765;

// Create an HTTP server (optional, for future expansion)
const server = createServer();
const wss = new WebSocket.Server({ server });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

wss.on("connection", (ws) => {
    console.log("Client connected");

    const sendScreen = async () => {
        try {
            const imgBuffer = await screenshot();
            ws.send(imgBuffer); // Send image as binary data
        } catch (error) {
            console.error("Screenshot error:", error);
        }

        if (ws.readyState === WebSocket.OPEN) {
            setTimeout(sendScreen, 100); // Adjust frame rate (10 FPS)
        }
    };

    sendScreen();

    ws.on("close", () => console.log("Client disconnected"));
});

server.listen(PORT);
