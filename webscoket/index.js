const express=require("express");

const http=require("http");
const {Server}=require("socket.io");


const app=express();
app.use(express.static("public"))
const server=http.createServer(app);


const io=new Server(server);

io.on("connection",(socket)=>{
    console.log("Client Connected",socket.id);
    socket.on("sendMessage",(message)=>{
        console.log(message);
        socket.broadcast.emit("serverReply",message)
    })
})

server.listen(3000,function(){
    console.log("Server Running at port 3000");
    
})