// **`/api/users`**

// * `GET` all users

// * `GET` a single user by its `_id` and populated thought and friend data

// * `POST` a new user:

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

// **BONUS**: Remove a user's associated thoughts when deleted.

// ---

// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list

const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// GET and POST all users
router.route('/').get(getUsers).post(createUser);

// GET, PUT and DELETE users
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST and DELETE friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
