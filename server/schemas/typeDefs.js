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

  type Query {
    foodDonations: [FoodDonation]
    users: [User]
    user(id: Int!): User
    foodDonation(id: Int!): FoodDonation
  }

  type Mutation {
    createFoodDonation(foodDonation: FoodDonationData): foodDonationResponse
    createUser(user: UserData): userResponse
  }
`;

module.exports = typeDefs;