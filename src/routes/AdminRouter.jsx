import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from 'page/Admin/Admin';
import AdminManageNewUser from 'page/Admin/AdminManageNewUser/AdminManageNewUser';
// import AdminManageRole from 'page/Admin/AdminManageRole/AdminManageRole';
// import AdminManageUser from 'page/Admin/AdminManageUser/AdminManageUser';
import AdminLayout from 'page/Admin/Layouts/AdminLayout';

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="newUser" element={<AdminManageNewUser />} />
        {/* <Route path="user" element={<AdminManageUser />} /> */}
        {/* <Route path="role" element={<AdminManageRole />} /> */}
        <Route path="*" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
