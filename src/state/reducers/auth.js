import { navigate } from '@reach/router';
import { get } from '../../views/utils/easy-storage';

const initialState = {
  user: {},
  tokenSavedLocally: get('token')
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER': {
      localStorage.setItem('smefund-user', JSON.stringify(action.userDetails.data.data));
      localStorage.setItem('token', JSON.stringify(action.response.data.data.token));
      navigate(`/`);
      return { ...state, tokenSavedLocally: true, user: action.userDetails.data.data };
    }
    case 'GET_USER_DETAILS': {
      return { ...state, user: action.user };
    }
    case 'SIGN_OUT':
      return { ...state, tokenSavedLocally: false };
    default: {
      return state;
    }
  }
};

export default auth;
