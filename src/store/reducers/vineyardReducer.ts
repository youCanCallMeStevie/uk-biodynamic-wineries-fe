import {
  VineyardState,
  VineyardDispatchTypes,
  VINEYARD_LOADING,
  VINEYARD_SUCCESS,
  VINEYARD_ERROR,
  VineyardData,
  SET_SEARCH_PERFORMED,
} from "../types";

const initialState: VineyardState = {
  loading: false,
  error: "",
  searchPerformed:false,
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

      case SET_SEARCH_PERFORMED:
      return {
        ...state,
         searchPerformed:action.payload
      };
    default:
      return state;
  }
};

export default vineyardReducer;
