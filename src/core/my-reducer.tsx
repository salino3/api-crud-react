import { All_Actions, Characters, State } from "./interface";



export const MyReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "GET_CHARACTER":
      return {
        ...state,
        character: action.payload,
      };
    case "CREATE_DESCRIPTION":
      const updatedCharacters = state.characters.map((character) => {
        if (character.id === action.payload.characterId) {
          return {
            ...character,
            description: action.payload.description,
          };
        }
        return character;
      });
      return {
        ...state,
        characters: updatedCharacters,
      };

    default:
      return state;
  }
};