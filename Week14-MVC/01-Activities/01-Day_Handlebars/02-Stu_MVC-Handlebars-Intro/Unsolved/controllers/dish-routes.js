// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// Controller/ API routes, go between view and model, server between chef and customer
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// homepage
router.get('/', async (req, res) => {
// TODO: Add a comment describing the purpose of the render method
// render template to all.handlebars
  res.render('all');
});

module.exports = router;
