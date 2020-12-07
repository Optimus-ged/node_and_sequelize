// Comment
// Importing dependencies
import express from 'express';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import database from './config/database';
import allRouters from './routers/routers_index';

// Comment
// Config dotenv for environment variables
dotenv.config();

// Comment
// Variables declaration
const app = express();

// Comment
// Middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api', allRouters);

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to my Api'
    });
});



// Comment
// Listening to the port
const port = process.env.port || 3000;
app.listen(port, () => console.log(`The Server is running at port ${port}`));