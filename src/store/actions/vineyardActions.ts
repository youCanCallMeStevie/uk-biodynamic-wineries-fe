import {
  fetchSavedVineyards,
  getOneVineyard,
  getAllVineyards,
  createVineyard,
  editVineyard,
  deleteVineyard,
  searchVineyards,
  followAVineyard,
  unfollowAVineyard,
} from "../../utils/Api/vineyardApi";
import { Dispatch } from "redux";
import {
  VineyardData,
  VineyardDispatchTypes,
  VINEYARD_LOADING,
  VINEYARD_SUCCESS,
  VINEYARD_ERROR,
  SET_SEARCH_PERFORMED,
  LOGIN_SUCCESS,
} from "../types";

import { SearchQuery } from "../../utils/interfaces";
import { getCurrentUserApi } from "../../utils/Api/authApi";

export const setSearchPerformed = (searchPerformed: boolean) => ({
  type: SET_SEARCH_PERFORMED,
  payload: searchPerformed,
});

export const fetchSavedVineyardsAction = () => async (
  dispatch: Dispatch<VineyardDispatchTypes>
) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const savedVineyards = await fetchSavedVineyards();
    console.log(savedVineyards);
    if (savedVineyards) {
      dispatch({
        type: VINEYARD_SUCCESS,
        payload: savedVineyards,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: VINEYARD_ERROR,
      payload: "There are no saved vineyards for this user",
    });
  }
};
export const getVineyardAction = () => async (
  dispatch: Dispatch<VineyardDispatchTypes>
) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const vineyards = await getAllVineyards();
    if (vineyards) {
      dispatch({
        type: VINEYARD_SUCCESS,
        payload: vineyards,
      });
      return vineyards;
    } else throw Error;
  } catch (error) {
    dispatch({
      type: VINEYARD_ERROR,
      payload: "There are no vineyard",
    });
  }
};

export const getOneVineyardAction = (vineyardId: string) => async (
  dispatch: Dispatch<VineyardDispatchTypes>
) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const vineyard = await getOneVineyard(vineyardId);
    if (vineyard) {
      dispatch({
        type: VINEYARD_SUCCESS,
        payload: vineyard,
      });
    } else throw Error;
  } catch (error) {
    dispatch({
      type: VINEYARD_ERROR,
      payload: "There are no vineyard",
    });
  }
};

export const followVineyardAction = (vineyardId: string) => async (
  dispatch: Dispatch<VineyardDispatchTypes>
) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const vineyard = await followAVineyard(vineyardId);
    if (vineyard) {
      const currentUser = await getCurrentUserApi();
      if (currentUser) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: currentUser,
        });
      }
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: VINEYARD_ERROR,
      payload: "Error following this vineyard",
    });
  }
};

export const unfollowVineyardAction = (vineyardId: string) => async (
  dispatch: Dispatch<VineyardDispatchTypes>
) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const vineyard = await unfollowAVineyard(vineyardId);
    if (vineyard) {
      const currentUser = await getCurrentUserApi();
      if (currentUser) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: currentUser,
        });
      }
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: VINEYARD_ERROR,
      payload: "Error unfollowing this vineyard",
    });
  }
};
export const searchVineyardsAction = (
  query: SearchQuery,
  isSearch = false
) => async (dispatch: Dispatch<VineyardDispatchTypes>) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const vineyards = await searchVineyards(query);
    if (vineyards) {
      dispatch({
        type: VINEYARD_SUCCESS,
        payload: vineyards,
      });
    } else throw new Error();
  } catch (error) {
    console.log(error);
    dispatch({
      type: VINEYARD_ERROR,
      payload: "There are no vineyards that match your crtieria",
    });
  }
};

export const createVineyardAction = () => async (
  dispatch: Dispatch<VineyardDispatchTypes>
) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const vineyard = await createVineyard();
    if (vineyard) {
      dispatch(await getOneVineyard(vineyard._id));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: VINEYARD_ERROR,
      payload: "Error creating this vineyard",
    });
  }
};

export const editVineyardAction = (
  data: VineyardData,
  vineyardId: string
) => async (dispatch: Dispatch<VineyardDispatchTypes>) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const vineyard = await editVineyard(vineyardId, data);
    if (vineyard) {
      dispatch(await getOneVineyard(vineyardId));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: VINEYARD_ERROR,
      payload: "Error editing this vineyard",
    });
  }
};

export const deleteVineyardAction = (vineyardId: string) => async (
  dispatch: Dispatch<VineyardDispatchTypes>
) => {
  try {
    dispatch({
      type: VINEYARD_LOADING,
    });
    const vineyard = await deleteVineyard(vineyardId);
    if (vineyard) {
      dispatch(await getAllVineyards());
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: VINEYARD_ERROR,
      payload: "Error deleting this vineyard",
    });
  }
};

export const setLoading = (): VineyardDispatchTypes => {
  return {
    type: VINEYARD_LOADING,
  };
};

export const setError = (): VineyardDispatchTypes => {
  return {
    type: VINEYARD_ERROR,
    payload: "",
  };
};
