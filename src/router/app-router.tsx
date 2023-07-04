import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { DescFormLayout, HomeLayout, SecondPageLayout } from '@/layouts';
import { SwitchRoutes } from '.';

export const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={SwitchRoutes.root} element={<HomeLayout />} />
        <Route path={SwitchRoutes.second_page} element={<SecondPageLayout />} />
        <Route path={`${SwitchRoutes.desc_form}/:id`} element={<DescFormLayout />} />
      </Routes>
    </>
  );
}
