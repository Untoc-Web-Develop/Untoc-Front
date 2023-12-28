import React from 'react';
import { Link } from 'react-router-dom';

const AdminTab = () => {
  return (
    <div className="w-fit border border-black">
      <Link to="/admin/newUser" className="border border-black">
        New User
      </Link>
      <Link to="/admin/user" className="border border-black">
        User
      </Link>
      <Link to="/admin/role" className="border border-black">
        Role
      </Link>
    </div>
  );
};

export default AdminTab;
