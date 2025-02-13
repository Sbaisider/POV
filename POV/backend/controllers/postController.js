const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { imageUrl, caption } = req.body;
  try {
    const newPost = new Post({
      user: req.user.id,
      imageUrl,
      caption,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user', ['username']);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};