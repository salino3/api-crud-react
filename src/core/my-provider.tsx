import React from 'react';
import axios from 'axios';
import { Characters, GlobalContext, MyReducer } from '.';

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer(MyReducer, { characters: [] });


  const getAlbums = React.useCallback(async () => {

    try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );           
          
        dispatch({
             type: "GET_CHARACTERS",
             payload: response.data.results,
           });
    } catch (error) {
        console.error(error);
    };
  }, []);

 React.useEffect(() => {
  getAlbums();
 }, []);


const createDescription = React.useCallback(
  (characterId: number, description: string) => {
    dispatch({
      type: "CREATE_DESCRIPTION",
      payload: {
        characterId,
        description,
      },
    });
  },
  []
);


 

  return(
   <GlobalContext.Provider value={{state, dispatch, getAlbums, createDescription}}>
    {children}
   </GlobalContext.Provider>
   );
}
