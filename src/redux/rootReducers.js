import { combineReducers } from "redux";

import userRegisterReducer from "./register/registerReducer";
import userLoginReducer from "./login/loginReducer";
import userProfileReducer from "./profile/profileReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
