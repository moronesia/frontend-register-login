import ServerApi from "../../api/ServerAPI";
import { USER_PROFILE_DATA, SET_LOADING } from "../actionType";

const setProfileData = (userProfile) => {
  return {
    type: USER_PROFILE_DATA,
    payload: {
      user: userProfile,
    },
  };
};

const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

const fetchProfile = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");

    const fetchProfileData = await ServerApi({
      method: "GET",
      url: "/register/me",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    dispatch(setProfileData(fetchProfileData.data));
  } catch (error) {
    console.log(error.response);
  }
};

const userProfileAction = {
  setProfileData,
  setLoading,
  fetchProfile,
};

export default userProfileAction;
