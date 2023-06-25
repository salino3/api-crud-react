import React from 'react';
import {  Characters, GlobalContext, MyState } from '@/core';
import * as classes from './body.styles';

export const Body: React.FC = () => {

 const {state} = React.useContext<MyState>(GlobalContext);

 console.log(state.characters);

  return (
    <div className={classes.root}>
      Hola from Home Component!
      <div className={classes.contenedorList}>
        
        {state &&
          state.characters.slice(0, 5).map((item: Characters) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <img src={item.image} alt="image" />
            </div>
          ))}
          
      </div>
    </div>
  );
}
