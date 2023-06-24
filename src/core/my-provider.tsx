import React from 'react';
import { GlobalContext, MyReducer, Albums, albums } from '.';
import axios from 'axios';

interface Props {
  children: JSX.Element | JSX.Element[];
//   children: React.ReactNode;
};

export const MyProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer(MyReducer, { albums: [] });


  const getAlbums = React.useCallback(async () => {

    try {
        
        const response = await axios
           .get("https://jsonplaceholder.typicode.com/photos")
            
           dispatch({
               type: "GET_ALBUMS",
               payload: response.data,
             });
    } catch (error) {
        console.error(error);
    };
  }, []);

 React.useEffect(() => {
  getAlbums();
 }, []);
 
 console.log("state", state);

  return(
   <GlobalContext.Provider value={{state, dispatch, getAlbums}}>
    {children}
   </GlobalContext.Provider>
   );
}
