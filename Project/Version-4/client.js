const WebSocket = require("ws");
const screenshot = require("screenshot-desktop");

const SERVER_IP = "172.20.193.9"; // Change this to your server's IP
const SERVER_PORT = 8765;

const ws = new WebSocket(`ws://${SERVER_IP}:${SERVER_PORT}`);

ws.on("open", () => {
    console.log("Connected to server. Sending screen frames...");
    sendScreen();
});

ws.on("close", () => console.log("Connection closed"));
ws.on("error", (err) => console.error("WebSocket Error:", err));

function sendScreen() {
    if (ws.readyState === WebSocket.OPEN) {
        screenshot()
            .then((imgBuffer) => ws.send(imgBuffer))
            .catch((err) => console.error("Screenshot error:", err));
        
        setTimeout(sendScreen, 100); // Send every 100ms (~10 FPS)
    }
}
