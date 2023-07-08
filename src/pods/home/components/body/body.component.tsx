import React from 'react';
import {  Characters, GlobalContext, MyState } from '@/core';
import { Card } from '@/common/card';
import { SwitchRoutes } from '@/router';
import { BtnsPagination, FormSearch } from '@/common';
import * as classes from './body.styles';

export const Body: React.FC = () => {

 const {state} = React.useContext<MyState>(GlobalContext);

 const [num, setNum] = React.useState<number>(5);


  return (
    <div className={classes.root}>
      <FormSearch />
      <h1 className={classes.title}>First Page (from 1 to 10)</h1>
      <div className={classes.contenedorList}>
        <BtnsPagination
          route={SwitchRoutes.second_page}
          text="Next page"
          setNum={setNum}
        />
        {state &&
          state.characters
            .slice(0, num > 10 ? 10 : num)
            .map((item: Characters) => <Card item={item} key={item.id} />)}
        <BtnsPagination
          route={SwitchRoutes.second_page}
          text="Next page"
          setNum={setNum}
        />
      </div>
    </div>
  );
}
