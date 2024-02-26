const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => { // grabbing route from login
  try { // try block
    const userData = await User.findOne({ where: { email: req.body.email } }); // trying to find one user by finding the email
    if (!userData) { // if user doesn't exit, show error message
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

    const validPassword = await bcrypt.compare( // comparing inputted password vs # password
      req.body.password, // unhashed, coming from request from user
      userData.password // hashed
    );
    if (!validPassword) { // true or false, if false login failed
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    res.status(200).json({ message: 'You are now logged in!' }); // otherwise show yes, logged in
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
