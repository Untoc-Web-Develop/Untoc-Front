import React from 'react';
import { Outlet } from 'react-router-dom';

import AdminTab from '../components/AdminTab/AdminTab';

const AdminLayout = () => {
  return (
    <div className="flex h-content w-full justify-center">
      <div className="h-full w-[800px] lg:w-4/5">
        <div className="flex h-1/6 items-center">
          <AdminTab />
        </div>
        <div className="h-5-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
