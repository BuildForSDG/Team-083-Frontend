import { navigate } from '@reach/router';
import getUserDetails from '../../http/get_user_details';

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
      let userDetails;
      const fetchUser = async () => {
        new Promise((resolve) => {
          resolve(getUserDetails());
        }).then((res) => {
          userDetails = res;
        });
      };
      fetchUser();
      return { ...state, user: userDetails };
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
