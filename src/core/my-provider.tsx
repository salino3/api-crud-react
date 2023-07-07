import React from "react";
import axios from "axios";
import { GlobalContext, MyReducer, initialState } from ".";

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(MyReducer, initialState);

  //
  const getCharacters = React.useCallback(async () => {
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
    }
  }, []);

  React.useEffect(() => {
    getCharacters();
  }, []);

  //
  const getCharacter = React.useCallback(async (id: number) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      dispatch({
        type: "GET_CHARACTER",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  //
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

  //
  const deleteDescription = React.useCallback(
    (characterId: number | undefined, emptyDescription: string) => {
      dispatch({
        type: "DELETE_DESCRIPTION",
        payload: {
          characterId,
          emptyDescription,
        },
      });
    },
    []
  );

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        getCharacters,
        getCharacter,
        createDescription,
        deleteDescription
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
