import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cx } from '@emotion/css';
import { GlobalContext, MyState } from '@/core';
import * as classes from './desc-form.styles';
import { SwitchRoutes } from '@/router';


export const DescFormComponent: React.FC = () => {

  const params = useParams();
  const {createDescription} = React.useContext<MyState>(GlobalContext);
  const navigate = useNavigate();

  const [desc, setDesc] = React.useState<string>("");

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
        <div className={cx(classes.boxBtnSubmit, { [classes.btnDisabled]: !!desc})}>
          <button disabled={!desc} type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
