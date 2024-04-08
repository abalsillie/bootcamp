const router = require('express').Router(); // router app
const {
  getSinglePost,
  getPosts,
  createPost,
} = require('../../controllers/postController');

router.route('/').get(getPosts).post(createPost); // router for home route: if GET route run getPost, if POST route run createPost

router.route('/:postId').get(getSinglePost); // for postId route, only a get which runs getSinglePost

module.exports = router;

// routes are modular, business logic is stored inside controller