import axios from "axios";
const { REACT_APP_API_URI } = process.env;
import { Credentials } from "../interfaces";
import { UserProfile } from "../../store/types";

export const registerUser = async (credentials: Credentials) => {
  try {
    const user = await axios.post(
      `${REACT_APP_API_URI}/api/users/register`,
      credentials,
      {
        withCredentials: true,
      }
    );

    console.log(user);

    return user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchAllUsers = async () => {
  try {
    const users = await axios.get(`${REACT_APP_API_URI}/api/users`, {
      withCredentials: true,
    });
    return users.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchByUsername = async (username: string) => {
  try {
    const user = await axios.get(`${REACT_APP_API_URI}/api/users/${username}`, {
      withCredentials: true,
    });
    return user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const searchUser = async (query: string) => {
  try {
    const user = await axios.get(
      `${REACT_APP_API_URI}/api/users/search?q=${query}`,
      {
        withCredentials: true,
      }
    );
    return user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// export const followUser = async userId => {
//   try {
//     const user = await axios.post(
//       `${REACT_APP_API_URI}/api/users/follow/${userId}`,
//       {
//         withCredentials: true,
//       }
//     );
//     return user.data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

// export const unfollowUser = async userId => {
//   try {
//     const user = await axios.put(
//       `${REACT_APP_API_URI}/api/users/unfollow/${userId}`,
//       {
//         withCredentials: true,
//       }
//     );
//     return user.data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

export const editProfile = async (data: UserProfile) => {
  try {
    const user = await axios.put(`${REACT_APP_API_URI}/api/users/me`, data, {
      withCredentials: true,
    });
    return user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteProfile = async () => {
  try {
    const user = await axios.delete(`${REACT_APP_API_URI}/api/users/me`, {
      withCredentials: true,
    });
    return user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const uploadProfilePicture = async (file: string) => {
  try {
    const user = await axios.post(
      `${REACT_APP_API_URI}/api/users/upload`,
      file,
      {
        withCredentials: true,
      }
    );
    return user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
