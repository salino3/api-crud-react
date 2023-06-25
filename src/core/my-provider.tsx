import React from 'react';
import { GlobalContext, MyReducer } from '.';
import axios from 'axios';

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
 
 console.log("state", state.characters);

  return(
   <GlobalContext.Provider value={{state, dispatch, getAlbums}}>
    {children}
   </GlobalContext.Provider>
   );
}
