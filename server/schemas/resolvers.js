const users = [
  { id: 1, username: 'johnsmith', email: 'john.smith@example.com', password: 'password123' },
  { id: 2, username: 'xanderr', email: 'xander.r@example.com', password: 'password456' },
  { id: 3, username: 'gracec', email: 'grace.c@example.com', password: 'password789' },
];

module.exports = {
  Query: {
    users: () => users,
    user: (parent, args) => {
      return users.find((user) => user.id === args.id);
    },
  },

  Mutation: {
    createUser: (parent, newUser) => {
      console.log('newUser', newUser);

      // Create a new user object with username, email, and password
      const userWithDetails = {
        id: users.length + 1, // Assign a new ID
        username: newUser.user.username,
        email: newUser.user.email,
        password: newUser.user.password, // Note: In a real application, you should hash the password
      };

      users.push(userWithDetails);
      const result = {
        success: true,
        user: userWithDetails,
      };
      console.log(userWithDetails);
      return result;
    },
  },
};