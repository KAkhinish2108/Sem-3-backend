const WebSocket = require("ws");
const wss = new WebSocket.Server({
port: 8080
});
console.log("WebSocket server running on port 8080");

wss.on("connection", (ws) => {
console.log("Client connected");
console.log(wss.clients.size);

    ws.on("message",(message)=>{
        console.log(message);
        ws.send("Server received your message!");
    })
});