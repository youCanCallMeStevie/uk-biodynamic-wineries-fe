import {GET_MOON_INFO, MoonAction, MoonState, } from "../types"
const initialState: MoonState = {
    moonInfo: null,
  };
  
  const moonReducer = (
    state = initialState,
    action:
      MoonAction
  ): MoonState => {
    switch (action.type) {
      case GET_MOON_INFO:
        return {
          ...state,
          moonInfo: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moonReducer;