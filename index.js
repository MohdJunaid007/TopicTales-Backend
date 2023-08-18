import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();
// const path = require('path')// doing this for hosting
//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

// for hosting
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

const PORT = process.env.PORT|| 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));