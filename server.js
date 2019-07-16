const express = require('express');

const server = express();
const router = require('./accounts/accountRoutes')

server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use('/api/accounts', router)

module.exports = server;