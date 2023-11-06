import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;
