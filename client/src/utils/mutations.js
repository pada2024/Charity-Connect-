import { gpl } from '@apollo/client';

export const CREATE_USER = gpl`
    mutation createUser($username: String!, email: String!, passowrd: String!) {
        createUser(username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`;

export const CREATE_CHARITY = gpl ``

export const CREATE_DONATION = gpl`
    mutation createDonation($typeofFood: String!, $quantity: Int!) {
        createDonation(typeofFood: $typeofFood, quantity: $quantity) {
            _id
            Food
            Quantity
        }
    }
`;