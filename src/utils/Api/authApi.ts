//I'm using a modified version of axios imported from authAxios which check for acessToken validity and use refreshToken to refresh it
import axios from "./authAxios";
import {Credentials} from "../interfaces"

const { REACT_APP_API_URI } = process.env;

export const userLoginApi = async (credentials: Credentials) => {
  try {
    const login = await axios.post(
      `${REACT_APP_API_URI}/api/auth/login`,
      credentials
    );
    console.log(login);
    return login.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getCurrentUserApi = async () => {
  try {
    const resp = await axios.get(`${REACT_APP_API_URI}/api/users/me`, {
      withCredentials: true,
    });
    const currentUser = await resp.data.currentUser;
    console.log("currentUser", currentUser)
    return currentUser;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const userLogout = async () => {
  try {
    await axios.post(`${REACT_APP_API_URI}/api/auth/logout`);
  } catch (err) {
    console.log(err);
    return null;
  }
};
