// LoginController.js
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export const useLoginController = () => {
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleLogin = async (email, password) => {
    try {
      const mutationResponse = await login({
        variables: { email, password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
      throw e; // You can throw the error to handle it in the component
    }
  };

  return { handleLogin, error };
};