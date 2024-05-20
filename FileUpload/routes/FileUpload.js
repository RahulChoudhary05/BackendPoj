const express = require("express");
const routes = express.Router();
const { localFileUpload, imageUpload } = require("../controllers/fileUplaod");

//routers
// routes.post("/videoUpload", videoUpload);
// routes.post("/imageReducerUpload", imageReducerUpload);
routes.post("/localFileUpload", localFileUpload);
routes.post("/imageUpload", imageUpload);

module.exports = routes;
