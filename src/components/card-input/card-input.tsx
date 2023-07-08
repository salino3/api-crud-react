import React, { useContext } from "react";
import { Characters, GlobalContext, MyState } from "@/core";
 import * as classes from './card-input.styles';

interface Props {
  searchCharacter: string;
  setSearchCharacter: React.Dispatch<React.SetStateAction<any>>;
}

export const CardInput: React.FC<Props> = (props) => {
  const { searchCharacter, setSearchCharacter } = props;

  const { state } = useContext<MyState>(GlobalContext);
  const { characters } = state;

  const onSearchCard = (event: number): void => {
    setSearchCharacter(event?.toString());
  };

  return (
  <div className={classes.container}>  
      {!characters
        ? "Loading"
        : characters
            .filter((item: Characters) => {
              let searchTerm = "";
              let x: string = searchCharacter?.toLowerCase() || "";
              searchTerm = x || "";
              const thename: string = item?.name?.toLowerCase() || "";
              const theid = item?.id?.toString();

              return (
                searchTerm &&
                (theid?.includes(searchTerm) || thename.includes(searchTerm)) &&
                (thename || theid)
              );
            })
            .slice(0, 10)
            .map((item: Characters) => (
            
                <div
                  onClick={() => onSearchCard(item?.id || 0)}
                  className={classes.divRows}
                  key={item?.id}
                >
                  <b>
                    {item.id} ~ {item?.name}
                  </b>
                </div>
            ))}
    </div>
  );
};
