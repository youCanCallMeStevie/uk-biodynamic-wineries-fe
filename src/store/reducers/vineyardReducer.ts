import {
  VineyardState,
  VineyardDispatchTypes,
  VINEYARD_LOADING,
  VINEYARD_SUCCESS,
  VINEYARD_ERROR,
} from "../types";

const initialState: VineyardState = {
  loading: false,
  error: "",
};

const vineyardReducer = (
  state = initialState,
  action: VineyardDispatchTypes
): VineyardState => {
  switch (action.type) {
    
    case VINEYARD_LOADING:
      return {
        ...state,
        loading: true,
      };
      case VINEYARD_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case VINEYARD_ERROR:
      return {
        ...state,
        error: "Error loading vineyard details",
        loading: false,
      };
    default:
      return state;
  }
};

export default vineyardReducer;
