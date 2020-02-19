const express = require('express');
const carsRouter = require('./cars/carsRouter.js');
// database access using knex
// const db = require('./data/dbConfig.js');

const server = express();
server.use(express.json());

// server.get("/", (req, res) => {
//     res.send(`
//     <h2> WEB DB CHALLENGE</h2>`)
// });

server.use('/api/cars', carsRouter);



module.exports = server;

