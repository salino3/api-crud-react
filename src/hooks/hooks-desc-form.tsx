import React from "react";
import { Params, useNavigate } from "react-router-dom";
import { Characters, GlobalContext, MyState } from "@/core";


interface Props {
  params: Readonly<Params<string>>;
  desc: string | undefined;
  setDesc: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const MyHooks = (props: Props) => {
    const { params, setDesc, desc } = props;

      const {createDescription} = React.useContext<MyState>(GlobalContext);

      const navigate = useNavigate();


    const handleSubmitDescForm: React.FormEventHandler<HTMLFormElement> = (
       event: React.FormEvent<HTMLFormElement>
     ) => {
       event.preventDefault();
       if (desc) {
         createDescription(Number(params?.id), desc);
         navigate(-1);
       }
     };

//

     const handleChangeDescForm = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
       setDesc(event.target.value);
     };

  return {
    handleChangeDescForm,
    handleSubmitDescForm
  }
  
}
