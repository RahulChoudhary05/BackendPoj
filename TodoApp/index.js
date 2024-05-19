// "C:\Users\DELLJ\OneDrive\Pictures\Screenshots\Screenshot 2024-04-10 221114.png", full explain 

const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for Todo API
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/vi", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server is running successfully at ${PORT}`);
})

//connection to the datbase
const dbConnect = require("./config/database");
dbConnect();

//default route, just run on page 
app.get("/", (req,res) => {
    res.send(`<h1> This is the home page body! </h1>`)
})