const express = require('express');
const app = express();
const userRoute = require('./route/UserRoutes');
require('dotenv').config();
const connectDB = require('./db/connection');
const mongoose = require('mongoose');

app.use(express.json())
app.use(userRoute);
connectDB();

mongoose.connection.once('open', () => {
    console.log('Database Connected!')
    app.listen(process.env.PORT, (req, res) => {
        console.log(`Server running on PORT ${process.env.PORT}`);
    })
})