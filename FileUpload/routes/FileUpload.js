const express = require("express");
const routes = express.Router();
const { localFileUpload, imageUpload, videoUpload } = require("../controllers/fileUplaod");

//routers
routes.post("/localFileUpload", localFileUpload);
routes.post("/imageUpload", imageUpload);
routes.post("/videoUpload", videoUpload);

module.exports = routes;
