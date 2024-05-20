const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

//db connection
require("./config/database").connect();

//cloud connection
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//routes imort and mount
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
