const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return await School.find({}).populate('classes').populate({ // find all the schools, populate the classes
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      // Populate the professor subdocument when querying for classes
      return await Class.find({}).populate('professor'); // class model from mongoose, find all and populate professor
    },
    professors: async () => {
      return await Professor.find({}); // find professor
    }
  }
};

module.exports = resolvers;
