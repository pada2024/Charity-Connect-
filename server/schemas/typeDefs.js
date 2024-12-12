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
    users: [User]
    foodDonations: [FoodDonation]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String, email: String, password: String): Auth
    createDonation(typeOfFood: String, quantity: Int): User 
    createFoodDonation(foodDonation: FoodDonationData): foodDonationResponse
  }
`;

module.exports = typeDefs;