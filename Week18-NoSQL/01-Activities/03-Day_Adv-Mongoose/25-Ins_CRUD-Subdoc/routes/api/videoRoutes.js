const router = require('express').Router();
const {
  getVideos,
  getSingleVideo,
  createVideo,
  updateVideo,
  deleteVideo,
  addVideoResponse,
  removeVideoResponse,
} = require('../../controllers/videoController'); // populating all routes from controllers, videocontroller.js

// /api/videos
router.route('/').get(getVideos).post(createVideo);

// /api/videos/:videoId
router
  .route('/:videoId')
  .get(getSingleVideo)
  .put(updateVideo)
  .delete(deleteVideo); // get, put and delete routes

// /api/videos/:videoId/responses
router.route('/:videoId/responses').post(addVideoResponse); // response

// /api/videos/:videoId/responses/:responseId
router.route('/:videoId/responses/:responseId').delete(removeVideoResponse); // deletion

module.exports = router;
