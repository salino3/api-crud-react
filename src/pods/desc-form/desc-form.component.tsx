import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cx } from '@emotion/css';
import { Characters, GlobalContext, MyState } from '@/core';
import * as classes from './desc-form.styles';
import { SwitchRoutes } from '@/router';


export const DescFormComponent: React.FC = () => {

  const params = useParams();
  const {createDescription, getCharacter, state} = React.useContext<MyState>(GlobalContext);
  const { characters, character } = state;

  const navigate = useNavigate();

  React.useEffect(() => {
    getCharacter(Number(params?.id)); 
  }, [params?.id]);


  const [desc, setDesc] = React.useState<string | undefined>(
      characters.find((character: Characters) => character.id === Number(params?.id))?.description
      ?? ""
    );

    
  const handleChange = ( event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(event.target.value);
  };


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(desc) {
        createDescription(Number(params?.id), desc);
        navigate(-1);
      };
  };
    
  return (
    <div className={classes.root}>
      <h1 className={classes.title}> Description Form</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2 className={classes.subTitle}>
         <span>Name:</span> {character && character?.name} <span>- id: </span>
          {character && character?.id}
        </h2>
        <label className={classes.lblDesc} htmlFor="description">
          Description:
        </label>
        <textarea
          className={classes.txtArea}
          onChange={handleChange}
          value={desc}
          placeholder="Text a description.."
          name="description"
          id="description"
        ></textarea>
        <br />
        <div
          className={cx(classes.boxBtnSubmit, {
            [classes.btnDisabled]: !!desc,
          })}
        >
          <button disabled={!desc} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
