
interface GET_CHARACTERS {
  type: "GET_CHARACTERS";
  payload: Characters[];
}

interface GET_CHARACTER {
  type: "GET_CHARACTER";
  payload: Characters;
}

interface CREATE_DESCRIPTION {
  type: "CREATE_DESCRIPTION";
  payload: {
    characterId: number;
    description: string;
  };
}

interface DELETE_DESCRIPTION {
  type: "DELETE_DESCRIPTION";
  payload: {
    characterId: number | undefined;
    emptyDescription: string;
  };
}

export type All_Actions =
  | GET_CHARACTERS
  | GET_CHARACTER
  | CREATE_DESCRIPTION
  | DELETE_DESCRIPTION;


//
export interface Characters {
  id?: number;
  name?: string;
  status?: string;
  type?: string;
  gender?: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
  description?: string;
}


//
export interface State {
  characters: Characters[];
  character?: Characters;
}

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  getCharacters: (characters: Characters[]) => Promise<void>;
  getCharacter: (id: number) => Promise<void>;
  createDescription: (characterId: number, description: string) => void;
  deleteDescription: (characterId: number | undefined, emptyDescription: string) => void;
}

// Consts
export const initialState: State = {
  characters: [],
  character: {},
};
