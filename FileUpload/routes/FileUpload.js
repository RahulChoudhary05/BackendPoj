const express = require("express");
const routes = express.Router();
const { localFileUpload } = require("../controllers/fileUplaod");

//routers
// routes.post("/imageUpload", imageUpload);
// routes.post("/videoUpload", videoUpload);
// routes.post("/imageReducerUpload", imageReducerUpload);
routes.post("/localFileUpload", localFileUpload);

module.exports = routes;
