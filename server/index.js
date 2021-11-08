import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

//Need to know what this does
// support parsing of application/json type post data
app.use(express.json({ limit: "30mb", extended: true}));
//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//Routes for different data routes
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://andromedainn:andromedainn123@cluster0.ubezw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))