const { Charity, Donation, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
  },

    donations: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return  Donation.find(params);
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      console.log(18, username,email,password)
      return await User.create({ username, email, password });
    },

    createDonation: async (parent, { _id, Food, Quantity }) => {
      const Donation = await Charity.create(_id, Food, Quantity);
      return Donation;
    },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw AuthenticationError;
    //   }
    // },
  }
};

module.exports = resolvers