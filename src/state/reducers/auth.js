/* eslint-disable no-unneeded-ternary */
import { navigate } from '@reach/router';

const initialState = {
  isAuthenticated: localStorage.getItem('smefund-user')
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER': {
      localStorage.setItem('smefund-user', JSON.stringify(action.response.data.data));
      navigate(`/`);
      return { ...state, isAuthenticated: true };
    }
    default: {
      return state;
    }
  }
};

export default auth;
