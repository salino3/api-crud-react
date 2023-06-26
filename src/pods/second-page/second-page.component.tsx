import React from 'react';
import { Footer, Header } from '@/common';
import { BodySndPage } from './components/body-s-page';

export const SecondPageComponent: React.FC = () => {
  return (
    <div>
      <Header />
      <BodySndPage />
      <Footer />
    </div>
  )
}
