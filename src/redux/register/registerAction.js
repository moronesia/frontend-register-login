import ServerApi from "../../api/ServerAPI";
import Swal from "sweetalert2";

import {
  USER_REGISTER_RESET_FORM,
  USER_SET_EMAIL,
  USER_SET_PASSWORD,
  USER_SET_FULLNAME,
} from "../actionType";

const resetForm = () => {
  return {
    type: USER_REGISTER_RESET_FORM,
  };
};

const setEmail = (email) => {
  return {
    type: USER_SET_EMAIL,
    payload: {
      email: email,
    },
  };
};

const setPassword = (password) => {
  return {
    type: USER_SET_PASSWORD,
    payload: {
      password: password,
    },
  };
};

const setFullName = (fullName) => {
  return {
    type: USER_SET_FULLNAME,
    payload: {
      fullName: fullName,
    },
  };
};

const register = (email, password, fullName, navigate) => async (dispatch) => {
  try {
    const registerData = {
      email: email,
      password: password,
      name: fullName,
    };

 

    // eslint-disable-next-line
    const postRegisterData = await ServerApi({
      method: "POST",
      mode: "cors",
      url: "/register/",
      data: registerData,
    });

    console.log(postRegisterData)

    if (postRegisterData.status === 200) {
      Swal.fire({
        title: "Register Success",
        icon: "success",
        timer: 1500,
      });

      navigate("/login");
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

const userRegisterAction = {
  resetForm,
  setEmail,
  setPassword,
  setFullName,
  register,
};

export default userRegisterAction;
