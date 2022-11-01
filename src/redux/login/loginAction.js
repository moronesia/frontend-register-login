import ServerApi from "../../api/ServerAPI";
import Swal from "sweetalert2";

import { USER_SET_EMAIL, USER_SET_PASSWORD } from "../actionType";

import userProfileAction from "../../redux/profile/profileAction";

const setEmail = (email) => {
  return {
    type: USER_SET_EMAIL,
    payload: {
      email: email,
    },
  };
};

const setPassword = (password) => ({
  type: USER_SET_PASSWORD,
  payload: {
    password: password,
  },
});

const login = (email, password, navigate) => async (dispatch) => {
  try {
    const loginData = {
      email: email,
      password: password,
    };

    const postData = await ServerApi({
      method: "POST",
      url: "/register/login",
      data: loginData,
    });

    let token = postData.data.token;
    localStorage.setItem("token", token);

    if (postData.data.message === "login sukses") {
      Swal.fire({
        title: "Login Success",
        icon: "success",
        timer: 1500,
      });

      const getDetailUser = await ServerApi({
        method: "GET",
        url: "https://register-login-backend.herokuapp.com/register/me",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      dispatch(userProfileAction.setProfileData(getDetailUser.data.user));
      localStorage.setItem("user", JSON.stringify(getDetailUser.data.user));

      navigate("/profile");
      window.location.reload();
    } else if (postData.data === "password salah") {
      Swal.fire({
        title: "Password Salah",
        icon: "error",
        timer: 1500,
      });
    }
  } catch (error) {
    console.log("error kan ya", error);
  }
};

const userLoginAction = {
  setEmail,
  setPassword,
  login,
};

export default userLoginAction;
