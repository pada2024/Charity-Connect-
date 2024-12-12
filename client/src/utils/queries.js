import { gpl } from '@apollo/client';

export const QUERY_USER = gpl`
    query User {
        User {
            _id
            userName
            email
            password
        }
    }
`;

export const QUERY_DONATION = gpl`
    query Donation ($_id: String) {
        Donation(_id: $_id) {
            _id
            userId
            typeOfFood
            quantity
        }
    }
`;