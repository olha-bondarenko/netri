require("dotenv").config()
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
import path from 'path';
import { dbConnect } from './configs/database';
import postsRouter from './routers/posts'
import userRouter from './routers/users'

dbConnect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/api/posts", postsRouter);
app.use("/api/user", userRouter);

app.use(express.static('frontend/build'));

app.get('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'))
})
const port = process.env.PORT || 5000;
app.listen(port, err => {
    if(err) throw err;
    console.log("Served on http://localhost:" + port);
})