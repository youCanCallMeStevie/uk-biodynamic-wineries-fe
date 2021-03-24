import { DarkState, DarkModeAction, SET_DARKMODE } from "../types";

const initialState: DarkState = {
  on: false,
};

export default (state = initialState, action: DarkModeAction): DarkState => {
  switch (action.type) {
    case SET_DARKMODE:
      return {
        on: true,
      };
    default:
      return state;
  }
};
