const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const adminRoutes = require('./routes/rt_admin');
const userRoutes = require('./routes/rt_user');
const fifaRoutes = require('./routes/rt_fifa');
const areaRoutes = require('./routes/rt_area');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/FB_FootlowBall')
.then((result) => {
    console.log('connected to FB_FootlowBall');
}).catch((err) => {
    console.error(err);
});

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/fifa', fifaRoutes);
app.use('/area', areaRoutes);

app.listen(8800,() => {
    console.log('FLB Backend is running!!!');
});