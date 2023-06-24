import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { HomeLayout } from '../layouts';
import { SwitchRoutes } from './interface';

export const AppRouter: React.FC = () => {
  return (
    <>
     <Routes>
        <Route path={SwitchRoutes.root} element={<HomeLayout />} />
     </Routes>
    </>
    )
}
