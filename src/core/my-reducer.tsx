import { All_Actions, Albums, State } from "./interface";



export const MyReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "GET_ALBUMS":
      return {
        ...state,
        albums: action.payload,
      };
   

    default:
      return state;
  }
};