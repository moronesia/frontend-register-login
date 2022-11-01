import { USER_SET_PASSWORD, USER_SET_EMAIL } from "../actionType";

const initialState = {
  email: "",
  password: "",
  isAuth: false,
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case USER_SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default userLoginReducer;
