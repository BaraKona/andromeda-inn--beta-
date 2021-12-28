import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();

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

app.get('/', (req, res) => {
    res.send('Hello Andromeda Inn')
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))