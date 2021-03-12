// Comment
// Importing dependencies
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// import allRouters from "./routers/principle/routers_index";
// import database from "./config/database";

// Comment
// Config dotenv for environment variables
dotenv.config();

// Comment
// Variables declaration
const app = express();
const port = process.env.port || 3000;

// Comment
// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/api", allRouters);
app.get("/", function (req, res) {
  res.status(200).json({
    status: 200,
    message: "Welcome to Optimus ged Api",
  });
});

app.use("**", (req, res, next) => {
  res.status(404).json({
    error: {
      message: "The Request was not found on the server",
    },
  });
});

// Comment
// Testing connection to the database
const testConnection = async () => {
  try {
    // database.authenticate();
    console.log("The Connection to the database is Ok :::");
  } catch (er) {
    console.error(er);
  }
};
// testConnection();

// Comment
// Listening to the port
app.listen(port, () => console.log(`The Server is running at port ${port}`));
