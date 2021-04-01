const initialState: any = {
    position: {
      center: [51.4, -1.3638],
      zoom: 8,
    },
  }
  
  const mapReducer = (state = initialState, action: any): any => {
    switch (action.type) {
  
      case "SET_POSITION":
        return {
          ...state,
          position: action.payload,
        }
      default:
        return state
    }
  }
  
  export default mapReducer