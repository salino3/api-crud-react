import React from 'react';
import { Characters } from '@/core';
import * as classes from './description.styles';

interface Props {
  item: Characters;
}

export const Description: React.FC<Props> = ({item}) => {


  return (
    <div className={classes.desc}>
      <h3 className={classes.descTitle}>Description: </h3>
      <span>{" "}{item?.description} </span>
    </div>
  );
};
