import React from 'react';
import { Outlet } from 'react-router-dom';

import useRoleCheck from 'hooks/useRoleCheck';

import AdminTab from '../components/AdminTab/AdminTab';

const AdminLayout = () => {
  const { OnlyLogin } = useRoleCheck('admin');

  return (
    <div className="flex h-content w-full justify-center">
      <OnlyLogin>
        <div className="h-full w-[800px] lg:w-4/5">
          <div className="flex h-1/6 items-center">
            <AdminTab />
          </div>
          <div className="h-5-6">
            <Outlet />
          </div>
        </div>
      </OnlyLogin>
    </div>
  );
};

export default AdminLayout;
