import { gpl } from '@apollo/client';

export const QUERY_USER = gpl`
    query createUser {
        createUser {
            _id
            userName
            email
            password
        }
    }
`;

//make a query for creating new charity?

export const QUERY_DONATION = gpl`
    query makeDonation ($_id: String) {
        Donation(_id: $_id) {
            _id
            typeOfFood
            quantity
        }
    }
`;