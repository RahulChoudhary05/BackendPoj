const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const saveedPost = await post.save();
    res.json({
      post: saveedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while creating post",
    });
  }
};

exports.getAllPostes = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.json({
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while fetching post",
    });
  }
};
