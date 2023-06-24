
interface GET_ALBUMS {
  type: "GET_ALBUMS";
  payload: Albums[];
};


export type All_Actions = GET_ALBUMS;


export interface Albums {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

//
export const albums: Albums[] = [];


export interface State {
    albums: Albums[];
}

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  getAlbums: (albums: Albums[]) => void;
}






