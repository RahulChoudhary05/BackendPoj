const mongoose = require("mongoose");

//all data in envirement(.env) file, that load by dotenv package
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection is Successfully!"))
    .catch((error) => {
      console.log("Issue in DB Connection!");
      console.log(error.message);
      //either 0 or 1. 0 means end the process without any kind of failure and 1 means end the process with some failure {exit the Node.js process with a status code of 1 when that file is executed.}.
      process.exit(1);
    });
};

module.exports = dbConnect;
