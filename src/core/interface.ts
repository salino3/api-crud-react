
interface GET_CHARACTERS {
  type: "GET_CHARACTERS";
  payload: Characters[];
};

export interface CREATE_DESCRIPTION {
  type: "CREATE_DESCRIPTION";
  payload: {
    characterId: number;
    description: string;
  };
}


export type All_Actions = GET_CHARACTERS | CREATE_DESCRIPTION;


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
export const characters: Characters[] = [];


export interface State {
  characters: Characters[];
}

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  getAlbums: (characters: Characters[]) => void;
  createDescription: (characterId: number, description: string) => void;
}






