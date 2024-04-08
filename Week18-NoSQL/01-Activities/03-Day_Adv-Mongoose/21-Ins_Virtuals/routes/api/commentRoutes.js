const router = require('express').Router();
const {
  getComments,
  getSingleComment,
  createComment,
} = require('../../controllers/commentController');

// for home route, if GET route run getComments, if POST route, run createComment
// getComments and createComments come from controllers
router.route('/').get(getComments).post(createComment);

// /api/comments/:commentId
router.route('/:commentId').get(getSingleComment);

module.exports = router;

// all syntax is express
