import React from 'react';
import { DescFormScene } from '@/scene';
import * as classes from './desc-form.styles';

export const DescFormLayout: React.FC = () => {
  return (
    <div className={classes.root}>
     <DescFormScene />
    </div>
    )
}
