const router = require('express').Router();
const Dish = require('../models/Dish');

// get one dish without serializing data
router.get('/dish/:id', async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    console.log(dishData)
    res.render('dish', dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one dish with serialized data
router.get('/dish/:id', async (req, res) => {
  try {
    // Search the database for a dish with an id that matches params
    const dishData = await Dish.findByPk(req.params.id);
    console.log(dishData)
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    const dish = dishData.get({ plain: true }); // serialises the data, key value pairs
    // Then, the 'dish' template is rendered and dish is passed into the template.
    res.render('dish', dish); // pass this dish to our view
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
