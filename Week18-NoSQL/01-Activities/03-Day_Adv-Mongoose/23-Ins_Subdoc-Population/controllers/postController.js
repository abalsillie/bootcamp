const { Post, User } = require('../models');

module.exports = {
  async getPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSinglePost(req, res) {
    try {
      const post = await Post.findOne({ _id: req.params.postId });

      if (!post) {
        return res.status(404).json({ message: 'No post with that ID' });
      }

      res.json(post);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  // create a new post
  // create post model, posting in req body
  async createPost(req, res) {
    try {
      const post = await Post.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId }, // find post based on user ID
        { $addToSet: { posts: post._id } }, // adds new property into array if doesn't exist
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'Post created, but found no user with that ID' });
      }

      res.json('Created the post 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
