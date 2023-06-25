
interface GET_CHARACTERS {
  type: "GET_CHARACTERS";
  payload: Characters[];
};


export type All_Actions = GET_CHARACTERS;


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
}






