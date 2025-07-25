import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from "path";

import authRoutes from './routes/auth.routes.js'; 
import messageRoutes from './routes/message.routes.js'; 
import userRoutes from './routes/user.routes.js'; 

import { app, server } from "./socket/socket.js";
import connectToMongoDB from './db/connectToMongoDB.js';


const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // Middleware to parse JSON bodies from req.body
app.use(cookieParser()); // Middleware to parse cookies from req.cookies

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("{*foo}", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});