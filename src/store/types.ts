import {MoonPhases} from "../Components/MoonIcon/MoonIcon";

export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_DARKMODE = "SET_DARKMODE";
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

export const GET_VINEYARD = "GET_VINEYARD";
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

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const GET_MOON_INFO = "GET_MOON_INFO";
 
//USER

export interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string;
  isLoggedIn: boolean;
  selectedUser: UserProfile | null
}


export interface UserProfile {
  publicProfile: boolean;
  followers: Array<string | null>;
  following: Array<string | null>;
  reviewsGiven: Array<string | null>;
  likedReviews: Array<string | null>;
  likedVineyards: Array<string | null>;
  vistedVineyards: Array<string | null>;
  _id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: number;
  refreshToken: string;
  imageUrl: string;
}

export interface UserError {
  message: string;
}

export interface RegisterLoading {
  type: typeof REGISTER_LOADING;
}
export interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: any;
}
export interface RegisterFail {
  type: typeof REGISTER_FAIL;
}

export type RegisterDispatchTypes =
  | RegisterLoading
  | RegisterSuccess
  | RegisterFail;

export interface ProfileLoading {
  type: typeof PROFILE_LOADING;
}
export interface ProfileSuccess {
  type: typeof PROFILE_SUCCESS;
  payload: UserProfile;
}
export interface ProfileError {
  type: typeof PROFILE_ERROR;
}

export type ProfileDispatchTypes =
  | ProfileLoading
  | ProfileSuccess
  | ProfileError;


  export interface SelectedUserLoading {
    type: typeof SELECTED_USER_LOADING;
  }
  export interface SelectedUserSuccess {
    type: typeof SELECTED_USER_SUCCESS;
    payload: any;
  }
  export interface SelectedUserError {
    type: typeof SELECTED_USER_ERROR;
  }
  
  export type SelectedUserDispatchTypes =
    | SelectedUserLoading
    | SelectedUserSuccess
    | SelectedUserError;
  

// ALERTS

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}

// DARK MODE

export interface DarkModeAction {
  type: typeof SET_DARKMODE;
}

export interface DarkState {
  on: boolean;
}
//REVIEW

export interface ReviewData {
  text: string | null;
  rating: number | null;
}

export interface ReviewLoading {
  type: typeof REVIEW_LOADING;
}
export interface ReviewSuccess {
  type: typeof REVIEW_SUCCESS;
  payload: any;
}
export interface ReviewError {
  type: typeof REVIEW_ERROR;
}

export interface ReviewLikeSuccess {
  type: typeof REVIEW_LIKE_SUCCESS;
}

export type ReviewDispatchTypes =
  | ReviewLoading
  | ReviewSuccess
  | ReviewError
  | ReviewLikeSuccess;

//LOGIN

export interface LoginLoading {
  type: typeof LOGIN_LOADING;
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: UserProfile;
}
export interface LoginFail {
  type: typeof LOGIN_FAIL;
}
export interface LogOut {
  type: typeof LOGOUT;
}
export type LoginDispatchTypes = LoginLoading | LoginSuccess | LoginFail | LogOut;

// //VINEYARDS

export interface VineyardData {
vineyards: Array<VineyardInfo>
}

export interface VineyardInfo {
  images: Array<string | undefined>;
  grapes: Array<string | undefined>;
  styles: Array<string | undefined>;
  likes: Array<string | undefined>;
  reviews: Array<string | undefined>;
  prevEmailed: Array<string | undefined>;
  _id: string;
  name: string;
  address: Address;
  description: string;
  bio: string;
  region: string;
  guidedTours?: boolean;
  guidedTastings?: boolean;
  biodynamic: boolean;
  organic?: boolean;
  email: string;
  website: string;
  rooms: boolean;
  food?: boolean;
  instagram?: string;
  phone: string;
  fullAddress: string;
  details: Details;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Address {
  addressLine1: string;
  addressLine2: string | null;
  locality: string | null;
  city: string;
  region: string;
  country: string;
  postal_code: string;
}

export interface Details {
  latitude: number;
  longitude: number;
  type: string;
  name: string;
  number: number | null;
  postal_code: string | null;
  street: string | null;
  confidence: number;
  region: string;
  region_code: string | null;
  county: string;
  locality: string;
  administrative_area: string;
  neighbourhood: string | null;
  country: string;
  country_code: string;
  continent: string;
  label: string;
  country_module?: CountryModule;
  sun_module?: SunModule;
  map_url?: string;
}

export interface CountryModule {
  latitude: number;
  longitude: number;
  common_name: string;
  official_name: string;
  capital: string;
  flag: string;
  area: number;
  landlocked: boolean;
  independent: boolean;
  global: Global;
  dial: Dial;
  currencies?: Currency[];
  languages: LanguageObj;
}

export interface Currency {
  symbol: string;
  code: string;
  name: string;
  numeric: number;
  minor_unit: number;
}

export interface Dial {
  calling_code: string;
  national_prefix: string;
  international_prefix: string;
}

export interface Global {
  alpha2: string;
  alpha3: string;
  numeric_code: string;
  region: string;
  subregion: string;
  region_code: string;
  subregion_code: string;
  world_region: string;
  continent_name: string;
  continent_code: string;
}
export interface LanguageObj {
  [key: string]: string;
}
//export type LanguageObj  = Record<string, string>;

export interface SunModule {
  rise: Rise;
  set: Rise;
  transit: number;
}

export interface Rise {
  time: number;
  astronomical: number;
  civil: number;
  nautical: number;
}


export interface VineyardState {
  data?: VineyardData;
  loading: boolean;
  error: string;
}



  export interface VineyardLoading {
    type: typeof VINEYARD_LOADING;
  }
  export interface VineyardSuccess {
    type: typeof VINEYARD_SUCCESS;
    payload: VineyardData;
  }
  export interface VineyardError {
    type: typeof VINEYARD_ERROR;
    payload: string

  }
  
  export type VineyardDispatchTypes =
    | VineyardLoading
    | VineyardSuccess
    | VineyardError;

//FAVS
export interface AddToFavs {
  type: typeof ADD_TO_FAVORITES;
}

export interface RemoveFromFavs {
  type: typeof REMOVE_FROM_FAVORITES;
}

export type FavDispatchTypes = AddToFavs | RemoveFromFavs;

// MODEL
export interface ModalState {
  isOpen: boolean,
  type?:string
};

export interface OpenModal {
  type: typeof OPEN_MODAL;
  payload?: {isOpen: boolean; type: string};
}

export interface CloseModal {
  type: typeof CLOSE_MODAL;
  payload?: {isOpen: boolean; type: string};
}

export type ModalDispatchTypes = OpenModal | CloseModal

//Moon

export interface MoonAction{
  type: typeof GET_MOON_INFO;
  payload: MoonData
}

export type MoonPhase = keyof typeof MoonPhases

export interface MoonData{
  resultsDate: AstroTime,
  trajectory: string, 
  moonPhase: MoonPhase,
  zodiac: string;
  house: string;
  bioDay: string;
  nextFruitday: string;
  nextFullMoon: AstroTime
}

export interface AstroTime{
  date: Date,
  ut: number,
  tt: number
}

export interface MoonState {
  moonInfo?: MoonData;
  }



  