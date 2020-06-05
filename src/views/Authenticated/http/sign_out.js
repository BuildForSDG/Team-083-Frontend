import axios from 'axios';

const signOut = async (details) => {
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
      method: 'post',
      url: 'https://smefundapi.herokuapp.com/api/v1/signout',
      timeout: 30000,
      data: details
    };
    response = await client(options);
  } catch (error) {
    response = error.message;
  }
  return response;
};

export default signOut;
