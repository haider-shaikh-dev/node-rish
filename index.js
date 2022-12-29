var http=require('http');
const express = require('express');
const app = express();
const userRoutes = require('./route/UserRoutes');
app.use(express.json());

app.use(userRoutes);


const server = http.createServer(app);
server.listen(8000);


// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<h1>Hello Nodejs App!</h1>');
// }).listen(8000)