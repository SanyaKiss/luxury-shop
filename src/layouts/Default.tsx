import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../sections/Footer';
import Header from '../sections/Header';

const Default: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Header cropped={pathname !== '/'} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Default;
