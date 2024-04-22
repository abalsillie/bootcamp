const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    
    // TODO: Add a new resolver for a single Class object

    professors: async () => {
      return await Professor.find({}).populate('classes');
    },
    class: async (parent, args, contextValue, info) => {
      return await Class.findById(args.id).populate('professor');
    }, // defined resolver in query object, populate professor property
  },
};

module.exports = resolvers;
