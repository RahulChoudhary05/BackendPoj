//expree framework instance(come)
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware - through body json pass easily
app.use(express.json());

//import api route
const blog = require("./routes/blog");

// Mount
app.use("/api/v1", blog);

//function in db
const connectWithDb = require("./config/database");
//call the function
connectWithDb();

// Start the server
app.listen(PORT, () => {
  console.log(`App is successfully started at port no ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>This is HomePage</h1>");
});
