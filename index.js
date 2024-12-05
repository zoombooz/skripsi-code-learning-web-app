require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// // For testing the MongoDB connection
// const {run} = require('./config/db');
// run().catch(console.dir);

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "Hello World"});
})

module.exports = app;