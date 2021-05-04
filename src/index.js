// Importing dependancies
import express from "express";
import database from "./config/database";
import allRoutes from "./routes/principle/routers_index";
import dotenv from "dotenv";
import path from "path";

// Config dotenv
dotenv.config();

// Declaring constants
const port = process.env.PORT || 3000;
const app = express();

// Defining middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection to the database
const testConnection = async () => {
  try {
    database.authenticate();
    console.log("The conection to the database is OK !!!");
  } catch (error) {
    console.error(error);
  }
};
testConnection();

// Config all routes middleware
app.use("/api", allRoutes);

// Defining static folder
app.use(express.static(path.join(__dirname, "public")));

// Catching all unknown endpoints
app.use("**", (req, res) => {
  res.status(404).json({
    status: 404,
    error: {
      message: "Request was not found on the Server",
    },
  });
});

// Config endpoint of welcome guests on our endpoint
app.use("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to my api",
  });
});

// Listening to the port
app.listen(port, () => console.log(`The Server is running at port ${port}`));
