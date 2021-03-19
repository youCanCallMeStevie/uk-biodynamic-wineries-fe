export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const VINEYARD_LOADING = "VINEYARD_LOADING";
export const VINEYARD_SUCCESS = "VINEYARD_SUCCESS";
export const VINEYARD_ERROR = "VINEYARD_ERROR";

export const PROFILE_LOADING = "PROFILE_LOADING";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_ERROR = "PROFILE_ERROR";

export const REVIEW_SUCCESS = "REVIEW_SUCCESS";
export const REVIEW_LOADING = "REVIEW_LOADING";
export const REVIEW_ERROR = "REVIEW_ERROR";
export const REVIEW_LIKE_SUCCESS = "REVIEW_LIKE_SUCCESS";

export const SELECTED_USER_LOADING = "SELECTED_USER_LOADING";
export const SELECTED_USER_SUCCESS = "SELECTED_USER_SUCCESS";
export const SELECTED_USER_ERROR = "SELECTED_USER_ERROR";



//USER

export interface UserState{
    profile: UserData | null;
    loading: boolean;
    error: string;
    isLoggedIn: boolean;
  }
  
  
   export interface UserData {
    name: string | null;
    surname:  string  | null;
    username: string | null;
    email: string | null;
    favVineyards: Array<string|undefined>;
   }
  
  
  //  export interface Favorite{
  //   city: string;
  // }
  
  export interface UserError{
    message: string;
  }

  // ALERTS

export interface AlertAction{
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState{
    message: string;
}

//LOGIN

export interface LoginLoading {
  type: typeof LOGIN_LOADING;
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}
export interface LoginFail {
  type: typeof LOGIN_FAIL;
}

export type LoginDispatchTypes = LoginLoading | LoginSuccess | LoginFail;





// //WEATHER

// export interface Weather {
//     description: string;
//     icon: string;
//     id: number;
//     main: string;
//   }
  
//   export interface WeatherData {
//     data: {
//     coord: {
//       lon: number;
//       lat: number;
//     };
//     weather: Weather[];
//     base: string;
//     main: {
//       temp: number;
//       feels_like: number;
//       temp_min: number;
//       temp_max: number;
//       pressure: number;
//       humidity: number;
//     };
//     visibility: number;
//     wind: {
//       speed: number;
//       deg: number;
//     };
//     clouds: {
//       all: number;
//     };
//     dt: number;
//     sys: {
//       type: number;
//       id: number;
//       message: number;
//       country: string;
//       sunrise: number;
//       sunset: number;
//     };
//     timezone: number;
//     id: number;
//     name: string;
//     cod: number;
//   }
//   }
  
  
//   export interface WeatherError{
//       cod: string;
//       message: string;
//   }
  
  
//   export interface WeatherState{
//       data: WeatherData | null;
//       loading: boolean;
//       error: string;
//   }
  
//   interface GetWeatherAction {
//       type: typeof GET_WEATHER;
//       payload: WeatherData;
//   }
  
//   interface SetLoadingAction {
//       type: typeof SET_LOADING;
//   }
  
  
//   interface SetErrorAction {
//       type: typeof SET_ERROR;
//       payload: string
//   }
  
//   export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction

  
//FAVS
export interface AddToFavs {
  type: typeof ADD_TO_FAVORITES
}

export interface RemoveFromFavs {
  type: typeof REMOVE_FROM_FAVORITES
}

export type FavDispatchTypes = AddToFavs | RemoveFromFavs;