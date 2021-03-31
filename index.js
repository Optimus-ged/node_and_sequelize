// Import all importants dependancies
import express from 'express';
import dotenv from 'dotenv';
import database from './config/database';
import allRoutes from './routers/principle/routers_index';

// Config dotenv
dotenv.config();

// Creating some importants constants
const app = express();
const port = process.env.PORT || 3000;

// Formating data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Config all routes
app.use("/api", allRoutes);

// Config database
const testConnection = async(req, res)=>{
  try {
    database.authenticate();
    console.log("Database connection is Ok !!!");
  } catch (error) {
    console.error(error);
  }
};
testConnection();

// Catching all unknown endpoints
app.use("**", (req, res)=>{
  res.status(404).json({
    status : 404,
    message : "Request was not found on the server"
  });
});

// Welcome guests on our web server
app.get("/", (req, res)=>{
  res.status(200).json({
    status : 200,
    message : "Welcome to Optimus ged API !!!"
  });
});

// Endpoint listening to the port
app.listen(port, ()=>console.log(`The server is running at port ${port}`));