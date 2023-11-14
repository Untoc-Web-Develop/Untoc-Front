import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
