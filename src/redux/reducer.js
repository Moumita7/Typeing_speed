import { START_TYPEING,FINISH_TYPEING,UPDATE_TYPEING_KEY,CHECK_ACCURACY } from "./actionTypes";

const initialState = {
presentKeys: [],
isTypeing: false,
accuracy: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TYPEING:
      return {
        ...state,
        presentKeys:[],
        isTypeing: true,
      };

    case FINISH_TYPEING:
      return {
        ...state,
        isTypeing: false,
      };

    case UPDATE_TYPEING_KEY:
      return {
        ...state,
        presentKeys: [...state.presentKeys, action.payload],
      };
    case CHECK_ACCURACY:
    
      return {
        ...state,

      };
    default:
      return state;
  }
};

export default reducer;
