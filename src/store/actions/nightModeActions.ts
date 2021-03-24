import { SET_DARKMODE, DarkModeAction } from "../types";

export const setDarkMode = (on: boolean): DarkModeAction => {
  return {
    type: SET_DARKMODE,
  };
};
