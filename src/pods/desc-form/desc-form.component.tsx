import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { cx } from '@emotion/css';
import { Characters, GlobalContext, MyState } from '@/core';
import { MyHooks } from '@/hooks';
import { Header, Footer } from "@/common";
import * as classes from './desc-form.styles';


export const DescFormComponent: React.FC = () => {

 const navigate = useNavigate();

  const params = useParams();
  const { getCharacter, state} = React.useContext<MyState>(GlobalContext);
  const { characters, character } = state;
  
  const [desc, setDesc] = React.useState<string | undefined>(
    characters.find((character: Characters) => character.id === Number(params?.id))?.description
    ?? "");
  
  const { handleChangeDescForm, handleSubmitDescForm } = MyHooks({ params, desc, setDesc });


  React.useEffect(() => {
    getCharacter(Number(params?.id)); 
  }, [params?.id]);
    

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <h1 className={classes.title}> Description Form</h1>
        <Link
          to={"#"}
          className={classes.linkBack}
          onClick={() => navigate(-1)}
        >
          Go back
        </Link>
        <form onSubmit={handleSubmitDescForm} className={classes.form}>
          <h2 className={classes.subTitle}>
            <span>Name:</span> {character && character?.name}{" "}
            <span>- id: </span>
            {character && character?.id}
          </h2>
          <label className={classes.lblDesc} htmlFor="description">
            Description:
          </label>
          <textarea
            className={classes.txtArea}
            onChange={handleChangeDescForm}
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
      <Footer />
    </div>
  );
}
