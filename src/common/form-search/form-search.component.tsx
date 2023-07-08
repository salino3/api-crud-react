import React from "react";
import { useNavigate } from "react-router-dom";
import { CardInput } from "@/components";
import { SwitchRoutes } from "@/router";
import * as classes from "./form-search.styles";

export const FormSearch: React.FC = () => {
  const navigate = useNavigate();

  const [searchCharacter, setSearchCharacter] = React.useState<string>("");
  const [toggleList, setToggleList] = React.useState<boolean>(true);

  const divCardRef = React.useRef<HTMLDivElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: any
  ) => {
    setSearchCharacter(event.target.value);
    setToggleList(true);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: any
  ) => {
    event.preventDefault();
    //
    let Searching: string = "";
    if (event && event.target && event.target.name && event.target.name.value) {
      Searching = event.target.name.value;
    }
    navigate(`${SwitchRoutes.desc_form}/${Searching}`);
    setSearchCharacter("");
  };

  //
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divCardRef.current && !divCardRef.current.contains(event.target)) {
        setToggleList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.container}>
      <form className={classes.formSearch} onSubmit={handleSubmit}>
        <label htmlFor="name">Name or ID Character: </label> <br />
        <input
          onChange={handleChange}
          value={searchCharacter}
          type="text"
          id="name"
          name="name"
        />
        &nbsp;
        <button disabled={searchCharacter ? false : true} type="submit">
          Send
        </button>
      </form>
      <div className={classes.divCard} ref={divCardRef}>
        {toggleList && searchCharacter ? (
          <CardInput
            searchCharacter={searchCharacter}
            setSearchCharacter={setSearchCharacter}
          />
        ) : (
          ""
        )}{" "}
      </div>
    </div>
  );
};
