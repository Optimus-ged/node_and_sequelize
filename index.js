// Comment
// Importing dependencies
import express from 'express';
import bodyparser from 'body-parser';

// Comment
// Variables declaration
const app = express();

// Comment
// Middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Comment
// Listening to the port
const port = process.env.port || 3000;
app.listen(port, () => console.log(`The Server is running at port ${port}`));