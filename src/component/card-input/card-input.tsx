import React, { useContext } from "react";
import { Characters, GlobalContext, MyState } from "@/core";

interface Props {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<any>>;
}

export const CardInput: React.FC<Props> = (props) => {
  const { first, setFirst } = props;

  const { state } = useContext<MyState>(GlobalContext);
  const {  characters } = state;

  const onSearchCard = (event: number): void => {
    setFirst(event?.toString());
  };

  return (
    <>
      {!characters
        ? "Loading"
        : characters
            .filter((item: Characters) => {
              let searchTerm = "";
              let x: string = first?.toLowerCase() || "";
              searchTerm = x || "";
              const thename: string =  item?.name?.toLowerCase() || "";
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
                className="divRows"
                key={item?.id} >
                <b>
                  {item.id} ~ {item?.name}
                </b>
              </div>
            ))}
    </>
  );
};
