import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import projectRoutes from './routes/projects.js'
import { Server } from 'socket.io'
import http from 'http'

const app = express();
const server = http.createServer(app)
const io = new Server(server)


//config dotenv to allow use of env
dotenv.config()
//Need to know what this does
// support parsing of application/json type post data
app.use(express.json({ limit: "30mb", extended: true}));
//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//Routes for different data routes
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/projects', projectRoutes);

// run when a client connects
io.on('connection', (socket) => {
//   console.log('a user is connected')
    const id = socket.handshake.query.id
    socket.join(id)
    socket.on('disconnect', () => {
    // console.log('user disconnected');
    });
    socket.on('comment', msg => {
      console.log('message');
      io.emit('comment', msg);
    });
})
app.get('/', (req, res) => {
    res.send('This is Andromeda Inn')
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(() => server.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))