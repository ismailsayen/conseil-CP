// src/store/reducers/userReducer.js

const initialState = {
    userdata: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERDATA':
        return {
          ...state,
          userdata: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  