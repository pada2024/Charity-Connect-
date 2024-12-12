const { Charity, Donation, User } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
  },

    donations: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return  Donation.find(params);
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      return await User.create({ username, email, password });
    },

    createDonation: async (parent, { _id, Food, Quantity }) => {
      const Donation = await Charity.create(_id, Food, Quantity);
      return Donation;
    },
  },
};