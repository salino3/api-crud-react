import React from 'react';
import { Footer, Header } from '@/common';
import { BodySndPage } from './components';

export const SecondPageComponent: React.FC = () => {
  return (
    <div>
      <Header />
      <BodySndPage />
      <Footer />
    </div>
  )
}
