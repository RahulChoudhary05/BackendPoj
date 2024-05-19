const express = require("express");
const router = express.Router();

// Import All Controller
const { likePost, unlikePost } = require("../controllers/LikeController");
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPostes } = require("../controllers/PostController");

// Mapping Create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPostes);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// const { model } = require("mongoose");

// Export
module.exports = router;
