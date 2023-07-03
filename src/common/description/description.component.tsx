import React from 'react';
import { Characters } from '@/core';
import * as classes from './description.styles';

interface Props {
  item: Characters;
}

export const Description: React.FC<Props> = ({item}) => {


  return (
   <div className={classes.desc}>
      <p className={classes.descTitle}>Description: </p>
      <span>&nbsp; {item?.description}  </span>
    </div> 
  );
};
