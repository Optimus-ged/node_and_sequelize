// Importing dependancies and others
import express from "express";
import dotenv from "dotenv";
import database from "./config/database";
import allRoutes from "./routers/principle/routers_index";

// Config dotenv
dotenv.config();

// Config constants variables
const app = express();
const port = process.env.PORT || 3000;

// Config data formatting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conig middlewares
app.use("/api", allRoutes);

// Welcome guest to our web server
app.use("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to Optimus ged Api",
  });
});

// Handling errors when endpoint doesn't match
app.use("**", (req, res) => {
  res.status(404).json({
    status: 404,
    error: {
      message: "The request was not found on the Server",
    },
  });
});

// Config database
const testConnection = async () => {
  try {
    database.authenticate();
    console.log("The connection to the database is Ok !!!");
  } catch (error) {
    console.error(error);
  }
};
testConnection();

// Config port on with app is listening
app.listen(port, () => console.log(`The Server is running at port ${port}`));
