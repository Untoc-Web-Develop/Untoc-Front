import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="h-content w-full">
      adminLayout
      <Outlet />
    </div>
  );
};

export default AdminLayout;
