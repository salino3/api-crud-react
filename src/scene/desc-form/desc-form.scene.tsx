import React from 'react';
import { DescFormComponent } from '@/pods';
import * as classes from './desc-form.styles';

export const DescFormScene: React.FC = () => {
  return (
    <div className={classes.root}>
        <DescFormComponent />
    </div>
  )
}
