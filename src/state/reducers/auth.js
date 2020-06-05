import { navigate } from '@reach/router';
import getUserDetails from '../../views/Authenticated/http/get_user_details';

const initialState = {
  isAuthenticated: localStorage.getItem('smefund-user'),
  user: {}
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER': {
      localStorage.setItem('smefund-user', JSON.stringify(action.response.data.data));
      navigate(`/`);
      return { ...state, isAuthenticated: true };
    }
    case 'FETCH_USER_DETAILS': {
      const fetchUser = async () => {
        new Promise((resolve) => {
          resolve(getUserDetails());
        }).then((res) => {
          localStorage.setItem('smefund-user-details', JSON.stringify(res));
        });
      };
      fetchUser();
      return state;
    }
    case 'GET_USER_DETAILS': {
      return { ...state, user: action.user };
    }
    default: {
      return state;
    }
  }
};

export default auth;
