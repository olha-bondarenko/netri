import dotenv from 'dotenv';
dotenv.config();
// process.env.MONGO_URI
// const cors = require('cors');
import cors from 'cors'
import express from "express";
import bodyParser from 'body-parser';
import { dbConnect } from './src/configs/database';
import postsRouter from './src/routers/posts'

dbConnect();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use("/api/posts", postsRouter);

app.use(express.static('public'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Served on http://localhost:" + port);
})