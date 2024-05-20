const express = require("express");
const routes = express.Router();

const {imageUpload,videoUpload, imageReducerUpload, loacalFileUpload} = require("../controllers/fileUplaod");

//routers
routes.post("/imageUpload", imageUpload);
routes.post("/videoUpload", videoUpload);
routes.post("/imageReducerUpload", imageReducerUpload);
routes.post("/loacalFileUpload", loacalFileUpload);

module.exports = routes;