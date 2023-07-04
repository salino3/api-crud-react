import React from 'react';
import { useParams } from 'react-router-dom';
import * as classes from './desc-form.styles';


export const DescFormComponent: React.FC = () => {

  const params = useParams();


  const [desc, setDesc] = React.useState<string>("");

  const handleChange = ( event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(event.target.value);
  };


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    console.log(desc);
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
        <div className={classes.boxBtnSubmit}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
