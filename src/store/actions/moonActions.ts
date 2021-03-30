import { fetchTodaysMoon } from "../../utils/Api/vineyardApi";
import { Dispatch } from "redux";
import { GET_MOON_INFO, MoonAction } from "../types";

export const fetchTodaysMoonAction = () => async (
  dispatch: Dispatch<MoonAction>
) => {
  try {
    const moonInfo = await fetchTodaysMoon();
    if (moonInfo) {
      dispatch({
        type: GET_MOON_INFO,
        payload: moonInfo,
      });
    } else throw new Error();
    return moonInfo;
  } catch (error) {
    console.log(error);
  }
};
