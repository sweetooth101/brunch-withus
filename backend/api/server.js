const express = require('express');

const cusRouter = require('../router/customer-router.js');

const server = express();

server.use(express.json());

server.use('/api/customers', cusRouter);

module.exports = server;