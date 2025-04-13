import asyncio
import websockets
import pyautogui
import io
from PIL import Image
import socket

# Get the local IP address
hostname = socket.gethostname()
server_ip = socket.gethostbyname(hostname)
port = 8765  # Change this if needed

async def send_screen(websocket, path="unused"):
    while True:
        try:
            # Capture screenshot
            screen = pyautogui.screenshot()
            img_io = io.BytesIO()
            screen.save(img_io, format="JPEG", quality=50)  # Compress to reduce size
            frame_data = img_io.getvalue()

            # Send image data
            await websocket.send(frame_data)

            await asyncio.sleep(0.1)  # Adjust frame rate

        except websockets.exceptions.ConnectionClosed:
            print("Client disconnected.")
            break

async def main():
    server = await websockets.serve(send_screen, "0.0.0.0", port)  # Listen on all interfaces
    print(f"WebSocket server running on ws://{server_ip}:{port}")
    await server.wait_closed()

asyncio.run(main())
