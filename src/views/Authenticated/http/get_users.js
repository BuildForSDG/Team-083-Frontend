import axios from 'axios';
import { get } from '../../utils/easy-storage';

const getUsers = async (userType) => {
  const client = axios.create();

  client.interceptors.response.use(
    (res) => res,
    (err) => {
      throw new Error(err.response.data.message);
    }
  );

  let response;
  try {
    const options = {
      method: 'get',
      url: `https://smefundapi.herokuapp.com/api/v1/user/${userType}`,
      timeout: 30000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        token: get('token')
      }
    };
    response = await client(options);
  } catch (error) {
    response = error.message;
  }
  return response;
};

export default getUsers;
