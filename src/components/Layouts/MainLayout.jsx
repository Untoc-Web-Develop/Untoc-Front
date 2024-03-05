import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
