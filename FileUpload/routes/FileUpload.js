const express = require("express");
const routes = express.Router();
const { localFileUpload, imageUpload, videoUpload, imageSizeReducer } = require("../controllers/fileUplaod");

//routers
routes.post("/localFileUpload", localFileUpload);
routes.post("/imageUpload", imageUpload);
routes.post("/videoUpload", videoUpload);
routes.post("/imageSizeReducer", imageSizeReducer);

module.exports = routes;
