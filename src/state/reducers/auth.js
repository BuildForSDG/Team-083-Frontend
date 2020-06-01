const initialState = {
  isAuthenticated: false
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER': {
      return { ...state, isAuthenticated: true };
    }
    default: {
      return state;
    }
  }
};

export default auth;
