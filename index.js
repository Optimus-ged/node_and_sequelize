// Importing dependancies
import express from "express";
import dotenv from "dotenv";
import database from "./config/database";
import allRoutes from "./routers/principle/routers_index";

// Configuring dotenv
dotenv.config();

// Configuring environment variables
const app = express();
const port = process.env.PORT || 3000;

// Formatting data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing database connection
const testConnection = async () => {
  try {
    database.authenticate();
    console.log("The conection to the database is OK !!!");
  } catch (error) {
    console.error(error);
  }
};
testConnection();

// Config all routes
app.use("/api", allRoutes);

// All unknown routes
app.use("**", (req, res) => {
  req.status(404).json({
    status: 404,
    message: "Request not found on the Server",
  });
});

// Welcome visiters of our endpoint
app.get("/", (res, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to Optimus-ged API",
  });
});

// Listening port
app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
