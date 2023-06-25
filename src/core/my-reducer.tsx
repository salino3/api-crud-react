import { All_Actions, State } from "./interface";



export const MyReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
};