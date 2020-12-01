// Comment
// Import dependencies
import express from 'express';
import bodyparser from 'body-parser';

// Comment
// Variables declaration
const app = express();

// Comment
// middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

