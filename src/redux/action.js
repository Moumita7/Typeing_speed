import { START_TYPEING,FINISH_TYPEING,UPDATE_TYPEING_KEY,CHECK_ACCURACY } from "./actionTypes";

export const startTypeing = () => ({
    type: START_TYPEING,
  });
  export const finishTypeing = () => ({
    type: FINISH_TYPEING,
  });
  export const updatedTypeingKey = (key) => ({
    type: UPDATE_TYPEING_KEY,
    payload: key,
  });
  export const checkAccuracy = () => ({
    type: CHECK_ACCURACY,
  });
  
