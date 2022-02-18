// Imports
const express = require('express');
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

// Server
const server = express();
server.use(express.json());

// Routers
server.use('/api/projects', projectRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);

// Exports
module.exports = server;