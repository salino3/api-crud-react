import React from 'react';
import { Link } from 'react-router-dom';
import {  Characters, GlobalContext, MyState } from '@/core';
import { Card } from '../card';
import { SwitchRoutes } from '@/router';
import * as classes from './body.styles';

export const Body: React.FC = () => {

 const {state} = React.useContext<MyState>(GlobalContext);

 const [num, setNum] = React.useState<number>(5);


  return (
    <div className={classes.root}>
      Hola from Home Component!
      <div className={classes.contenedorList}>
        <button onClick={() => setNum(10)}>More...</button>{" "}
        <Link to={SwitchRoutes.second_page}>
          <button>Next page</button>
        </Link>
        {state &&
          state.characters
            .slice(0, num)
            .map((item: Characters) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}
