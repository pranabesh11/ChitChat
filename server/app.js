import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';


const PORT = 8000;
const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin: "http://localhost:5175",
        methods: ["GET", "POST"],
        credentials:true
    }
});
io.on("connection",(socket)=>{
    console.log("user connected ",socket.id);
})



app.get('/',(req,res)=>{
    res.send("Hello World")
})
server.listen(PORT,()=>{console.log(`the app is running on port ${PORT}`)});