// Comment
// Importing dependencies
import express from 'express';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
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
// Testing connection to the database
const testDbConnection = async () => {
    try {
        database.authenticate();
        console.log('The connection to the database is Ok !!!');
    } catch (error) {
        console.error(error);
    }
};

testDbConnection();
// Comment
// Listening to the port
const port = process.env.port || 3000;
app.listen(port, () => console.log(`The Server is running at port ${port}`));