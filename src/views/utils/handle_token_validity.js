import { get } from './easy-storage';
import getUserDetails from '../Authenticated/http/get_user_details';

const isTokenValid = () => {
  const token = get('token');
  const { _id: id } = get('smefund-user');

  return new Promise((resolve, reject) => {
    getUserDetails(id, token).then((res) => {
      if (typeof res === 'object') {
        return resolve({ data: true });
      }
      return reject(res);
    });
  });
};

export default isTokenValid;
