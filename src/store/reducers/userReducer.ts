import {
  // ADD_TO_FAVORITES,
  // REMOVE_FROM_FAVORITES,
  FavDispatchTypes,
  UserState,
  LoginDispatchTypes,
  ProfileDispatchTypes,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  PROFILE_ERROR,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  RegisterDispatchTypes,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  SelectedUserDispatchTypes,
  SELECTED_USER_LOADING,
  SELECTED_USER_SUCCESS,
  SELECTED_USER_ERROR,
  LOGOUT,
} from "../types";

const initialState: UserState = {
  profile: undefined,
  loading: false,
  error: "",
  isLoggedIn: false,
  selectedUser: undefined,
};

const userReducer = (
  state = initialState,
  action:
    | LoginDispatchTypes
    | FavDispatchTypes
    | ProfileDispatchTypes
    | SelectedUserDispatchTypes
    | RegisterDispatchTypes
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
        profile: undefined,
        loading: true,
        error: "",
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: "Login was not succesful",
      };

    case LOGOUT:
      return {
        ...state,

        isLoggedIn: false,
        profile: undefined,
        error: "",
        loading: false,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        profile: action.payload,
        error: "",
      };
      case PROFILE_LOADING:
        return {
          ...state,
          loading: true,
        };
    case PROFILE_ERROR:
      return {
        ...state,
        error: "Error with editing/deleting profile",
      };
    case SELECTED_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        profile: action.payload,
        error: "",
      };

    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        profile: undefined,
        error: "Error with registration, possible missing required details",
      };

    case SELECTED_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedUser: action.payload,
        error: "",
      };
    case SELECTED_USER_ERROR:
      return {
        ...state,
        loading: false,
        selectedUser: undefined,
        error: "Profile not existing",
      };
    default:
      return state;
  }
};

export default userReducer;
