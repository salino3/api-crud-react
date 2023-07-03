import React from 'react';
import { Characters, GlobalContext, MyState } from '@/core';
import { Card } from '../card';
import { SwitchRoutes } from '@/router';
import { BtnsPagination, FormSearch } from '@/common';
import * as classes from './body-s-page.styles'

export const BodySndPage: React.FC = () => {

   const { state } = React.useContext<MyState>(GlobalContext);

   const [num, setNum] = React.useState<number>(15);
  
  return (
    <div className={classes.root}>
      Hola from second page list
      <FormSearch />
      <div className={classes.contenedorList}>
        <BtnsPagination
          route={SwitchRoutes.root}
          text="Previus page"
          setNum={setNum}
        />
        {state &&
          state.characters
            .slice(10, num)
            .map((item: Characters) => <Card item={item} key={item.id} />)}
        <BtnsPagination
          route={SwitchRoutes.root}
          text="Previus page"
          setNum={setNum}
        />
      </div>
    </div>
  );
}
