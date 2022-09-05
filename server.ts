require("dotenv").config()
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
import { dbConnect } from './src/configs/database';
import postsRouter from './src/routers/posts'
import userRouter from './src/routers/users'

dbConnect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use("/api/posts", postsRouter);
app.use("/api/user", userRouter);

app.use(express.static('public'));

app.get

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Served on http://localhost:" + port);
})