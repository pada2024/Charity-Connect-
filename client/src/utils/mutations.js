import { gpl } from '@apollo/client';

export const CREATE_USER = gpl`
    mutation createUser($username: String!, email: String!, password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`;

export const CREATE_DONATION = gpl`
    mutation createDonation($typeofFood: String!, $quantity: Int!) {
        createDonation(typeofFood: $typeofFood, quantity: $quantity) {
            _id
            userId
            Food
            Quantity
        }
    }
`;