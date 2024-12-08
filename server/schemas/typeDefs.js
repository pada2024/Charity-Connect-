const typeDefs = `
  type User {
    id: Int!
    username: String
    email: String
    foodDonations: [FoodDonation]
  }

  type FoodDonation {
    id: Int!
    userId: ID!
    foodType: String
    quantity: Int
  }

  input FoodDonationData {
    id: Int!
    userId: ID!
    foodType: String
    quantity: Int
  }

  input UserData {
    id: Int!
    username: String
    email: String
    foodDonations: [FoodDonationData]
  }

  type foodDonationResponse {
    success: Boolean
    foodDonation: FoodDonation
  }

  type userResponse {
    success: Boolean
    user: User
  }

  type Auth {
        token: String
        user: User
    }

  type Query {
    getSingleUser: User
    foodDonations: [FoodDonation]
    users: [User]
    user(id: Int!): User
    foodDonation(id: Int!): FoodDonation
  }

  type Mutation {
    createUser(username: String, email: String, password: String): Auth
    login(username: String, email: String, password: String): Auth
    saveDonation(typeOfFood: String, quantity: String): User 
    createFoodDonation(foodDonation: FoodDonationData): foodDonationResponse
  }
`;

module.exports = typeDefs;