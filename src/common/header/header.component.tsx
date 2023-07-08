import React from 'react';
import { Navbar } from '../nav';
import * as classes from './header.styles';

export const Header: React.FC = () => {

  return (
    <div className={classes.container}>
      <h1>
        <u>API CRUD React</u>
      </h1>
      <Navbar />
    </div>
  );
}
