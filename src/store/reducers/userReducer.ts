import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    FavDispatchTypes,
    UserState,
    LoginDispatchTypes,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGIN_LOADING,
    UserData,
    PROFILE_ERROR,
    PROFILE_LOADING,
    PROFILE_SUCCESS,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    SELECTED_USER_LOADING,
    SELECTED_USER_SUCCESS,
    SELECTED_USER_ERROR,
    LOGOUT,
  } from "../types";
  
  const initialState: UserState = {
    profile: null,
    loading: false,
    error: "",
    isLoggedIn: false,
  };
  
//   const initialState = {
//     user: {},
//     selectedUser: {},
//     isAuth: false,
//     loading: false,
//     registerUser: {},
//     error_msg: "",
//   };
  
const userReducer = (
    state = initialState,
    action: LoginDispatchTypes | FavDispatchTypes
  ): UserState => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          profile: action.payload,
          error: "",
        };
      case LOGIN_LOADING:
        return {
          ...state,
          profile: null,
          loading: true,
          error: "",
        };
  
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: "Login was not succesful",
        };
      // case ADD_TO_FAVORITES:
      //   return {
      //     ...state,
      //     profile: {
      //       ...state.profile,
      //       favCities: state.profile.favCities.concat(action.payload),
      //     }
      //   };
      // case REMOVE_FROM_FAVORITES:
      //   return {
      //     ...state,
      //     profile:{
      //       ...state.profile.favCities.filter(
      //         (city: string) => city.id !== action.payload.id //because now adding an object, have to check property
      //       ),
      //   }
      // };
      default:
        return state;
    }
  };

  export default userReducer
  
//   const currentUserReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//       case LOGIN_LOADING:
//         return {
//           ...state,
//           loading: true,
//         };
//       case PROFILE_LOADING:
//         return {
//           ...state,
//           loading: true,
//         };
  
//       case LOGIN_SUCCESS:
//         return {
//           ...state,
//           isAuth: true,
//           user: payload,
//           error_msg: "",
//         };
  
//       case LOGOUT:
//         return {
//           ...state,
//           isAuth: false,
//           user: {},
//           error_msg: "",
//           loading: false,
//         };
//       case PROFILE_SUCCESS:
//         return {
//           ...state,
//           isAuth: true,
//           user: payload,
//           error_msg: "",
//         };
//       case PROFILE_ERROR:
//         return {
//           ...state,
//           error_msg: "Error with editing/deleting profile",
//         };
//       case LOGIN_FAIL:
//         return {
//           ...state,
//           isAuth: false,
//           user: {},
//           error_msg: "Wrong Username and/or Password",
//         };
//       case REGISTER_LOADING:
//         return {
//           ...state,
//           loading: true,
//         };
//       case SELECTED_USER_LOADING:
//         return {
//           ...state,
//           loading: true,
//         };
  
//       case REGISTER_SUCCESS:
//         return {
//           ...state,
//           isAuth: true,
//           user: payload,
//           error_msg: "",
//         };
  
//       case REGISTER_FAIL:
//         return {
//           ...state,
//           isAuth: false,
//           registerUser: {},
//           error_msg: "Error with registration, possible missing required details",
//         };
  
//       case SELECTED_USER_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           selectedUser: payload,
//           error_msg: "",
//         };
//       case SELECTED_USER_ERROR:
//         return {
//           ...state,
//           loading: false,
//           selectedUser: {},
//           error_msg: "Profile not existing",
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default currentUserReducer;