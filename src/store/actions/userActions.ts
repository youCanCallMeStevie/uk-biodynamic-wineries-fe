import { getCurrentUserApi, userLoginApi } from "../../utils/Api/authApi";

import { Dispatch } from "redux";
import {
  registerUser,
  fetchByUsername,
  editProfile,
  deleteProfile,
  uploadProfilePicture,
} from "../../utils/Api/userApi";

import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  SELECTED_USER_SUCCESS,
  SELECTED_USER_ERROR,
  SELECTED_USER_LOADING,
  UserProfile,
  LoginDispatchTypes,
  RegisterDispatchTypes,
  ProfileDispatchTypes,
  SelectedUserDispatchTypes,
} from "../types";

import { Credentials } from "../../utils/interfaces";

export const loginAction = (credentials: Credentials) => async (
  dispatch: Dispatch<LoginDispatchTypes>
) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    if (credentials) {
      console.log("credentials", credentials)
      const login = await userLoginApi(credentials);
      console.log(login);
      if (login) {
        const profile = await getCurrentUserApi();
        dispatch({
          type: LOGIN_SUCCESS,
          payload: profile,
        });
      } else throw Error;
    }
    //after producing tokens, get currentuser
    const currentUser = await getCurrentUserApi();
    if (!currentUser) throw Error;
    else
      dispatch({
        type: LOGIN_SUCCESS,
        payload: currentUser,
      });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const registerUserAction = (credentials: Credentials) => async (
  dispatch: Dispatch<RegisterDispatchTypes>
) => {
  try {
    dispatch({
      type: REGISTER_LOADING,
    });
    const details = await registerUser(credentials);
    if (credentials) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: details,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logoutAction = () => async (
  dispatch: Dispatch<LoginDispatchTypes>
) => {
  try {
    dispatch({
        type: LOGOUT,
      });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


export const getCurrentUserAction = () => async (
  dispatch: Dispatch<LoginDispatchTypes>
) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    const currentUser = await getCurrentUserApi();
    console.log("currentUser", currentUser);
    if (currentUser) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: currentUser,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


export const editProfileAction = (data: UserProfile) => async (
  dispatch: Dispatch<ProfileDispatchTypes>
) => {
  try {
    dispatch({
      type: PROFILE_LOADING,
    });
    const profile = await editProfile(data);
    if (profile) {
      dispatch({
        type: PROFILE_SUCCESS,
        payload: profile,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const deleteProfileAction = () => async (
  dispatch: Dispatch<ProfileDispatchTypes>
) => {
  try {
    dispatch({
      type: PROFILE_LOADING,
    });
    const profile = await deleteProfile();
    if (profile.status) {
      dispatch({
        type: PROFILE_SUCCESS,
        payload: profile,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        error_msg: "There was a problem deleting this profile",
      },
    });
  }
};

export const changeProfilePictureAction = (data: string) => async (
  dispatch: Dispatch<ProfileDispatchTypes>
) => {
  try {
    dispatch({
      type: PROFILE_LOADING,
    });
    const picture = await uploadProfilePicture(data);
    if (picture) {
      dispatch({
        type: PROFILE_SUCCESS,
        payload: picture,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        error_msg: "There was a problem updating your profile picture",
      },
    });
  }
};

export const getSelectedUserProfile = (username: string) => async (
  dispatch: Dispatch<SelectedUserDispatchTypes>
) => {
  try {
    dispatch({
      type: SELECTED_USER_LOADING,
    });
    const selectedUser = await fetchByUsername(username);
    if (selectedUser)
      dispatch({
        type: SELECTED_USER_SUCCESS,
        payload: selectedUser,
      });
    else throw Error;
  } catch (err) {
    dispatch({
      type: SELECTED_USER_ERROR,
    });
  }
};
