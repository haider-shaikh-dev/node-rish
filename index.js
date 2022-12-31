require('dotenv').config();
var http=require('http');

const express = require('express');
const app = express();
const userRoutes = require('./route/UserRoutes');
app.use(express.json());

app.use(userRoutes);

const server = http.createServer(app);
server.listen(8000);
