import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardInput } from '@/component';
import { SwitchRoutes } from '@/router';
import * as classes from './form-search.styles'

export const FormSearch: React.FC = () => {

   const navigate = useNavigate();

   const [first, setFirst] = React.useState<string>("");
   const [toggleList, setToggleList] = React.useState<boolean>(true);

   const divCardRef = React.useRef<HTMLDivElement>(null);

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
     event: any
   ) => {
     setFirst(event.target.value);
 
    //  console.log(event.target.value);
    //  console.log(first);
    //*  setToggleList(true);
   };

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
     event: any
   ) => {
     event.preventDefault();
     //
     let Searching: string = "";
     if (
       event &&
       event.target &&
       event.target.name &&
       event.target.name.value
     ) {
       Searching = event.target.name.value;
     }
     navigate(`${SwitchRoutes.desc_form}/${Searching}`);
     setFirst("");
   };

   //
   React.useEffect(() => {
     const handleClickOutside = (event: any) => {
       if (
         divCardRef.current &&
         !divCardRef.current.contains(event.target)
       ) {
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
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name Character:</label>
          <input
            onChange={handleChange}
            value={first}
            type="text"
            id="name"
            name="name"
          />
        <div ref={divCardRef}>
        <CardInput first={first} setFirst={setFirst} />
        </div>
      </form>
    </div>
  );
}
