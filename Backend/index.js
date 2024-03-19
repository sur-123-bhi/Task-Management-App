const express = require('express');
const {userRouter} = require('./routes/user.route');
const {connection} = require('./db.connection');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRouter);

app.listen(process.env.PORT, async () => {
    try{
        await connection;
        console.log(`Server running on Port ${process.env.PORT}`);
    } catch(error) {
        console.log(error);
    }
})