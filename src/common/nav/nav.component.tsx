import React from 'react';
import { Link } from 'react-router-dom';
import { SwitchRoutes } from '@/router';
import * as classes from './nav.styles';

export const Navbar: React.FC = () => {
  return (
    <nav className={classes.container}>
      <ul>
        <li>
          <Link to={SwitchRoutes.root}>First page list</Link>
        </li>
        <li>
          <Link to={SwitchRoutes.second_page}>Second page list</Link>
        </li>
      </ul>
    </nav>
  );
}
