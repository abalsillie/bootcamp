const router = require('express').Router();
const sequelize = require('../config/connection');
const Dish = require('../models/Dish');

// TODO: Build out this route so that it serializes all of the dish objects that it receives. See the 'get' route below for a hint.
router.get('/', async (req, res) => {
  try {
    // find all dishes
    const dishData = await Dish.findAll();
    console.log(dishData)
    // dishData is an array so .get will not work, use dishData.map, returns new object based on array
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    const dish = dishData.map((dish) => dish.get({ plain: true })); // serialises the data, key value pairs
    // Then, the 'dish' template is rendered and dish is passed into the template.
    res.render('all', dish); // pass this dish to our view
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to get one dish
router.get('/dish/:id', async (req, res) => {
  try{ 
      const dishData = await Dish.findByPk(req.params.id);
      if(!dishData) {
          res.status(404).json({message: 'No dish with this id!'});
          return;
      }
      const dish = dishData.get({ plain: true });
      res.render('dish', dish);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;
